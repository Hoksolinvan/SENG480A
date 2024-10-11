<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Poppins:wght@400;700&family=Roboto:wght@400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

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
			if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
				bar.style.borderColor = "#8367c7";
				//bar.style.borderColor = "#007bff";
				// bar.style.borderColor = "#009900";
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
	<div id="footer-styling">
		<Footer />
	</div>
</div>


<style>
	#header-styling {

		/* Center align the child element, that is the Header */
		display: flex;
		flex-direction: column;
		align-items: center;

		/* Stick the header to top of the page */
		position: sticky;
		top: 0;

		background-color: rgb(255, 255, 255);
		padding: 0.5rem 0;
		transition: 0.5s;
		border-bottom: 2px solid transparent;
		z-index: 1;
		width: 100%;
	}

	#footer-styling {
		/* Center align the child element, that is the Footer */
		display: flex;
		flex-direction: column;
		align-items: center;

		background-color: #5603ad;
		width: 100%;
	}

	.layout-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		/* padding: 1rem 0; */
		/* max-width: 65%; */
		margin: auto;
		margin-bottom: 0;	
	}

	.main-content {
		flex-grow: 1;
		padding: 2rem 0;
		margin: 2rem auto;
		/* max-width: 65%; */
		max-width: 1000px;
		width: 100%
	}

</style>

