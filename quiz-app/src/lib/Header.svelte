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
			<!-- <li class = "other-button"><a href="/about">ABOUT US</a></li>
			<li class = "other-button"><a href="/contact">CONTACT</a></li> -->
			<li class = "dropdown">
				<button><i class = "material-icons" id = "menu-button">menu</i></button>
				<div class="dropdown-content">
					<a href="/about" class = "other-button">ABOUT US</a>
					<a href="/contact" class = "other-button">CONTACT</a>
				</div>
			</li>
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
		display: block;
		padding: 1rem;
		background-color: #0ECF0E;
		color: white;
		border-radius: 10px;
		cursor: pointer;
		font-weight: bold;
		border-style: none none solid none;
		border-width: 5px;
		border-color: #19966E;
		text-align: center;
		margin: 0.25rem 0;
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

	#menu-button {
		padding: 1rem;
		border-color: #007bff;
		color: #007bff;
		border-radius: 10px;
		cursor: pointer;
		border-width: 3px;
		transition: 2s;
	}

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		z-index: 1;
	}

	.dropdown:hover .dropdown-content {
		display: block;
		width: 120px;
	}

	.dropdown:hover #menu-button {
		width: 120px;
		color: #0ECF0E;
		border-color: #0ECF0E;
	}

		
	@media (min-width: 768px) {
		.header-container {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>


