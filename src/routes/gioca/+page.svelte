<script>
	import { onDestroy } from 'svelte';

	let frase = 'sono gay';
	let count = 0;

	let timeLeft = 10;
	let timerStarted = false;
	let timerInterval;
	let gameOver = false;

	let playerName = '';
	let leaderboard = [];
	let nameSubmitted = false;

	function increase() {
		if (gameOver) return;
		if (!timerStarted) startTimer();

		frase += 'y';
		count += 1;
	}

	function startTimer() {
		timerStarted = true;
		timerInterval = setInterval(() => {
			if (timeLeft > 0) {
				timeLeft--;
			} else {
				clearInterval(timerInterval);
				gameOver = true;
			}
		}, 1000);
	}

	function formatTime(seconds) {
		const m = Math.floor(seconds / 60);
		const s = seconds % 60;
		return `${m}:${s.toString().padStart(2, '0')}`;
	}

	function submitScore() {
		if (playerName.trim() === '') return;

		leaderboard = [...leaderboard, { name: playerName, score: count }]
			.sort((a, b) => b.score - a.score)
			.slice(0, 10);
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

	onDestroy(() => {
		if (timerInterval) clearInterval(timerInterval);
	});
</script>

<!-- CONTENUTO CENTRALE -->
<div
	class="flex h-[calc(100vh-180px)] flex-col items-center justify-center overflow-y-auto p-6 text-center"
>
	{#if !gameOver}
		<p class="text-4xl font-bold break-all uppercase">{frase}</p>
	{:else if !nameSubmitted}
		<div class="flex flex-col items-center">
			<h2 class="mb-2 text-lg font-bold">Il tempo è finito!</h2>
			<p class="mb-2">Hai fatto <strong>{count}</strong> click.</p>
			<input
				bind:value={playerName}
				placeholder="Il tuo nome"
				class="mb-2 w-64 rounded border border-gray-300 px-3 py-2"
				maxlength="20"
			/>
			<button on:click={submitScore} class="btn-submit">Invia</button>
		</div>
	{:else}
		<div class="flex flex-col items-center">
			<h2 class="mb-4 text-2xl font-bold">🏆 Classifica</h2>
			<ol class="list-decimal space-y-1 pl-5 text-left">
				{#each leaderboard as entry, i}
					<li class={i === 0 ? 'font-extrabold text-pink-600' : ''}>
						{entry.name} – {entry.score} click
					</li>
				{/each}
			</ol>
		</div>
	{/if}
</div>

<!-- BARRA INFERIORE FISSA -->
<div class="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-white p-6">
	<div class="flex items-center justify-center gap-6">
		<div class="timer">{formatTime(timeLeft)}</div>

		<button on:click={increase} class="btn-text" aria-label="Aumenta" disabled={gameOver}>
			Di più
		</button>

		<div class="counter">{count}</div>

		{#if gameOver && nameSubmitted}
			<button on:click={reset} class="btn-restart" aria-label="Restart">Restart</button>
		{/if}
	</div>
</div>

<style>
	.btn-text {
		color: white;
		font-family: Helvetica, sans-serif;
		font-weight: bold;
		font-size: 20px;
		text-align: center;
		background-color: #f472b6;
		padding: 16px 30px;
		border-radius: 30px;
		cursor: pointer;
		text-shadow: 0px 1px 0px #000;
		box-shadow:
			inset 0 1px 0 #ffe5c4,
			0 6px 0 #ba4c86;
		border: none;
		transition: all 0.1s ease-in-out;
	}

	.btn-text:active {
		top: 6px;
		background-color: #f472b6;
		box-shadow:
			inset 0 1px 0 #ffe5c4,
			inset 0 -3px 0 #ba4c86;
	}

	.btn-text:disabled {
		background-color: #aaa;
		box-shadow: none;
		cursor: not-allowed;
	}

	.btn-restart {
		padding: 10px 16px;
		font-size: 14px;
		background-color: #6366f1;
		color: white;
		border: none;
		border-radius: 20px;
		cursor: pointer;
		transition: transform 0.2s ease;
	}

	.btn-restart:hover {
		transform: scale(1.05);
		background-color: #4f46e5;
	}

	.btn-submit {
		background-color: #10b981;
		color: white;
		padding: 10px 20px;
		border-radius: 20px;
		font-weight: bold;
		border: none;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.btn-submit:hover {
		background-color: #059669;
	}

	.counter,
	.timer {
		font-size: 24px;
		font-weight: bold;
		color: #333;
		min-width: 40px;
		text-align: center;
		user-select: none;
	}
</style>
