<script>
	const now = new Date();
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	const currentDateTime = now.toLocaleString('en-CA', options);
</script>

<footer class="footer">
	<p><a href="/about">About Us</a> | <a href="/contact">Contact</a></p>

	<p>&copy; nurtuRe {currentDateTime}</p>
</footer>

<style>
	.footer {
		text-align: center;
		padding: 1rem;
		/* background-image: linear-gradient(to right, white, #f8f9fa, white); */
		/*  color: #8367c7;		a bit difficult to see this color, I made it a bit lighter */ 
		color: #c9c9c9;
	}
</style>
