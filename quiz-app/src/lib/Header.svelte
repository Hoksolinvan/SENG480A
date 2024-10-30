<head>
	<!-- For triple-bar menu icon -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<!-- For brand font -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap">
</head>

<header class="header">
	<div class="header-container">
		<a href="/" class="logo">EasyPath</a>
		
		<nav class="nav">
			<ul>
				<li><a href="/about" class="nav-link">ABOUT US</a></li>
				<li><a href="/contact" class="nav-link">CONTACT</a></li>
				<li><a href="/login" class="nav-button">LOG IN</a></li>
				<li><a href="/signup" class="nav-button signup">SIGN UP</a></li>
			</ul>
		</nav>  
	</div>
</header>

<style>
	/* Main Header Styling */
	.header {
		width: 100%;
		background: white;
		border-bottom: 1px solid #e0e0e0;
		padding: 1rem 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
	}

	/* Header Container Layout */
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		margin: auto;
	}

	/* Logo Styling */
	.logo {
		font-family: 'Poppins', sans-serif;
		font-size: 32px;
		font-weight: 600;
		color: #007bff; /* Soft blue color */
		/*text-decoration: none; */
		letter-spacing: 1px;
	}

	/* Navigation List Styling */
	.nav ul {
		display: flex;
		list-style-type: none;
		padding: 0;
		margin: 0;
		gap: 1.5rem;
	}

	/* General Navigation Link Styling */
	.nav-link {
		color: #4a4a4a; /* Softer gray color */
		text-decoration: none;
		font-weight: 500;
		font-size: .95rem;
		transition: color 0.3s ease;
		
	}

	.nav-link:hover {
		color: #007bff; /* Matches logo color on hover */
	}

	/* Log In and Sign Up Button Styling */
	.nav-button {
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-weight: 600;
		font-size: 0.95rem;
		color: #4a4a4a;
		background: none;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.nav-button:hover {
		color: #007bff; /* Matches logo color on hover */
	}

	/* Sign Up Button with Gradient */
	.signup {
		background: linear-gradient(45deg, #007bff, #00c6ff); /* Gradient */
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		transition: background 0.3s ease;
	}

	.signup:hover {
		background: linear-gradient(45deg, #0062cc, #0099cc); /* Darker gradient on hover */
		color: white; /* Ensure text stays visible */
	}

	/* Responsive Adjustments */
	@media (min-width: 768px) {
		.header-container {
			flex-direction: row;
		}
	}
</style>
