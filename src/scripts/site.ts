import { disciplines, CLUB, MMA_CLUB } from '../data/site.mjs';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js');

/* ---- La fiche de départ : un choix, un ticket, et le bon cours au bout ---- */
document.querySelectorAll<HTMLElement>('[data-session]').forEach((root) => {
  const form = root.querySelector<HTMLFormElement>('form')!;
  const ticket = root.querySelector<HTMLElement>('[data-ticket]')!;
  const get = <T extends HTMLElement>(selector: string) => root.querySelector<T>(selector)!;
  let summary = '';
  const update = (stamp = false) => {
    const values = new FormData(form);
    const sport = disciplines.find(d => d.id === values.get('discipline')) || disciplines[0];
    const day = String(values.get('day') || 'À définir');
    const period = String(values.get('period') || 'À définir');
    const time = [day !== 'À définir' ? day : '', period !== 'À définir' ? period.toLowerCase() : ''].filter(Boolean).join(' · ');
    const mma = sport.id === 'mma';
    get('[data-ticket-sport]').textContent = sport.name;
    get('[data-ticket-time]').textContent = time ? `Ma disponibilité : ${time}` : 'Ton moment reste à définir.';
    get('[data-ticket-advice]').textContent = sport.preparation;
    get('[data-ticket-destination]').textContent = mma ? `${MMA_CLUB.short} · ${MMA_CLUB.address.replace(', 31200 Toulouse', '')}` : `${CLUB.short} · 12 rue de Fenouillet`;
    const cta = get<HTMLAnchorElement>('[data-ticket-cta]');
    cta.href = mma ? MMA_CLUB.url : CLUB.planning;
    cta.innerHTML = `${mma ? 'Découvrir le club MMA' : 'Vérifier les cours aux Minimes'} <span aria-hidden="true">↗</span>`;
    get<HTMLAnchorElement>('[data-ticket-detail]').href = `/${sport.slug}/`;
    summary = `Je pars de Blagnac.\nPratique : ${sport.name}.\nDisponibilité : ${time || 'à définir'}.\n${mma ? `Destination : ${MMA_CLUB.name}, ${MMA_CLUB.address}.` : `Destination : ${CLUB.name}, ${CLUB.address}.`}\nQuel cours correspondrait à mon niveau et à ces disponibilités ? Que dois-je prévoir pour une première séance ?`;
    // Le sceau se pose : le ticket a enregistré le nouveau choix.
    if (stamp && !reduced) { ticket.classList.remove('is-stamped'); void ticket.offsetWidth; ticket.classList.add('is-stamped'); }
  };
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('change', () => update(true));
  // « Envoyer ma fiche au club » : la fiche attend sur la page Contact, rien ne part sans le visiteur.
  get('[data-ticket-send]').addEventListener('click', () => { try { sessionStorage.setItem('bc-fiche', summary); } catch { /* navigation privée : le formulaire reste vide */ } });
  const initial = root.dataset.initial || 'boxing';
  const radio = form.querySelector<HTMLInputElement>(`input[value="${initial}"]`);
  if (radio) radio.checked = true;
  update();
});

/* ---- Le formulaire de contact : pré-rempli par la fiche, erreurs lisibles ---- */
document.querySelectorAll<HTMLFormElement>('[data-contact-form]').forEach((form) => {
  const message = form.querySelector<HTMLTextAreaElement>('[data-message]')!;
  const pratique = form.querySelector<HTMLSelectElement>('[data-pratique]')!;
  const fiche = form.querySelector<HTMLInputElement>('[data-fiche-field]')!;
  try {
    const stored = sessionStorage.getItem('bc-fiche');
    if (stored) {
      fiche.value = stored;
      // On ne remplace jamais un message que le visiteur a commencé à écrire.
      if (!message.value) message.value = stored;
      const named = disciplines.find(d => stored.includes(`Pratique : ${d.name}.`));
      if (named) pratique.value = named.name;
      sessionStorage.removeItem('bc-fiche');
    }
  } catch { /* stockage indisponible */ }
  const error = form.querySelector<HTMLElement>('[data-form-error]')!;
  const reason = new URLSearchParams(location.search).get('erreur');
  if (reason) {
    error.textContent = (reason === 'config' ? error.dataset.errorConfig : error.dataset.errorSend) || '';
    error.hidden = false;
    error.focus?.();
  }
});

