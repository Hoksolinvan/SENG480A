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


	body{
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
	}


	@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
