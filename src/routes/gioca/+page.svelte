<script>
	import { onDestroy } from 'svelte';

	let frase = 'sono gay';
	let count = 0;

	let timeLeft = 10;
	let timerStarted = false;
	let timerInterval = null;
	let gameOver = false;

	let playerName = '';
	let nameSubmitted = false;
	let leaderboard = [];

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

		if (!timerStarted) {
			startTimer();
		}

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

		leaderboard.push({ name: playerName.trim(), score: count });
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
	}

	function getPlayerPosition() {
		if (!nameSubmitted) return null;
		return leaderboard.findIndex((item) => item.name === playerName && item.score === count) + 1;
	}

	onDestroy(() => {
		if (timerInterval) clearInterval(timerInterval);
	});
</script>

<div class="container">
	<!-- Frase al centro -->
	<div class="frase-wrapper">
		<p class="frase">{frase}</p>
	</div>

	<!-- Controlli in basso -->
	<div class="bottom-controls">
		<div class="timer">{formatTime(timeLeft)}</div>

		{#if !nameSubmitted}
			<button class="btn-text" on:click={increase} disabled={gameOver} aria-label="Aumenta">
				Di più
			</button>
		{:else}
			<button class="btn-text" on:click={reset}>Restart</button>
		{/if}

		<div class="counter">{count}</div>
	</div>

	<!-- Classifica a fine gioco -->
	{#if gameOver}
		<div class="leaderboard-popup">
			{#if !nameSubmitted}
				<h2>Classifica</h2>
				<ul>
					{#each leaderboard as entry, index}
						<li>{index + 1}{getOrdinalSuffix(index + 1)} - {entry.name}: {entry.score}</li>
					{/each}
				</ul>

				<div class="submit-area">
					<input type="text" placeholder="Inserisci il tuo nome" bind:value={playerName} />
					<button on:click={submitScore} disabled={!playerName.trim()}> Invia punteggio </button>
				</div>
			{:else}
				<h3>Grazie {playerName}!</h3>
				<p>
					Sei al {getPlayerPosition()}{getOrdinalSuffix(getPlayerPosition())} posto con {count} click.
				</p>

				<h2>Classifica</h2>
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
	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 2rem;
		position: relative;
	}

	/* FRASI AL CENTRO CON WRAP */
	.frase-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
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
		margin-bottom: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.timer,
	.counter {
		font-size: 2rem;
		font-weight: bold;
		user-select: none;
	}

	.btn-text {
		background-color: #f472b6;
		color: white;
		font-weight: bold;
		font-size: 2.5rem;
		padding: 1rem 3rem;
		border: none;
		border-radius: 30px;
		cursor: pointer;
		box-shadow:
			inset 0 1px 0 #ffe5c4,
			0 10px 0 #ba4c86;
		text-shadow: 0 1px 0 #000;
		transition: background-color 0.2s ease;
	}

	.btn-text:disabled {
		background-color: #aaa;
		cursor: not-allowed;
		box-shadow: none;
	}

	.leaderboard-popup {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		border-radius: 15px;
		padding: 2rem 3rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		max-width: 400px;
		width: 90%;
		text-align: center;
		z-index: 10;
	}

	.leaderboard-popup ul {
		list-style: none;
		padding: 0;
		max-height: 200px;
		overflow-y: auto;
		margin-bottom: 1rem;
	}

	.submit-area {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}

	.submit-area input {
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 6px;
		border: 1px solid #ccc;
		flex-grow: 1;
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
</style>
