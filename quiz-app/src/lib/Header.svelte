<header class="header">
	<div class="header-container">
		<img src="/logo.png" alt="logo" class="logo" />
		<nav class="nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	.header-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.logo {
		max-width: 100px;
	}

	.nav ul {
		display: flex;
		list-style-type: none;
		padding: 0;
	}

	.nav ul li {
		margin: 0 1rem;
	}

	@media (min-width: 768px) {
		.header-container {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>
