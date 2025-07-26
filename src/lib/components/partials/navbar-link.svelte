<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import gsap from 'gsap';

	type Attributi = {
		url: string;
		testo: string;
	};

	export let a: Attributi;
	const href = base + a.url;

	let linkEl: HTMLElement;
	let textEl: HTMLElement;
	let underlineEl: HTMLElement;

	// Reactive: aggiorna isActive quando cambia $page
	$: isActive = $page.url.pathname === href;

	function onMouseMove(event: MouseEvent) {
		if (!underlineEl || !textEl || !linkEl) return;

		const textRect = textEl.getBoundingClientRect();
		const linkRect = linkEl.getBoundingClientRect();

		let x = event.clientX - textRect.left;

		x = Math.max(0, Math.min(x, textRect.width));

		const offsetX = textRect.left - linkRect.left;

		gsap.to(underlineEl, {
			duration: 0.3,
			x: offsetX + x - underlineEl.offsetWidth / 2,
			ease: 'power3.out'
		});
	}

	function onMouseEnter() {
		if (!underlineEl || !textEl || !linkEl) return;

		const textRect = textEl.getBoundingClientRect();
		const linkRect = linkEl.getBoundingClientRect();
		const offsetX = textRect.left - linkRect.left;

		gsap.to(underlineEl, {
			duration: 0.3,
			width: textEl.offsetWidth,
			x: offsetX,
			ease: 'power3.out'
		});
	}

	function onMouseLeave() {
		if (!underlineEl || !textEl || !linkEl) return;

		const textRect = textEl.getBoundingClientRect();
		const linkRect = linkEl.getBoundingClientRect();
		const offsetX = textRect.left - linkRect.left;

		gsap.to(underlineEl, {
			duration: 0.3,
			width: 0,
			x: offsetX + textEl.offsetWidth / 2,
			ease: 'power3.out'
		});
	}
</script>

<a
	bind:this={linkEl}
	{href}
	class={[
		'relative inline-block cursor-pointer px-2 py-1 select-none',
		'transition-colors duration-300',
		isActive ? 'text-sb-rosa' : 'hover:text-sb-rosa text-black'
	]}
	on:mousemove={onMouseMove}
	on:mouseenter={onMouseEnter}
	on:mouseleave={onMouseLeave}
>
	<span bind:this={textEl}>
		{a.testo}
	</span>
	<span
		bind:this={underlineEl}
		class="bg-sb-rosa pointer-events-none absolute bottom-0 left-0 h-[2px]"
		style="width: 0; transform: translateX(0);"
	></span>
</a>
