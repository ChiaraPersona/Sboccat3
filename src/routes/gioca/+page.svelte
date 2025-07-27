<script>
	import { onDestroy, onMount } from 'svelte';

	let frase = 'sono gay';
	let count = 0;

	let timeLeft = 10;
	let timerStarted = false;
	let timerInterval = null;
	let gameOver = false;

	let playerName = '';
	let nameSubmitted = false;
	let leaderboard = [];

	let pressed = false; // animazione bottone "Di più"
	let pressedRestart = false; // animazione bottone "Restart"

	import { fade } from 'svelte/transition';
	let isNewRecord = false;

	onMount(() => {
		// Disabilita zoom su doppio tap
		document.addEventListener(
			'touchstart',
			(e) => {
				if (e.touches.length > 1) {
					e.preventDefault();
				}
			},
			{ passive: false }
		);
		document.addEventListener('dblclick', (e) => {
			e.preventDefault();
		});
	});

	onDestroy(() => {
		if (timerInterval) clearInterval(timerInterval);
	});

	function formatTime(seconds) {
		const m = Math.floor(seconds / 60);
		const s = seconds % 60;
		return `${m}:${s.toString().padStart(2, '0')}`;
	}

	function getOrdinalSuffix(n) {
		return '°';
	}

	function increase() {
		if (gameOver || nameSubmitted) return;
		if (!timerStarted) startTimer();

		frase += 'y';
		count++;
	}

	function startTimer() {
		timerStarted = true;
		timerInterval = setInterval(() => {
			if (timeLeft > 1) {
				timeLeft--;
			} else {
				timeLeft = 0;
				clearInterval(timerInterval);
				gameOver = true;
			}
		}, 1000);
	}

	function submitScore() {
		if (!playerName.trim()) return;

		const currentHighScore = leaderboard.length ? Math.max(...leaderboard.map((e) => e.score)) : 0;
		isNewRecord = count > currentHighScore;

		if (isNewRecord) {
			// Nessun suono, solo messaggio visivo
		}

		leaderboard = [...leaderboard, { name: playerName.trim(), score: count }];
		leaderboard.sort((a, b) => b.score - a.score);
		if (leaderboard.length > 10) leaderboard = leaderboard.slice(0, 10);
		nameSubmitted = true;
	}

	function reset() {
		frase = 'sono gay';
		count = 0;
		timeLeft = 10;
		timerStarted = false;
		gameOver = false;
		playerName = '';
		nameSubmitted = false;
		clearInterval(timerInterval);

		pressedRestart = false; // reset animazione bottone restart
	}

	function getPlayerPosition() {
		if (!nameSubmitted) return null;
		return leaderboard.findIndex((entry) => entry.name === playerName && entry.score === count) + 1;
	}
</script>

