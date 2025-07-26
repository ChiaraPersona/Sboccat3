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

	$: isActive = $page.url.pathname === href;

	function onMouseMove(event: MouseEvent) {
		if (!linkEl) return;

		const rect = linkEl.getBoundingClientRect();
		const x = event.clientX - rect.left - rect.width / 2;
		const y = event.clientY - rect.top - rect.height / 2;

		gsap.to(linkEl, {
			duration: 0.4,
			x: x * 0.2,
			y: y * 0.3,
			ease: 'power3.out'
		});
	}

	function onMouseLeave() {
		if (!linkEl) return;

		gsap.to(linkEl, {
			duration: 0.5,
			x: 0,
			y: 0,
			ease: 'elastic.out(1, 0.5)'
		});

		if (!underlineEl || !textEl) return;

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
</script>

<a
	bind:this={linkEl}
	{href}
	class={[
		'relative inline-block cursor-pointer px-2 py-1 select-none',
		'transition-colors duration-300 will-change-transform',
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
