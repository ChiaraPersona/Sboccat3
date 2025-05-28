import { deLocalizeUrl } from '$lib/paraglide/runtime';

export const reroute = (request) => deLocalizeUrl(request.url).pathname;

//

const utente = {
	nome: 'Chiara',
	cognome: 'Pippo',
	eta: '28',
	citta: 'Polignano a Mare'
};

const frase =
	'Ciao, mi chiamo ' + utente.nome + ' ' + utente.cognome + ' e ho ' + utente.eta + ' anni';

console.log(frase);
