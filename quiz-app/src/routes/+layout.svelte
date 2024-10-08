<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="layout-wrapper">
	<!-- Header Component -->
	<!-- class header-styling is created only for styling convenience, might remove when I 
	know how to style an imported element -->
	<div id = "header-styling">
		<Header />
	</div>
	<script>
		let bar = document.getElementById("header-styling");
		window.onscroll = function() {scrollFunction()};
		function scrollFunction() {
			if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
				bar.style.borderColor = "#007bff";
			} else {
				bar.style.borderColor = "transparent";
			}
		}
	</script>
	
	<!-- Main Content Area -->
	<main class="main-content">
		<slot />
	</main>

	<!-- Footer Component -->
	<Footer />
</div>


<style>
	#header-styling {
		position: sticky;
		top: 0;
		background-color: white;
		padding: auto;
		padding: 0.5rem 0;
		transition: 0.5s;
		border-bottom: 2px solid #007bff;
	}

	.layout-wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		/* padding: 1rem; */
		max-width: 65%;
		margin: auto;
		margin-bottom: 0;	
	}

	.main-content {
		flex-grow: 1;
		padding: 2rem;
		margin: 2rem auto;
		max-width: 1200px;
		width: 100%;
		color: rgb(123, 123, 123);
	}

</style>

