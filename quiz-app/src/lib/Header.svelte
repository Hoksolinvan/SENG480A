<head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>



<header class="header">
	<div class="header-container">
		<a href="/">
			<img src="/logo.png" alt="logo" class="logo" />
		</a>
		
		<!-- <nav class="nav">
		<ul>
			<li class = "default-button"><a href="/login">LOG IN</a></li>
			<li class = "default-button"><a href="/signup">SIGN UP</a></li>
		</ul>
		</nav>  -->
		<!-- <li class = "hidden-button"><a href="/">HOME</a></li>
			<li class = "hidden-button"><a href="/about">ABOUT US</a></li>
			<li class = "hidden-button"><a href="/contact">CONTACT</a></li>  -->
	</div>
</header>

<style>
	.header {
		width: 65%;
	}
	
	.default-button {
		padding: 1rem;
		background-color: #007bff;
		color: white;
		border-radius: 10px;
		cursor: pointer;
		font-weight: bold;
		border-style: none none solid none;
		border-width: 5px;
		border-color: #004a99;

	}

	.nav ul {
		display: flex;
		list-style-type: none;
		padding: 0;
	}

	.nav ul li {
		margin: 0 0.25rem;
		padding: auto;
	}

	.header-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.logo {
		max-width: 180px;
		border-radius: 10px;
	}
	
	@media (min-width: 768px) {
		.header-container {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>


