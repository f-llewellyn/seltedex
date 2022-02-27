<script>
	import Nav from "../components/Nav.svelte";
	import "../global.css";
</script>

<svelte:head />

<div class="p-8 max-w-6xl mx-auto">
	<Nav />
	<slot />
</div>

<style>
	/* @tailwind base;
	@tailwind components;
	@tailwind utilities; */
</style>
