import { error } from '@sveltejs/kit';
import { eventi } from '$lib/eventi';
import { slugify } from '$lib/utils';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const evento = eventi.find((e) => slugify(e.titolo) === params.slug);

	if (!evento) throw error(404, 'Evento non trovato');

	return { evento };
};