<div class="container">
	<!-- Frase al centro -->
	<div class="frase-wrapper">
		{#if !gameOver}
			<p class="frase">{frase}</p>
		{/if}
	</div>

	<!-- Controlli in basso -->
	<div class="bottom-controls">
		<div class="timer">{formatTime(timeLeft)}</div>

		{#if !nameSubmitted}
			<button
				class="btn-text"
				class:pressed
				on:mousedown={() => (pressed = true)}
				on:mouseup={() => (pressed = false)}
				on:mouseleave={() => (pressed = false)}
				on:touchstart={() => (pressed = true)}
				on:touchend={() => (pressed = false)}
				on:click={increase}
				disabled={gameOver}
			>
				Di più
			</button>
		{:else}
			<div class="restart-wrapper">
				<button
					class="btn-text"
					class:pressed={pressedRestart}
					on:mousedown={() => (pressedRestart = true)}
					on:mouseup={() => (pressedRestart = false)}
					on:mouseleave={() => (pressedRestart = false)}
					on:touchstart={() => (pressedRestart = true)}
					on:touchend={() => (pressedRestart = false)}
					on:click={reset}
				>
					Restart
				</button>
			</div>
		{/if}

		<div class="counter">{count}</div>
	</div>

	<!-- Classifica a fine gioco -->
	{#if gameOver}
		<div class="leaderboard-popup">
			{#if !nameSubmitted}
				<h2>Classifica dei gay</h2>
				<ul>
					{#each leaderboard as entry, index}
						<li>{index + 1}{getOrdinalSuffix(index + 1)} - {entry.name}: {entry.score}</li>
					{/each}
				</ul>

				<div class="submit-area">
					<input type="text" placeholder="Inserisci il tuo nome" bind:value={playerName} />
					<button on:click={submitScore} disabled={!playerName.trim()}>Invia punteggio</button>
				</div>
			{:else}
				{#if isNewRecord}
					<p class="new-record-message" transition:fade={{ duration: 500 }}>
						🎉 Nuovo record! Complimenti!
					</p>
				{/if}

				<p>
					Sei al {getPlayerPosition()}{getOrdinalSuffix(getPlayerPosition())} posto con {count} click.
				</p>

				<h2>Classifica dei gay</h2>
				<ul>
					{#each leaderboard as entry, index}
						<li>{index + 1}{getOrdinalSuffix(index + 1)} - {entry.name}: {entry.score}</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
</div>

<style>
	:global(html) {
		touch-action: manipulation;
	}

	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 2rem;
		position: relative;
	}

	.frase-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 0 1rem;
	}

	.frase {
		font-weight: bold;
		font-size: 3rem;
		text-align: center;
		word-wrap: break-word;
		word-break: break-word;
		max-width: 90%;
		line-height: 1.2;
	}

	.bottom-controls {
		margin-bottom: 0;
		padding: 1rem 0;
		width: 100vw;
		max-width: 100vw;
		background-color: #f2ab27;
		border-radius: 0;
		box-shadow: none;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
		flex-wrap: nowrap;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
	}

	.timer,
	.counter {
		font-size: 2rem;
		font-weight: bold;
		user-select: none;
		width: 60px;
		text-align: center;
		flex-shrink: 0;
	}

	.btn-text {
		background-color: #f277bb;
		color: white;
		font-weight: bold;
		font-size: 2rem;
		padding: 1rem 2rem;
		min-width: 140px;
		text-align: center;
		border: none;
		border-radius: 30px;
		cursor: pointer;
		box-shadow:
			inset 0 1px 0 #ffe5c4,
			0 10px 0 #ba4c86;
		text-shadow: 0 1px 0 #000;
		transition:
			transform 0.1s ease,
			box-shadow 0.1s ease;
		white-space: nowrap;
		flex-shrink: 0;
	}

	.btn-text:disabled {
		background-color: #aaa;
		cursor: not-allowed;
		box-shadow: none;
	}

	.btn-text.pressed {
		transform: translateY(4px);
		box-shadow:
			inset 0 1px 3px rgba(0, 0, 0, 0.3),
			0 2px 0 #ba4c86;
	}

	.leaderboard-popup {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		border-radius: 15px;
		padding: 2rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		width: 90%;
		max-width: 400px;
		max-height: 80vh;
		overflow-y: auto;
		text-align: center;
		z-index: 10;
	}

	.leaderboard-popup ul {
		list-style: none;
		padding: 0;
		max-height: 150px;
		overflow-y: auto;
		margin-bottom: 1rem;
		border: 1px solid #eee;
		border-radius: 6px;
	}

	.submit-area {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.submit-area input {
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 6px;
		border: 1px solid #ccc;
		flex-grow: 1;
		min-width: 150px;
	}

	.submit-area button {
		padding: 0.5rem 1rem;
		font-weight: bold;
		background-color: #f472b6;
		border: none;
		color: white;
		border-radius: 6px;
		cursor: pointer;
	}

	.submit-area button:disabled {
		background-color: #aaa;
		cursor: not-allowed;
	}

	@media (max-width: 600px) {
		.leaderboard-popup {
			max-width: 90%;
			padding: 1.5rem;
		}

		.leaderboard-popup ul {
			max-height: 120px;
		}

		.btn-text {
			font-size: 1.6rem;
			padding: 0.8rem 1.5rem;
			min-width: 120px;
		}

		.bottom-controls {
			justify-content: space-between;
			padding: 1rem 2rem;
		}
	}
	.new-record-message {
		font-size: 1.4rem;
		font-weight: bold;
		color: #22c55e;
		background: #e6ffe6;
		padding: 0.8rem 1.2rem;
		border-radius: 10px;
		margin-bottom: 1rem;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}
</style>
