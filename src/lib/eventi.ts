export type Evento = {
	titolo: string;
	sottotitolo: string;
	data: string;
	immagine: string;
	luogo: string;
	instagram: string;
};

export const eventi: Evento[] = [
	{
		titolo: 'Desiderandae',
		sottotitolo: 'Ti hanno mai detto che ascolti musica di merda?',
		data: '2025-07-06T19:00:00',
		immagine: 'desiderandae.png',
		luogo: 'Collettivo Resine',
		instagram: ''
	},
	{
		titolo: 'Hyperpop',
		sottotitolo: 'Live set tutto da ballare',
		data: '2025-09-23T20:00:00',
		immagine: 'doremixed.png',
		luogo: 'Somewhere Club',
		instagram: ''
	},
	{
		titolo: 'Gayming',
		sottotitolo: 'Giochi, party e community',
		data: '2025-10-01T18:30:00',
		immagine: 'burn_this_way.png',
		luogo: 'Casa delle Culture',
		instagram: ''
	}
];
