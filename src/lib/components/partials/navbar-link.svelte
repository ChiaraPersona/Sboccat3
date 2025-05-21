<script lang="ts">
	type Attributi = {
		url: string;
		testo: string;
	};

	let a: Attributi = $props();
</script>

<a href={a.url} class="bg-sb-viola text-sb-bianco hover:bg-sb-giallo hover:text-sb-bianco"
	>{a.testo}</a
>
