<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  const galleries = {
    hatha: Array.from({ length: 7 }, (_, i) => /images/hatha/hatha${i + 1}.jpg),
    falo: Array.from({ length: 20 }, (_, i) => /images/falo/falo${i + 1}.jpg)
  };

  let state = {
    hatha: { currentIndex: 0 },
    falo: { currentIndex: 0 }
  };

  // Posizione X animata per lo slide
  // useremo tweened per animare la posizione dell'immagine
  const posX = {
    hatha: tweened(0, { duration: 300, easing: cubicOut }),
    falo: tweened(0, { duration: 300, easing: cubicOut }),
  };

  // Per tracciare il drag
  let dragging = {
    hatha: false,
    falo: false
  };
  let startX = { hatha: 0, falo: 0 };
  let currentX = { hatha: 0, falo: 0 };

  function pointerDown(galleryKey, event) {
    dragging[galleryKey] = true;
    startX[galleryKey] = event.clientX;
  }

  function pointerMove(galleryKey, event) {
    if (!dragging[galleryKey]) return;
    currentX[galleryKey] = event.clientX;
    let delta = currentX[galleryKey] - startX[galleryKey];
    posX[galleryKey].set(delta);
  }

  function pointerUp(galleryKey) {
    if (!dragging[galleryKey]) return;
    dragging[galleryKey] = false;
    let delta = currentX[galleryKey] - startX[galleryKey];
    const threshold = 100; // soglia di slide per cambiare immagine

    if (delta > threshold && state[galleryKey].currentIndex > 0) {
      // slide verso destra, immagine precedente
      state[galleryKey].currentIndex--;
    } else if (delta < -threshold && state[galleryKey].currentIndex < galleries[galleryKey].length -1) {
      // slide verso sinistra, immagine successiva
      state[galleryKey].currentIndex++;
    }
    // Anima la posizione a zero (ritorno all'origine)
    posX[galleryKey].set(0);
  }
</script>

{#each Object.entries(galleries) as [key, images]}
  <section
    class="gallery"
    on:pointerdown={(e) => pointerDown(key, e)}
    on:pointermove={(e) => pointerMove(key, e)}
    on:pointerup={() => pointerUp(key)}
    on:pointercancel={() => pointerUp(key)}
    on:mouseleave={() => pointerUp(key)}
  >
    <div class="gallery-frame" style="overflow:hidden; position:relative;">
      {#each images as img, i}
        <img
          src={img}
          alt={Immagine ${key} ${i + 1}}
          class="gallery-image"
          style="
            position: absolute;
            top: 0;
            left: {(i - state[key].currentIndex) * 100}%;
            width: 100%;
            height: 100%;
            transform: translateX({$posX[key]}px);
            transition: {dragging[key] ? 'none' : 'transform 0.3s ease'};
            user-select: none;
            pointer-events: none;
          "
        />
      {/each}
    </div>
  </section>
{/each}

<style>
  .gallery {
    width: 360px;
    height: 450px;
    margin: 1rem;
    touch-action: pan-y;
  }
  .gallery-frame {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .gallery-image {
    object-fit: cover;
  }
</style>

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
		transition: opacity 0.3s ease-in-out;
		opacity: 1;
	}

	.gallery-image.fade-in {
		opacity: 1;
		transition: opacity 0.3s ease-in;
	}

	.gallery-image.fade-out {
		opacity: 0;
		transition: opacity 0.3s ease-out;
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
		text-align: center;
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
		z-index: 5;
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