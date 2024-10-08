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
	<p>&copy; nurtuRe</p>

	<p>{currentDateTime}</p>
</footer>

<style>
	.footer {
		text-align: center;
		padding: 1rem;
		background-image: linear-gradient(to right, white, #f8f9fa, white);
		color: #333;
		/* margin-bottom: 2rem; */
		
	}
</style>
