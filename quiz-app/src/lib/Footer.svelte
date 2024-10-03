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
	<p>&copy; EasyPath</p>

	<p>{currentDateTime}</p>
</footer>

<style>
	.footer {
		text-align: center;
		padding: 1rem;
		background-color: #f8f9fa;
		color: #333;
		margin-bottom: 2rem;
	}
</style>
