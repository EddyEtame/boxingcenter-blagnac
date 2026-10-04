import { disciplines, CLUB } from '../data/site.mjs';

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
    get('[data-ticket-destination]').textContent = sport.id === 'mma' ? 'MMA · lieu à confirmer avec le réseau' : 'Toulouse Minimes · 12 rue de Fenouillet';
    const cta = get<HTMLAnchorElement>('[data-ticket-cta]');
    cta.href = sport.id === 'mma' ? CLUB.contact : CLUB.planning;
    cta.innerHTML = `${sport.id === 'mma' ? 'Être orienté vers le bon cours' : 'Vérifier les cours aux Minimes'} <span aria-hidden="true">↗</span>`;
    get<HTMLAnchorElement>('[data-ticket-detail]').href = `/${sport.slug}/`;
    get('[data-copy-status]').textContent = '';
    summary = `Ma fiche de départ — Boxing Center\nJe viens de Blagnac.\nPratique : ${sport.name}.\nDisponibilité personnelle : ${time || 'à définir'}.\n${sport.preparation}\nQuel cours correspondrait à mon niveau et à ces disponibilités ? Que dois-je prévoir pour une première séance ?\n${sport.id === 'mma' ? 'Lieu MMA à confirmer auprès du réseau.' : 'Destination : Boxing Center Toulouse Minimes, 12 rue de Fenouillet, 31200 Toulouse.'}\nCette fiche ne constitue pas une réservation.\nInformations : ${cta.href}`;
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
  menu.addEventListener('keydown', event => { if (event.key === 'Escape') { menu.open = false; menu.querySelector('summary')?.focus(); } });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('click', event => { if (event.target instanceof Node && !menu.contains(event.target)) menu.open = false; });
});