/* ---- Le menu mobile : fermé par Échap, clic dehors ou retour au bureau ; le fond devient inerte ---- */
document.querySelectorAll<HTMLDetailsElement>('.mobile-menu').forEach(menu => {
  const header = menu.closest<HTMLElement>('header')!;
  const summary = menu.querySelector('summary')!;
  const background = [...document.querySelectorAll<HTMLElement>('main, .site-footer, .club-prompt')];
  const mobile = matchMedia('(max-width: 800px)');
  const sync = () => {
    const open = menu.open && mobile.matches;
    background.forEach(element => { element.inert = open; });
    summary.setAttribute('aria-expanded', String(open));
  };
  const close = (restoreFocus = false) => {
    menu.open = false;
    sync();
    if (restoreFocus) summary.focus();
  };
  menu.addEventListener('toggle', sync);
  document.addEventListener('keydown', event => {
    if (!menu.open || !mobile.matches) return;
    if (event.key === 'Escape') { event.preventDefault(); close(true); return; }
    if (event.key !== 'Tab') return;
    const focusable = [...header.querySelectorAll<HTMLElement>('a[href], summary, button:not([disabled])')].filter(element => element.getClientRects().length > 0);
    const first = focusable[0], last = focusable.at(-1)!;
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => close()));
  document.addEventListener('click', event => { if (event.target instanceof Node && !menu.contains(event.target)) close(); });
  mobile.addEventListener('change', () => { if (!mobile.matches) close(); });
  sync();
});

/* ---- Le rectangle flottant vers le club : s'élargit de temps en temps, s'efface sur les zones de choix ---- */
const clubPrompt = document.querySelector<HTMLElement>('[data-club-prompt]');
if (clubPrompt) {
  let nextDistance = 240, lastExpanded = -12000, timer: ReturnType<typeof setTimeout>;
  const clearing = new Set<Element>();
  if ('IntersectionObserver' in window) {
    const watcher = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) clearing.add(entry.target); else clearing.delete(entry.target); });
      clubPrompt.classList.toggle('is-away', clearing.size > 0);
    }, { threshold: 0 });
    document.querySelectorAll('[data-prompt-clear]').forEach(zone => watcher.observe(zone));
  }
  const expand = () => {
    if (clearing.size > 0) return;
    clubPrompt.classList.add('is-expanded');
    clearTimeout(timer);
    timer = setTimeout(() => clubPrompt.classList.remove('is-expanded'), 3800);
  };
  window.addEventListener('scroll', () => {
    if (document.querySelector('.mobile-menu[open]')) return;
    if (scrollY < nextDistance || performance.now() - lastExpanded < 12000) return;
    lastExpanded = performance.now();
    nextDistance = scrollY + Math.max(700, innerHeight);
    expand();
  }, { passive: true });
  clubPrompt.addEventListener('focus', expand);
  clubPrompt.addEventListener('mouseenter', expand);
}

/* ---- Le trajet Blagnac → Minimes se trace une fois, quand on arrive dessus ---- */
const route = document.querySelector<SVGElement>('[data-route-draw]');
if (route) {
  if (reduced || !('IntersectionObserver' in window)) route.classList.add('is-drawn');
  else {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { route.classList.add('is-drawn'); observer.disconnect(); }
    }, { threshold: 0.6 });
    observer.observe(route);
  }
}

/* ---- La variante de couleurs à l'essai : un choix, mémorisé dans le navigateur ---- */
const choices = document.querySelectorAll<HTMLButtonElement>('[data-theme-choice]');
if (choices.length) {
  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  const apply = (theme: string) => {
    if (theme === 'minimes') document.documentElement.dataset.theme = 'minimes'; else delete document.documentElement.dataset.theme;
    if (themeColor) themeColor.content = theme === 'minimes' ? '#0a1020' : '#192724';
    choices.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme)));
    try { localStorage.setItem('bc-theme', theme); } catch { /* stockage indisponible */ }
  };
  let current = 'blagnac';
  try { current = localStorage.getItem('bc-theme') === 'minimes' ? 'minimes' : 'blagnac'; } catch { /* idem */ }
  choices.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === current)));
  choices.forEach(button => button.addEventListener('click', () => apply(button.dataset.themeChoice || 'blagnac')));
}
