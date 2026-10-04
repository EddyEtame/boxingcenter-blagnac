import type { APIRoute } from 'astro';
import { CLUB } from '../../data/site.mjs';

/**
 * Relais du formulaire vers Inlet (le service de formulaires d'Eddy), même mécanisme
 * que sur le satellite Colomiers : Inlet attend du JSON et une preuve de travail
 * (SHA-256), ce qu'un <form> natif ne sait pas faire. On reçoit le POST ici, on résout
 * la preuve côté serveur, on relaie, on redirige. Le formulaire marche sans JavaScript
 * et l'appel part du serveur, donc CORS ne s'applique pas.
 *
 * Configuration : la variable d'environnement INLET_FORM_ID (identifiant du formulaire
 * créé dans Inlet pour ce site) doit être définie dans Vercel. Sans elle, on redirige
 * vers /contact/?erreur=config pour afficher le téléphone du club.
 */
export const prerender = false;

const INLET = 'https://inlett.vercel.app';
const SUCCESS = '/merci/';
const failure = (reason: string) => `/contact/?erreur=${reason}#formulaire`;

type Challenge = { challenge: string; difficulty?: number; timestamp?: number | string };

async function solve(challenge: string, difficulty: number): Promise<string | null> {
  const prefix = '0'.repeat(Math.max(0, difficulty));
  const CEILING = 5_000_000;
  const { createHash } = await import('node:crypto');
  for (let nonce = 0; nonce < CEILING; nonce++) {
    // Le deux-points fait partie du format attendu par Inlet.
    if (createHash('sha256').update(`${challenge}:${nonce}`).digest('hex').startsWith(prefix)) return String(nonce);
  }
  return null;
}

const text = (value: FormDataEntryValue | null, max = 4000) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export const POST: APIRoute = async ({ request, redirect }) => {
  const formId = import.meta.env.INLET_FORM_ID ?? process.env.INLET_FORM_ID;
  let data: FormData;
  try { data = await request.formData(); } catch { return redirect(failure('envoi'), 303); }

  // Pot de miel : rempli, c'est un robot. On répond comme si tout allait bien.
  if (text(data.get('_gotcha'))) return redirect(SUCCESS, 303);

  const prenom = text(data.get('prenom'), 80);
  const nom = text(data.get('nom'), 80);
  const email = text(data.get('email'), 160);
  const telephone = text(data.get('telephone'), 40);
  const pratique = text(data.get('pratique'), 80);
  const message = text(data.get('message'), 4000);
  const fiche = text(data.get('fiche'), 600);

  // La validation serveur fait autorité, quoi que fasse le navigateur.
  if (!prenom || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) return redirect(failure('champs'), 303);
  if (!formId) { console.error('INLET_FORM_ID manquant : formulaire non relayé.'); return redirect(failure('config'), 303); }

  const payload: Record<string, string> = {
    name: [prenom, nom].filter(Boolean).join(' '),
    email,
    telephone,
    pratique_recherchee: pratique,
    message,
    fiche_de_depart: fiche,
    club_destinataire: CLUB.name,
    origine: 'boxingcenter-blagnac.fr',
    _lang: 'fr',
    _gotcha: '',
  };

  try {
    // Preuve de travail facultative : si le défi n'est pas joignable, on envoie sans.
    const challengeResponse = await fetch(`${INLET}/api/challenge`, { headers: { accept: 'application/json' } });
    if (challengeResponse.ok) {
      const challenge = (await challengeResponse.json()) as Challenge;
      if (challenge?.challenge) {
        const nonce = await solve(challenge.challenge, Number(challenge.difficulty ?? 4));
        if (nonce !== null) {
          payload.pow_challenge = challenge.challenge;
          payload.pow_timestamp = String(challenge.timestamp ?? Date.now());
          payload.pow_nonce = nonce;
        }
      }
    }
  } catch { /* on continue sans preuve */ }

  try {
    const sent = await fetch(`${INLET}/api/submit/${formId}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
    if (!sent.ok) { console.error('Inlet a refusé la soumission :', sent.status, await sent.text()); return redirect(failure('envoi'), 303); }
  } catch (error) {
    console.error('Inlet injoignable :', error);
    return redirect(failure('envoi'), 303);
  }
  return redirect(SUCCESS, 303);
};

/** Un GET sur l'endpoint n'a pas de sens : on renvoie au formulaire. */
export const GET: APIRoute = ({ redirect }) => redirect('/contact/#formulaire', 303);
