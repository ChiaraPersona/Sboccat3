<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import SplitText from 'gsap/SplitText';
	import LocomotiveScroll from 'locomotive-scroll';
	import 'locomotive-scroll/dist/locomotive-scroll.css';

	// import dinamico per Desiderandae
	import { evento as desiderandaeEvento } from './desiderandae/+page.svelte';

	onMount(() => {
		gsap.registerPlugin(SplitText);
		const body = document.body;
		gsap.set(body, { autoAlpha: 0 });

		const tl = gsap.timeline();
		gsap.set(body, { autoAlpha: 1 });

		const pageHeading = document.querySelector('.header h1');
		const pageBody = document.querySelector('.header p');
		const seperator = document.querySelector('.header hr');
		const imageCards = gsap.utils.toArray('.image-card');

		gsap.set(imageCards, { autoAlpha: 0 });

		const childLines = new SplitText(pageHeading, {
			type: 'lines',
			linesClass: 'heading-line'
		});

		new SplitText(pageHeading, {
			type: 'lines',
			linesClass: 'heading-line-wrapper'
		});

		tl.from(childLines.lines, {
			duration: 1,
			y: 200,
			stagger: 0.25,
			delay: 1,
			ease: 'power4.out'
		})
			.from(
				pageBody,
				{
					duration: 0.5,
					opacity: 0,
					x: -20
				},
				'-=0.5'
			)
			.from(
				seperator,
				{
					duration: 2,
					scale: 0,
					ease: 'expo.inOut'
				},
				'-=1.1'
			)
			.to(
				imageCards,
				{
					duration: 0.75,
					autoAlpha: 1,
					y: -50,
					stagger: 0.5,
					ease: 'power4.out'
				},
				'-=0.75'
			);

		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]')!,
			smooth: true
		});

		setTimeout(() => scroll.update(), 1000);
	});
</script>

<div data-scroll-container>
	<div class="header" data-scroll-section>
		<h1>Sboccat3 <br /> offre eventi <br /> ed esperienze indimenticabili.</h1>
		<p>I nostri eventi e progetti.</p>
		<hr />
	</div>

	<div class="image-grid" data-scroll-section>
		<div class="image-card image-portrait">
			<h2 class="image-header">Drag Queen</h2>
			<img
				src="https://images.unsplash.com/photo-1686148016905-b08dafa868af?..."
				data-scroll
				data-scroll-speed="-3"
			/>
		</div>

		<div class="image-card image-landscape">
			<h2 class="image-header">Quest3 sono io</h2>
			<img
				src="https://images.unsplash.com/photo-1684443726764-6a236cb33ccb?..."
				data-scroll
				data-scroll-speed="-3"
			/>
		</div>

		<div class="image-card image-landscape">
			<h2 class="image-header">Karaoqueer</h2>
			<img
				src="https://images.unsplash.com/photo-1683784445501-a0732d1c6159?..."
				data-scroll
				data-scroll-speed="-3"
			/>
		</div>

		<a class="image-card image-portrait" href="/eventi/desiderandae">
			<h2 class="image-header">{desiderandaeEvento.titolo}</h2>
			<img
				src={desiderandaeEvento.immagine}
				alt={desiderandaeEvento.titolo}
				data-scroll
				data-scroll-speed="-3"
			/>
		</a>
	</div>
</div>

<style>
	@import '$lib/components/stile.css';
</style>
