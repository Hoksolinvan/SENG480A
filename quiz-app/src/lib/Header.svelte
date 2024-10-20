<head>
	<!-- For triple-bar menu icon -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<!-- For brand font -->
	<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Comfortaa'>
</head>

<header class="header">
	<div class="header-container">
		<a href="/" class="logo">
			EasyPath
			<!-- <img src="/logo.png" alt="logo" class="logo" /> -->
		</a>
		
		<nav class="nav">
		<ul>
			<li class = "account-button"><a href="/login">LOG IN</a></li>
			<li class = "account-button"><a href="/signup">SIGN UP</a></li>
			<li class = "other-button"><a href="/about">ABOUT US</a></li>
			<li class = "other-button"><a href="/contact">CONTACT</a></li>
		</ul>
		</nav>  
	</div>
</header>

<style>
	.header {
		width: 80%;
	}
	
	.account-button {
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

	.other-button {
		padding: 1rem;
		background-color: #0ECF0E;
		color: white;
		border-radius: 10px;
		cursor: pointer;
		font-weight: bold;
		border-style: none none solid none;
		border-width: 5px;
		border-color: #19966E;

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
		/* max-width: 180px;
		border-radius: 10px; */
		font-family: Comfortaa;
		font-size: 40px;
		color: #007bff;
	}

		
	@media (min-width: 768px) {
		.header-container {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>


