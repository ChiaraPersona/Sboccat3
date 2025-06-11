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
		{
			'bg-sb-viola text-sb-bianco hover:bg-sb-arancione hover:text-sb-bianco': !isActive,
			'bg-sb-giallo text-black': isActive
		}
	]}
>
	{a.testo}
</a>
