<script>
	import { assets } from '$app/paths';

	// Immagini Hatha Yoga
	let hathaYogaImages = [
		`${assets}/images/hatha/hatha1.jpg`,
		`${assets}/images/hatha/hatha2.jpg`,
		`${assets}/images/hatha/hatha3.jpg`,
		`${assets}/images/hatha/hatha4.jpg`,
		`${assets}/images/hatha/hatha5.jpg`,
		`${assets}/images/hatha/hatha6.jpg`,
		`${assets}/images/hatha/hatha7.jpg`
	];

	// Immagini Il Falò delle Streghe
	let faloImages = [];
	for (let i = 1; i <= 20; i++) {
		faloImages.push(`${assets}/images/falo/falo${i}.jpg`);
	}

	// Stati gallerie
	let currentIndexHatha = 0;
	let hoveredOnceHatha = false;

	let currentIndexFalo = 0;
	let hoveredOnceFalo = false;

	// Touch tracking Hatha
	let touchStartXHatha = 0;
	let touchEndXHatha = 0;

	// Touch tracking Falo
	let touchStartXFalo = 0;
	let touchEndXFalo = 0;

	// Funzioni per Hatha Yoga
	function prevImageHatha() {
		if (currentIndexHatha > 0) currentIndexHatha--;
	}

	function nextImageHatha() {
		if (currentIndexHatha < hathaYogaImages.length - 1) currentIndexHatha++;
	}

	function handleHoverHatha() {
		if (!hoveredOnceHatha) hoveredOnceHatha = true;
	}

	function handleTouchStartHatha(event) {
		touchStartXHatha = event.touches[0].clientX;
	}

	function handleTouchEndHatha(event) {
		touchEndXHatha = event.changedTouches[0].clientX;
		handleSwipeHatha();
	}

	function handleSwipeHatha() {
		const deltaX = touchEndXHatha - touchStartXHatha;
		const threshold = 50; // px minimo per considerare swipe

		if (Math.abs(deltaX) > threshold) {
			if (deltaX > 0) {
				prevImageHatha();
			} else {
				nextImageHatha();
			}
		}
	}

	// Funzioni per Il Falò delle Streghe
	function prevImageFalo() {
		if (currentIndexFalo > 0) currentIndexFalo--;
	}

	function nextImageFalo() {
		if (currentIndexFalo < faloImages.length - 1) currentIndexFalo++;
	}

	function handleHoverFalo() {
		if (!hoveredOnceFalo) hoveredOnceFalo = true;
	}

	function handleTouchStartFalo(event) {
		touchStartXFalo = event.touches[0].clientX;
	}

	function handleTouchEndFalo(event) {
		touchEndXFalo = event.changedTouches[0].clientX;
		handleSwipeFalo();
	}

	function handleSwipeFalo() {
		const deltaX = touchEndXFalo - touchStartXFalo;
		const threshold = 50; // px minimo per considerare swipe

		if (Math.abs(deltaX) > threshold) {
			if (deltaX > 0) {
				prevImageFalo();
			} else {
				nextImageFalo();
			}
		}
	}
</script>

<!-- HEADER -->
<div class="header-container">
	<h1>
		Conversazioni <br />
		Scomode!
	</h1>
	<img
		class="logo"
		src="{assets}/images/logo-sbloccate-sfondo-rosa.png"
		alt="logo sboccate sfondo rosa"
	/>
</div>

