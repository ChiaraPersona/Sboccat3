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
	},
	{
		immagine: 'christina.jpeg',
		nome: 'Christina Bassi',
		citazione: 'Le idee migliori arrivano quando smetti di pensarci.',
		ruolo: 'Copywriter'
	},
	{
		immagine: 'chiara-bassi.jpeg',
		nome: 'Chiara Bassi',
		citazione: 'Ci vuole caos dentro di sé per generare una stella danzante.',
		ruolo: 'Illustratrice'
	},
	{
		immagine: 'giuseppe.jpeg',
		nome: 'Giuseppe Valerio',
		citazione: 'La creatività è intelligenza che si diverte.',
		ruolo: 'Videomaker'
	},
	{
		immagine: 'macri.jpeg',
		nome: 'Macri Tanzi',
		citazione: 'Ascoltare è il primo passo per cambiare.',
		ruolo: 'Educatrice'
	},
	{
		immagine: 'matteito.jpeg',
		nome: 'Matteito',
		citazione: 'Quando si gioca si è davvero liberi.',
		ruolo: 'Animatore sociale'
	},
	{
		immagine: 'sara.jpeg',
		nome: 'Sara Piccigallo',
		citazione: 'Ogni storia merita di essere raccontata.',
		ruolo: 'Regista teatrale'
	},
	{
		immagine: 'anastasia.jpeg',
		nome: 'Anastasia',
		citazione: 'L’arte dice l’indicibile.',
		ruolo: 'Attrice e performer'
	}
];
