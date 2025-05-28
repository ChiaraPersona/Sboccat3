<script>
	import NavbarLink from './navbar-link.svelte';
</script>

<nav class="bg-sb-viola text-sb-bianco flex justify-between">
	<NavbarLink url="/" testo="Home" />
	<div class="flex gap-1">
		<NavbarLink url="/eventi" testo="Eventi" />
		<NavbarLink url="/chi-siamo" testo="Chi siamo" />
		<NavbarLink url="/donazioni" testo="Donazioni" />
		<NavbarLink url="/gioca" testo="Gioca con noi" />
	</div>
</nav>
