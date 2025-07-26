<script>
	import { onDestroy } from 'svelte';

	let frase = 'sono gay';
	let count = 0;

	let timeLeft = 10;
	let timerInterval = null;
	let timerStarted = false;
	let gameOver = false;

	function increase() {
		if (gameOver) return;

		if (!timerStarted) {
			startTimer();
		}

		frase = frase + 'y';
		count += 1;
	}

	function startTimer() {
		timerStarted = true;
		timerInterval = setInterval(() => {
			if (timeLeft > 0) {
				timeLeft -= 1;
			} else {
				clearInterval(timerInterval);
				gameOver = true;
			}
		}, 1000);
	}

	function reset() {
		clearInterval(timerInterval);
		timeLeft = 10;
		count = 0;
		frase = 'sono gay';
		timerStarted = false;
		gameOver = false;
	}

	onDestroy(() => {
		if (timerInterval) clearInterval(timerInterval);
	});

	function formatTime(seconds) {
		const m = Math.floor(seconds / 60);
		const s = seconds % 60;
		return `${m}:${s.toString().padStart(2, '0')}`;
	}
</script>

<div
	class="flex h-[calc(100vh-124px-40px)] items-center justify-center p-8 transition-colors duration-500"
>
	<p class="w-full text-center text-4xl font-bold break-all uppercase">{frase}</p>
</div>

<div class="fixed bottom-0 flex w-full items-center p-8">
	<div class="flex flex-1 items-center justify-center gap-6">
		<div class="timer">{formatTime(timeLeft)}</div>

		<button
			on:click={(e) => {
				e.preventDefault();
				increase();
			}}
			class="btn-text"
			aria-label="Aumenta"
			disabled={gameOver}
		>
			Di più
		</button>

		<div class="counter">{count}</div>
	</div>

	<button on:click={reset} class="btn-restart" aria-label="Restart">Restart</button>
</div>

<style>
	.btn-text {
		color: white;
		font-family: Helvetica, sans-serif;
		font-weight: bold;
		font-size: 24px;
		text-align: center;
		background-color: #f472b6;
		padding: 20px 40px;
		border-radius: 30px;
		cursor: pointer;
		text-shadow: 0px 1px 0px #000;
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

	.btn-text:disabled {
		background-color: #aaa;
		box-shadow: none;
		cursor: not-allowed;
	}

	.btn-restart {
		font-family: Helvetica, sans-serif;
		font-weight: bold;
		font-size: 16px;
		padding: 8px 16px;
		border-radius: 20px;
		background-color: #4caf50;
		color: white;
		border: none;
		cursor: pointer;
		user-select: none;
	}

	.btn-restart:hover {
		background-color: #45a049;
	}

	.counter {
		font-size: 24px;
		font-weight: bold;
		color: #333;
		min-width: 40px;
		text-align: center;
		user-select: none;
	}

	.timer {
		font-size: 24px;
		font-weight: bold;
		color: #333;
		min-width: 50px;
		text-align: center;
		user-select: none;
	}
</style>
