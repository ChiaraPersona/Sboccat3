import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*'] // <-- questa è la sintassi corretta
		}
	}
};
