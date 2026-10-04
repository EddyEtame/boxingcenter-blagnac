import { disciplines, CLUB, MMA_CLUB } from '../data/site.mjs';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .opening h2, .visit-steps article, .event-text, .editorial-block').forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top > innerHeight) { element.classList.add('will-reveal'); observer.observe(element); }
  });
}

document.querySelectorAll<HTMLElement>('[data-session]').forEach((root) => {
  const form = root.querySelector<HTMLFormElement>('form')!;
  const get = <T extends HTMLElement>(selector: string) => root.querySelector<T>(selector)!;
  let summary = '';
  const update = () => {
    const values = new FormData(form);
    const sport = disciplines.find(d => d.id === values.get('discipline')) || disciplines[0];
    const day = String(values.get('day') || 'À définir');
    const period = String(values.get('period') || 'À définir');
    const time = [day !== 'À définir' ? day : '', period !== 'À définir' ? period.toLowerCase() : ''].filter(Boolean).join(' · ');
    get('[data-ticket-sport]').textContent = sport.name;
    get('[data-ticket-time]').textContent = time ? `Ma disponibilité : ${time}` : 'Votre moment reste à définir.';
    get('[data-ticket-advice]').textContent = sport.preparation;
    get('[data-ticket-destination]').textContent = sport.id === 'mma' ? `${MMA_CLUB.short} · ${MMA_CLUB.address.replace(', 31200 Toulouse', '')}` : `${CLUB.short} · 12 rue de Fenouillet`;
    const cta = get<HTMLAnchorElement>('[data-ticket-cta]');
    cta.href = sport.id === 'mma' ? MMA_CLUB.url : CLUB.planning;
    cta.innerHTML = `${sport.id === 'mma' ? 'Découvrir le club MMA' : 'Vérifier les cours aux Minimes'} <span aria-hidden="true">↗</span>`;
    get<HTMLAnchorElement>('[data-ticket-detail]').href = `/${sport.slug}/`;
    get('[data-copy-status]').textContent = '';
    summary = `Ma fiche de départ — Boxing Center\nJe viens de Blagnac.\nPratique : ${sport.name}.\nDisponibilité personnelle : ${time || 'à définir'}.\n${sport.preparation}\nQuel cours correspondrait à mon niveau et à ces disponibilités ? Que dois-je prévoir pour une première séance ?\n${sport.id === 'mma' ? `Destination : ${MMA_CLUB.name}, ${MMA_CLUB.address}.` : `Destination : ${CLUB.name}, ${CLUB.address}.`}\nCette fiche ne constitue pas une réservation.\nInformations : ${cta.href}`;
  };
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('change', update);
  get('[data-copy-ticket]').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(summary);
      get('[data-copy-status]').textContent = 'Fiche copiée. Vous pouvez la garder ou la transmettre au club.';
    } catch {
      const field = document.createElement('textarea');
      field.className = 'copy-fallback'; field.value = summary; field.readOnly = true; field.setAttribute('aria-label', 'Votre fiche à sélectionner et copier');
      root.querySelector('.copy-fallback')?.remove();
      get('[data-copy-status]').after(field); field.focus(); field.select();
      get('[data-copy-status]').textContent = 'Sélectionnez cette fiche pour la copier manuellement.';
    }
  });
  const initial = root.dataset.initial || 'boxing';
  const radio = form.querySelector<HTMLInputElement>(`input[value="${initial}"]`);
  if (radio) radio.checked = true;
  update();
});

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

const clubPrompt = document.querySelector<HTMLElement>('[data-club-prompt]');
if (clubPrompt) {
  let nextDistance = 240, lastExpanded = -12000, timer: ReturnType<typeof setTimeout>;
  // Le rectangle s'efface tant qu'une zone de choix (fiche de départ, coordonnées du club)
  // est à l'écran : il ne doit jamais recouvrir ce que le visiteur est en train de toucher.
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
