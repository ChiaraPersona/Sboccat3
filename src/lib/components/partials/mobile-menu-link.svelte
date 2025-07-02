<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';

	type Attributi = {
		url: string;
		testo: string;
	};

	let a: Attributi = $props();

	const href = $derived(base + a.url);
	const isActive = $derived(base + a.url === page.url.pathname);
</script>

<a
	{href}
	class={[
		'block rounded-md p-2',
		'text-center',

		{
			'bg-sb-bianco/15 text-sb-bianco hover:bg-sb-bianco/40 ': !isActive,
			'text-sb-rosa bg-sb-bianco': isActive
		}
	]}
>
	{a.testo}
</a>
