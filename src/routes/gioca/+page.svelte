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

<div class="bg-sb-bianco fixed bottom-0 flex w-full justify-center p-8">
	<div class="button">
		<button
			on:click={(e) => {
				e.preventDefault();
				increase();
			}}
			class="btn-text"
			aria-label="Aumenta"
		>
			Di più
		</button>
	</div>
</div>

<style>
	.button {
		position: relative;
		display: inline-block;
		margin: 20px;
	}

	.btn-text {
		color: white;
		font-family: Helvetica, sans-serif;
		font-weight: bold;
		font-size: 24px;
		text-align: center;
		background-color: #f472b6;
		display: block;
		position: relative;
		padding: 20px 40px;
		border-radius: 30px;
		cursor: pointer;
		text-shadow: 0px 1px 0px #000;
		filter: dropshadow(color=#000, offx=0px, offy=1px);
		box-shadow:
			inset 0 1px 0 #ffe5c4,
			0 10px 0 #ba4c86;
		transition:
			top 0.1s ease,
			background-color 0.1s ease,
			box-shadow 0.1s ease;
		border: none;
	}

	.btn-text:active {
		top: 10px;
		background-color: #f472b6;
		box-shadow:
			inset 0 1px 0 #ffe5c4,
			inset 0 -3px 0 #ba4c86;
	}

	.button::after {
		content: '';
		height: 100%;
		width: 100%;
		padding: 4px;
		position: absolute;
		bottom: -15px;
		left: -4px;
		z-index: -1;
		background-color: rgba(43, 24, 0, 0.4); /* ombra più chiara e trasparente */
		border-radius: 30px;
	}
</style>
