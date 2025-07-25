export type Persona = {
	immagine: string;
	nome: string;
	citazione: string;
	ruolo: string;
};

// Le foto delle persone sono tutte nella cartella 'static/images/persone'
export const persone: Array<Persona> = [
	{
		immagine: 'chiara.png',
		nome: 'Chiara Amodio',
		citazione: 'moh',
		ruolo: 'Graphic Designer'
	},
	{
		immagine: 'carlotta.png',
		nome: 'Carlotta Petrini',
		citazione: 'viva il vino',
		ruolo: 'Fotografa'
	},
	{
		immagine: 'giorgia.png',
		nome: 'Giorgia Grasso',
		citazione: 'sono molto stanca della vita ma vi ascolto',
		ruolo: 'Psicologa'
	}
];
