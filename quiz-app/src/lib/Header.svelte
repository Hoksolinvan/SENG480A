<head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>

<header class="header">
	<div class="header-container">
		<nav class="nav">
			<ul>
				<li><img src="/logo.png" alt="logo" class="logo" /></li>
				<li><a href="/login" class = "button">
					<i class="material-icons">list</i>
				</a></li>
			</ul>
			
		</nav>
		
		<!-- <nav class="nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav> -->
		<nav class="nav">
			<ul>
				<li><a href="/login" class = "button">LOG IN</a></li>
				<li><a href="/signup" class = "button">SIGN UP</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	.button {
		padding: 1rem;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		font-weight: bold;
	}

	.nav ul {
		display: flex;
		list-style-type: none;
		padding: 0;
	}

	.nav ul li {
		margin: 0 0.25rem;
	}

	.header-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.logo {
		max-width: 100px;
		border-radius: 10px;
	}

	/* .nav ul {
		display: flex;
		list-style-type: none;
		padding: 0;
	}

	.nav ul li {
		margin: 0 1rem;
	} */

	@media (min-width: 768px) {
		.header-container {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>
