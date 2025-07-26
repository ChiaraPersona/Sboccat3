<script>
	import { assets } from '$app/paths';
</script>

<div class="mx-auto flex max-w-screen-md flex-row items-center justify-between gap-6 px-3 py-6">
	<div>
		<h1 class="items-center text-center text-5xl leading-snug font-semibold">
			Conversazioni <br />
			Scomode!
		</h1>
	</div>
	<img
		class="h-60 md:h-80"
		src="{assets}/images/logo-sbloccate-sfondo-rosa.png"
		alt="logo sboccate sfondo rosa"
	/>
</div>

<style>
	img {
		transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}

	img:hover {
		transform: scale(1.05) rotate(4deg);
	}
</style>
