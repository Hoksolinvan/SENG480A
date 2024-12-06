<script>
	import { onMount } from 'svelte';
	// let Email = "";
	// let Password = "";

	// default pre-filled values for dummy account log-in
	// to be deleted in product soft-release
	let Email = "demo@easypath.ca";
	let Password = "password";

	onMount(() => {
                // Temporary measure for demo:
		// check if localstorage has expathUsername
		// as the item only exists when a user is logged in
		// if yes then redirect to profile page
		if (localStorage.getItem('ezpathUsername')){
			window.location.href = "./profile";
		}
        });

	function handleSubmit() {
		Email = document.getElementById("email").value;
		Password= document.getElementById("password").value;

		// Form = [Email, Password];
		post_Login();

		if(localStorage.getItem("loginPassed")=="true"){
			// Enter code to load Profile page here
			// Testing code. Remove when actual functionality has been implemented
			document.getElementById("login-fail").textContent = "Log in successful. You will be redirected to your Profile page soon.";
			document.getElementById("login-fail").style.color = "green";
			window.location.href = "./profile";
			// End of testing code
			localStorage.removeItem("loginPassed");

			// simple, hard-coded user log-in validation and set up 
			localStorage.setItem("ezpathUsername", JSON.stringify(Email));
		}
		else if(localStorage.getItem("loginFailed")=="true"){
			document.getElementById("login-fail").textContent = "Incorrect email address or password. Please check and try again.";
			document.getElementById("email").style.borderColor = "red";
			document.getElementById("password").style.borderColor = "red";
			document.getElementById("email").style.borderWidth = "2px";
			document.getElementById("password").style.borderWidth = "2px";
			document.getElementById("email").style.backgroundColor = "#e6e6e6";
			document.getElementById("password").style.backgroundColor = "#e6e6e6";
			Email = "";
			Password = "";
			localStorage.removeItem("loginFailed");
		}
	}

	async function post_Login() {
		// dummy account
		if (Email == "demo@easypath.ca" & Password == "password") {
		 	localStorage.setItem("loginPassed", "true");
		}
		else{
			localStorage.setItem("loginFailed", "true");
		}
	}

	
</script>

<main>
	<h1>Welcome Back!</h1>
	<p>
		We have been waiting for you. Log right in and get back to where you left.
	</p>

	<div class="form-container">
		<form on:submit|preventDefault={handleSubmit} id="LogInForm">
			<div>
				<label for="email">Email:</label>
				<input type="email" id="email" name="email" placeholder="Enter Email Address" bind:value={Email} required />
			</div>

			<div>
				<label for="password">Password:</label>
				<input type="password" id="password" name="password" placeholder="Enter Password"  bind:value={Password} required />
				<input type="checkbox" id="show" style="width: auto;" onclick="showPassword()"> 
				<label for="show" style="font-weight: normal; color: #555; display: inline">
					Show password
				</label>

				<script>
					function showPassword() {
						var passw = document.getElementById("password");
						if (passw.type === "password") {
							passw.type = "text";
						} else {
							passw.type = "password";
						}
					} 
				</script>
			</div>

			<p id="login-fail">
			</p>

			<button type="submit">Log In</button>
		</form> 
	</div>
	<p style="font-size:1rem;">
		Don't have an account? 
		<a href="/signup" style="color: #007bff">Sign up here</a>
	</p>
	<button type="button" class="login-with-google-btn" >
		Sign in with Google
	</button>
	  
</main>

<style>
	main {
		padding: 1rem;
		max-width: 600px;
		margin: 0 auto;
		justify-content: center; /* Center horizontally */
        	align-items: center; 
		align-content: center;
		display: flex;
		flex-direction: column;

	}

	h1 {
		font-size: 2.5rem; /* Bigger h1 size */
		text-align: center;
		margin-bottom: 1rem;
		/* color: #007bff; 
		color: rgb(30 58 138);*/
		color: #194C13;
		font-family: 'Poppins', sans-serif;
	}

	p {
		text-align: center;
		font-size: 1.2rem;
		margin-bottom: 2rem; /* Add space after the paragraph */
		font-family: 'Roboto', sans-serif;
		color: #555;
	}
	.login-with-google-btn:hover {box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);}

	.form-container {
		width: 600px;
		/* border: 2px solid #007bff; */
		padding: 1.5rem;
		border-radius: 10px;
		/* background-color: #f9f9f9; */
		margin-top: 2rem; /* Add space between p and form */
		border: 1px solid rgb(243 244 246);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	form {
		display: flex;
		flex-direction: column;
	}

	div {
		margin-bottom: 1.5rem;
	}

	label {
		margin-bottom: 0.5rem;
		font-weight: bold;
		/* color: rgb(30 58 138);
		color: #007bff; */
		color: #194C13;
		display: block;
	}

	input {
		padding: 0.75rem;
		font-size: 1rem;
		width: 100%;
		box-sizing: border-box;
		/* border: 1px solid #007bff; */
		border-radius: 5px;
		border: 1px solid rgb(243 244 246);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	input:focus {
		outline: none;
		border-color: #0056b3;
		box-shadow: 0 0 5px rgba(0, 91, 187, 0.3);
	}

	button {
		padding: 0.75rem;
		/* background-color: rgb(30 58 138); */
		background-color: #194C13;
		color: white;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		border-radius: 5px;
	}

	/* button:hover {
		background-color: #0056b3;
		transform: translateY(-2px);
	} */

	#login-fail {
		color: #721c24;   
		margin: 0;
		text-align: left;
		font-size: 0.75rem;
		margin-bottom: 0.5rem;
	}


	.login-with-google-btn {
		
  transition: background-color .3s, box-shadow .3s;
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  text-align: center;
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;


}
</style>
