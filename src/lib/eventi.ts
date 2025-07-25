export type Evento = {
	immagine: string;
	titolo: string;
	sottotitolo: string;
	data: string; // oppure Date se preferisci gestire oggetti Date
};

export const eventi: Evento[] = [
	{
		immagine: 'desiderandae.png',
		titolo: 'Desiderandae',
		sottotitolo: 'Ti hanno mai detto che ascolti musica di merda?',
		data: '2025-07-06T19:00:00'
	},
	{
		immagine: 'doremixed.png',
		titolo: 'Hyperpop',
		sottotitolo: 'Live set tutto da ballare',
		data: '2025-09-23T20:00:00'
	},
	{
		immagine: 'burn_this_way.png',
		titolo: 'Gayming',
		sottotitolo: 'Giochi, party e community',
		data: '2025-10-01T18:30:00'
	}
];
