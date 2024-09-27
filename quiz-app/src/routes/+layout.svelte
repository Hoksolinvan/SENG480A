<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="layout-wrapper">
	<!-- Header Component -->
	<Header />

	<!-- Main Content Area -->
	<main class="main-content">
		<slot />
	</main>

	<!-- Footer Component -->
	<Footer />
</div>

<style>
	.layout-wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding: 1rem;
		max-width: 1000px;
		margin: 2rem auto;
		width: 100%;
	}

	.main-content {
		flex-grow: 1;
		padding: 2rem;
		margin: 2rem auto;
		max-width: 1200px;
		width: 100%;
	}
</style>
