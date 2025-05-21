<script>
	import NavbarLink from './navbar-link.svelte';
</script>

<nav class="bg-sb-viola text-sb-bianco flex justify-between">
	<NavbarLink url="/" testo="Home" />
	<div>
		<NavbarLink url="/eventi" testo="Eventi" />
		<NavbarLink url="/chi-siamo" testo="Chi siamo" />
		<NavbarLink url="/donazioni" testo="Donazioni" />
	</div>
</nav>
