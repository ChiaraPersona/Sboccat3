<script>
	let frase = $state('sono gay');

	function increase() {
		frase = frase + 'y';
	}
</script>

<div class="flex h-[calc(100vh-124px-40px)] items-center justify-center p-8">
	<p class="w-full text-center text-4xl font-bold break-all uppercase">{frase}</p>
</div>

<div class="bg-sb-bianco fixed bottom-0 w-full p-8">
	<button
		onclick={(e) => {
			e.preventDefault();
			increase();
		}}
		class="bg-sb-rosso text-sb-bianco w-full touch-manipulation rounded-full p-4 text-xl font-bold uppercase hover:bg-red-700"
	>
		di più
	</button>
</div>
