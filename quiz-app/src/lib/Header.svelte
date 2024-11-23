<script>
	import { onMount } from 'svelte';
	let pf = "";
	let current_toggle = false;

	onMount(() => {
                // Temporary measure for demo:
		// check if localstorage has expathUsername
		// as the item only exists when a user is logged in
		// if yes then redirect to profile page
		pf = JSON.parse(localStorage.getItem('ezpathUsername'));
        });

		function toggleDisplay(){
		current_toggle=!current_toggle;

	};

</script>

<head>
	<!-- For triple-bar menu icon -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<!-- For brand font -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap">
</head>

<header class="header">
	<div class="header-container">
		
		<a href="/" class="logo"> <span style="display:flex; flex-direction:row;"><img src="/Updated_Logo.png" style="width:50px; height:50px; left:50px;">&nbsp;EasyPath</span></a>
		
		<nav class="nav">
			<ul>

				<!-- commented out for minimalistic view
				<li><a href="/about" class="nav-link">ABOUT US</a></li>
				<li><a href="/contact" class="nav-link">CONTACT</a></li> -->
				<li><a href="/search" class="nav-link"><b>SEARCH</b></a></li>

				<!-- commented out as the login is not functional 
				{#if pf === null}
				<li><a href="/login" class="nav-button">LOG IN</a></li>
				{:else} -->
				<!-- On click, ezpathUsername item will be removed from localStorage, meaning the user is no longer
				considered logged in 
				the user is redirected to main page -->
				<!-- not fully functional 
				<li><a href="#" class="nav-link" onclick="localStorage.removeItem('ezpathUsername'); window.location.href = '.';">LOG OUT</a></li>-->
				<!-- {/if} -->

				<!--<li><a href="/saved" class="nav-button my-programs">MY PROGRAMS</a></li> -->
<!-- this is not fully functional 
				{#if pf === null}
				<li><a href="/signup" class="nav-button signup">SIGN UP</a></li>
				{/if} -->
				<!-- This does not look like it is fully working -- need to be fixed-->
				<li><a href="/scholarships" class="nav-link"><b>SCHOLARSHIPS</b></a></li> 
				<li><a href="/about" class="nav-link"><b>ABOUT US</b></a></li>

				{#if pf != null}
				<li><a href="/dashboard" class="nav-button my-programs">MY PROGRAMS</a></li>
				{/if}
				<!-- commented out as it is not fully functional
				<li><a href="/login" class="nav-button">LOG IN</a></li> -->

				<!-- commented out to focus core functionality
				<li><a href="/saved" class="nav-button my-programs">MY PROGRAMS</a></li> -->

				<!-- can be commented out as it is not fully functional -->
				<!-- <li><a href="/signup" class="nav-button signup">SIGN UP</a></li>  -->


				<li>
					<img src="/FontAwesome-User-icon.png" class="profile {current_toggle ? "active":" "}" style="width:30px; height:30px" on:click={toggleDisplay}>
				  
					<!-- Dropdown menu box -->
					{#if current_toggle}
					  <div class="dropdown-menu">
						{#if pf === null}
						  <div><a href="/login"><b>Log In</b></a></div>
						  <div><a href="/signup"><b>Sign Up</b></a></div>
						{:else}
						  
							<!-- Profile and Settings links -->
							<div><a href="/dashboard"><b>My Dashboard</b></a></div>
							<div><a href="/saved"><b>My Programs</b></a></div>
							<div><a href="/settings"><b>Settings</b></a></div>
				  
							<!-- Log out link -->
							<div>
							  <a href="#" on:click={() => { 
								localStorage.removeItem('ezpathUsername'); 
								window.location.href = '.'; 
							  }}>
								<b>Log Out</b>
							  </a>
							</div>
						  
						{/if}
					  </div>
					{/if}
				  </li>
				  

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
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
		color: #007bff;
		letter-spacing: 1px;
	}

	.logo:hover{
		cursor: pointer;
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
		color: #4a4a4a;
		text-decoration: none;
		font-weight: 500;
		font-size: .95rem;
		transition: color 0.3s ease;
	}

	.nav-link:hover {
		color: #007bff;
	}

	/* Log In and other Button Styling */
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
		color: #007bff;
	}

	/* My Programs Button Styling */
	.my-programs {
		background: linear-gradient(45deg, #218838, #6ddb87); /* Green gradient */
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		transition: background 0.3s ease;
	}

	.my-programs:hover {
		background: linear-gradient(45deg, #218838, #268d3e); /* Darker green on hover */
		color: white;
	}

	/* Sign Up Button with Gradient */
	.signup {
		background: linear-gradient(45deg, #007bff, #00c6ff);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		transition: background 0.3s ease;
	}

	.signup:hover {
		background: linear-gradient(45deg, #0062cc, #0099cc);
		color: white;
	}

	/* Responsive Adjustments */
	@media (min-width: 768px) {
		.header-container {
			flex-direction: row;
		}
	}



	/* Image hover Style to turn to blue*/
	
	
	.profile:hover{
		filter: invert(30%) sepia(100%) saturate(1000%) hue-rotate(200deg);
		cursor: pointer;
		transition: filter 0.2s ease;
	}

	.profile.active{
		filter: invert(30%) sepia(100%) saturate(1000%) hue-rotate(200deg);
	}


	/* Dropdown menu */



.dropdown-menu{
	position:absolute;
	display: flex;
	flex-direction: column;
	top:70px;
	right:70px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    list-style: none;
    margin: 0;
    
    z-index: 1000;
    min-width: 150px;
}

.dropdown-menu div{

	padding: 20px;
	
}



.dropdown-menu a {
    text-decoration: none;
    color: #333;
    display: block;
    
    border-radius: 3px;
  }

  .dropdown-menu div:hover {
    background-color: #f0f0f0;
  }



</style>