<!-- CONTAINER GALLERIE AFFIANCATE -->
<section class="galleries-container">
	<!-- Galleria Hatha Yoga -->
	<section
		class="gallery"
		on:mouseenter={handleHoverHatha}
		on:touchstart={handleTouchStartHatha}
		on:touchend={handleTouchEndHatha}
	>
		<div class="moving-title {hoveredOnceHatha ? 'moved' : ''}">HATHA YOGA</div>

		<div class="gallery-frame">
			<img
				src={hathaYogaImages[currentIndexHatha]}
				alt="Immagine Hatha Yoga"
				class="gallery-image transition-image"
			/>

			<div class="counter">
				{currentIndexHatha + 1} / {hathaYogaImages.length}
			</div>

			{#if currentIndexHatha > 0}
				<button on:click={prevImageHatha} class="arrow left" aria-label="Precedente">❮</button>
			{/if}
			{#if currentIndexHatha < hathaYogaImages.length - 1}
				<button on:click={nextImageHatha} class="arrow right" aria-label="Successiva">❯</button>
			{/if}
		</div>
	</section>

	<!-- Galleria Il Falò delle Streghe -->
	<section
		class="gallery"
		on:mouseenter={handleHoverFalo}
		on:touchstart={handleTouchStartFalo}
		on:touchend={handleTouchEndFalo}
	>
		<div class="moving-title {hoveredOnceFalo ? 'moved' : ''}">IL FALÒ DELLE STREGHE</div>

		<div class="gallery-frame">
			<img
				src={faloImages[currentIndexFalo]}
				alt="Immagine Il Falò delle Streghe"
				class="gallery-image transition-image"
			/>

			<div class="counter">
				{currentIndexFalo + 1} / {faloImages.length}
			</div>

			{#if currentIndexFalo > 0}
				<button on:click={prevImageFalo} class="arrow left" aria-label="Precedente">❮</button>
			{/if}
			{#if currentIndexFalo < faloImages.length - 1}
				<button on:click={nextImageFalo} class="arrow right" aria-label="Successiva">❯</button>
			{/if}
		</div>
	</section>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Sen:wght@700&display=swap');

	/* Header */
	.header-container {
		max-width: 768px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 1rem;
		flex-wrap: wrap;
	}

	.header-container h1 {
		font-size: 3rem;
		line-height: 1.2;
		font-weight: 600;
		text-align: center;
	}

	.logo {
		height: 200px;
		transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}

	.logo:hover {
		transform: scale(1.05) rotate(4deg);
	}

	@media (max-width: 600px) {
		.header-container {
			flex-direction: column;
			align-items: center;
		}
		.logo {
			margin-top: 1rem;
		}
	}

	/* Container gallerie affiancate */
	.galleries-container {
		display: flex;
		justify-content: center;
		gap: 3rem;
		margin-top: 6rem; /* spazio per titoli */
		flex-wrap: wrap;
	}

	/* Galleria */
	.gallery {
		position: relative;
		width: 360px;
		overflow: visible;
		padding-top: 5rem;
	}

	.gallery-frame {
		position: relative;
		width: 100%;
		height: 450px;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	.gallery-image,
	.transition-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: opacity 0.6s ease-in-out;
	}

	/* Titoli mobili */
	.moving-title {
		position: absolute;
		left: 50%;
		top: 50%; /* all'inizio è centrato verticalmente nella galleria */
		transform: translate(-50%, -50%);
		font-family: 'Sen', sans-serif;
		font-weight: 700;
		font-size: 3rem;
		color: #f277bb;
		text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
		transition:
			top 0.8s ease,
			transform 0.8s ease,
			font-size 0.8s ease;
		pointer-events: none;
		user-select: none;
		z-index: 10;
		width: 100%;
		text-align: center; /* per allineare meglio il testo */
	}

	.moving-title.moved {
		top: 0; /* si sposta sopra la galleria */
		transform: translate(-50%, 0);
		font-size: 2.5rem;
	}

	/* Frecce migliorate */
	.arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		padding: 0.4rem 0.8rem;
		font-size: 1.5rem;
		cursor: pointer;
		border-radius: 6px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
		transition: background 0.3s ease;
	}

	.arrow:hover {
		background: rgba(0, 0, 0, 0.7);
	}

	.arrow.left {
		left: 10px;
	}

	.arrow.right {
		right: 10px;
	}

	/* Counter */
	.counter {
		position: absolute;
		bottom: 10px;
		right: 10px;
		background: rgba(0, 0, 0, 0.5);
		color: white;
		padding: 4px 8px;
		border-radius: 6px;
		font-size: 0.9rem;
		font-family: sans-serif;
	}

	@media (max-width: 800px) {
		.galleries-container {
			flex-direction: column;
			align-items: center;
		}
		.gallery {
			width: 90vw;
			max-width: 360px;
		}
	}
</style>
