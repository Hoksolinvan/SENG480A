<head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>

<header class="header">
	<div class="header-container">
		<img src="/logo.png" alt="logo" class="logo" />
		
		<nav class="nav">
		<ul>
			<li class = "button"><a href="/login">LOG IN</a></li>
			<li class = "button"><a href="/signup">SIGN UP</a></li>
			<li>
				<div class="dropdown"><i class="material-icons">list</i>
					<div class="dropdown-content">
						<a href="/">Home</a>
						<a href="/about">About</a>
						<a href="/contact">Contact</a>
				</div>
				</div> 
			</li>
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

	.material-icons {
		color: #007bff;
		font-size: 3rem;
		border: solid;
		border-color: #007bff;
		border-radius: 10px;
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
		max-width: 100px;
		border-radius: 10px;
	}

		/* The container <div> - needed to position the dropdown content */
	.dropdown {
		position: relative;
		display: inline-block;
	}

		/* Dropdown Content (Hidden by Default) */
	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f1f1f1;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
	}

	/* Links inside the dropdown */
	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	/* Change color of dropdown links on hover */
	.dropdown-content a:hover {background-color: #ddd;}

	/* Show the dropdown menu on hover */
	.dropdown:hover .dropdown-content {display: block;}

	@media (min-width: 768px) {
		.header-container {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>
