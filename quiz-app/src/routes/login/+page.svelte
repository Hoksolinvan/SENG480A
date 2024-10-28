<script>
	let Email = "";
	let Password = "";

	function handleSubmit() {
		Email = document.getElementById("email").value;
		Password= document.getElementById("password").value;

		// Form = [Email, Password];
		post_Login();

		if(localStorage.getItem("loginPassed")=="true"){
			// Enter code to load Profile page here
			// Testing code. Remove when actual functionality has been implemented
			document.getElementById("login-fail").textContent = "Log in successful. You will be redirected to your Profile page soon.";
			// End of testing code
			localStorage.removeItem("loginPassed");
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
			</div>

			<p id="login-fail">
			</p>

			<button type="submit">Log In</button>
		</form> 
	</div>
	<p style="font-size:1rem;">
		Doesn't have an account? 
		<a href="/signup" style="color: #007bff">Sign up here</a>
	</p>
</main>

<style>
	main {
		padding: 1rem;
		max-width: 600px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.5rem; /* Bigger h1 size */
		text-align: center;
		margin-bottom: 1rem;
		color: #007bff;
		font-family: 'Poppins', sans-serif;
	}

	p {
		text-align: center;
		font-size: 1.2rem;
		margin-bottom: 2rem; /* Add space after the paragraph */
		font-family: 'Roboto', sans-serif;
		color: #555;
	}

	.form-container {
		border: 2px solid #007bff;
		padding: 1.5rem;
		border-radius: 10px;
		background-color: #f9f9f9;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		margin-top: 3rem; /* Add space between p and form */
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
		color: #007bff;
		display: block;
	}

	input {
		padding: 0.75rem;
		font-size: 1rem;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid #007bff;
		border-radius: 5px;
	}

	input:focus {
		outline: none;
		border-color: #0056b3;
		box-shadow: 0 0 5px rgba(0, 91, 187, 0.3);
	}

	button {
		padding: 0.75rem;
		background-color: #007bff;
		color: white;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		border-radius: 5px;
	}

	button:hover {
		background-color: #0056b3;
		transform: translateY(-2px);
	}

	#login-fail {
		color: #721c24;   
		margin: 0;
		text-align: left;
		font-size: 0.75rem;
		margin-bottom: 0.5rem;
	}
</style>