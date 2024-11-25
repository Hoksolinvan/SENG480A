<script>
	import profileDetailList from "../profile/profileList";
	import { onMount } from 'svelte';

	let Email = "";
	let Password = "";
	let Confirm_pwd = "";
	// let Agree = false;
	let Form = [];

	onMount(() => {
                // Temporary measure for demo:
		// check if localstorage has expathUsername
		// as the item only exists when a user is logged in
		// if yes then redirect to profile page
		if (localStorage.getItem('ezpathUsername')){
			window.location.href = "./profile";
		}
        });

	// Van's test code
	// function handleSubmit(){
	// 	console.log("hello");
	// }

	/*async function registration(Form){

		try {
			const request = await fetch('https://seng480a-production.up.railway.app/registration', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					Forms: Form
				}),
			});

			if (request.ok) {
				const result = await request.json();
				console.log('Form results were successfully posted: ', result);
			} else {
				console.error('Error Submitting Form', request.statusText);
        console.error(error);
			}
		} catch (error) {
			console.log("Failed to submit Form\n");
			console.log(error);
      
		}
	}*/


	function handleSubmit() {
		Email = document.getElementById("email").value;
		Password = document.getElementById("password").value;
		Confirm_pwd = document.getElementById("confirm-pwd").value;
		// Agree = document.getElementById("agree").value;

		if (Password != Confirm_pwd) {
			// Notify the user that password and the confirming password are not the same
			document.getElementById("regis-fail").textContent = "Passwords do not match. Please check again.";
			regisFailToggle();
			document.getElementById("confirm-pwd").style.borderColor = "red";
			document.getElementById("password").style.borderColor = "red";
			document.getElementById("confirm-pwd").style.borderWidth = "2px";
			document.getElementById("password").style.borderWidth = "2px";
			document.getElementById("confirm-pwd").style.backgroundColor = "#e6e6e6";
			document.getElementById("password").style.backgroundColor = "#e6e6e6";
			Confirm_pwd = "";

		} else {

			Form = [Email, Password, Confirm_pwd];

			
			post_Regis();

			if(localStorage.getItem("regisPassed")=="true"){
				// document.getElementById("Thankyou_Message").classList.remove("hidden");
				// document.getElementById("Thankyou_Message").classList.add("show");
				localStorage.removeItem("regisPassed");
				window.location.href = "./profile";
			}
			else if(localStorage.getItem("regisFailed")=="true"){
				regisFailToggle();
				document.getElementById("regis-fail").textContent = "Something went wrong and/or this email is already registered. Please try again.";
				localStorage.removeItem("regisFailed");
			}

			registration(Form);
		}
	}

	function regisFailToggle() {
		document.getElementById("regis-fail").classList.remove("hidden");
		document.getElementById("regis-fail").classList.add("show");
	}

	async function post_Regis() {
		if (profileDetailList.filter(pf => pf.email.includes(Email))){
			localStorage.setItem("regisFailed", "true");
		}
		else{
			localStorage.setItem("regisPassed", "true");
		}
	}
</script>

<main>
	<h1>Welcome!</h1>
	<p>
		Create an account and let us help you with your journey to your dream universities! It only takes 1 minute, you will not regret it!
	</p>

	<div class="form-container">
		<form on:submit|preventDefault={handleSubmit} id="RegisterForm">
			<div>
				<label for="email">Email:</label>
				<input type="email" id="email" name="email" placeholder="Enter Email Address" bind:value={Email} required/>
			</div>

			<div>
				<label for="password">Password:</label>
				<input type="password" id="password" name="password" placeholder="Enter Password" minlength="8" bind:value={Password} required />
			</div>

			<div>
				<label for="confirm-pwd">Confirm Password:</label>
				<input type="password" id="confirm-pwd" name="confirm-pwd" placeholder="Confirm Password" minlength="8" bind:value={Confirm_pwd} required  />
			</div>

			<div>
				<input type="checkbox" onClick="disableCheckbox()" name="agree" id="agree" style="width: auto;"> 
				<label for="agree" style="font-weight: normal; color: #555; display: inline">
					By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>
				</label>
			</div>

			<p id="regis-fail" class="hidden">
				Congratulations! Your account has been created!
			</p>

			<button type="submit" id="submit-button" disabled>Create Account</button>

			<!-- Only allows button to submit when Terms and Conditions checkbox is checked -->
			<script>
				function disableCheckbox() {
					document.getElementById("submit-button").disabled = !document.getElementById("agree").checked;
				}
			</script>
		</form>
	</div>

	<p style="font-size:1rem;">
		Already have an account? 
		<a href="/login" style="color: #007bff">Log in here</a>
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
		/* color: #007bff; */
		color: rgb(30 58 138);
		font-family: 'Poppins', sans-serif;
	}

	p {
		text-align: center;
		font-size: 1.2rem;
		margin-bottom: 2rem; /* Add space after the paragraph */
		font-family: 'Roboto', sans-serif;
		color: #555;
	}

	/* .form-container {
		padding: 1.5rem;
		border-radius: 10px;
		background-color: rgb(239 246 255);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		margin-top: 3rem; /* Add space between p and form 
	} */

	/* bg-white rounded-2xl shadow-sm border border-gray-100 */
	.form-container {
		border: 1px solid rgb(243 244 246);
		padding: 1.5rem;
		border-radius: 10px;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		/* Add space between p and form */
		margin-top: 3rem; 
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
		/* color: #007bff; */
		color: rgb(30 58 138);
		display: block;
	}

	input {
		padding: 0.75rem;
		font-size: 1rem;
		width: 100%;
		box-sizing: border-box;
		/* border: 1px solid #007bff; */
		border: 1px solid rgb(243 244 246);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		border-radius: 5px;
	}

	input:focus {
		outline: none;
		border-color: #0056b3;
		box-shadow: 0 0 5px rgba(0, 91, 187, 0.3);
	}

	button {
		padding: 0.75rem;
		background-color: rgb(30 58 138);
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

	button:disabled {
		background-color: #7a7a7a;
		transform: translateY(0px);
		cursor: auto;
	}

	#Thankyou_Message{
		font-size: 2rem;
		border: 2px bold #D4F4CC;
    		border-radius: 25px;
		background-color: #D4F4CC;
		font-weight: bold;
		color: #2C543D;
    		text-align: center;
	}

	.hidden{
		opacity: 0;
	}

	.show {
		opacity: 1;
	}

	/* .form-failed {
		background-color: #f8d7da;
		color: #721c24;            
		border: 2px solid #f5c6cb; 
	} */

	#regis-fail {
		color: #721c24;   
		margin: 0;
		text-align: left;
		font-size: 0.75rem;
		margin-bottom: 0.5rem;
	}
</style>