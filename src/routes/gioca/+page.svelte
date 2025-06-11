<script>
	let frase = $state('sono gay');
	let bgColorIndex = $state(0);

	const colors = ['bg-sb-rosa', 'bg-sb-rosso', 'bg-sb-giallo', 'bg-sb-viola', 'bg-sb-arancione'];

	function increase() {
		frase = frase + 'y';
		bgColorIndex = (bgColorIndex + 1) % colors.length;
	}
</script>

<div
	class={`flex h-[calc(100vh-124px-40px)] items-center justify-center p-8 transition-colors duration-500 ${colors[bgColorIndex]}`}
>
	<p class="w-full text-center text-4xl font-bold break-all uppercase">{frase}</p>
</div>

<div class="bg-sb-bianco fixed bottom-0 w-full p-8">
	<button
		onclick={(e) => {
			e.preventDefault();
			increase();
		}}
		class="bg-sb-viola text-sb-bianco hover:bg-purple-600np w-full touch-manipulation rounded-full p-4 text-xl font-bold uppercase"
	>
		di più
	</button>
</div>
