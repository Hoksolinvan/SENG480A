<main>
	<h1>Welcome!</h1>
	<p>
		Create an account and let us help you with your journey to your dream universities! It only takes 1 minute, you will not regret it!
	</p>

	<div class="form-container">
		<form on:submit|preventDefault={handleSubmit} id="RegisterForm">
			<div>
				<label for="email">Email:</label>
				<input type="email" id="email" name="email" placeholder="Enter Email Address" />
			</div>

			<div>
				<label for="password">Password:</label>
				<input type="password" id="password" name="password" placeholder="Enter Password"  />
			</div>

			<div>
				<label for="confirm-pwd">Confirm Password:</label>
				<input type="password" id="confirm-pwd" name="confirm-pwd" placeholder="Confirm Password"  />
			</div>

			<div>
				<input type="checkbox" checked="checked" name="agree" id="agree" style="width: auto;"> 
				<label for="agree" style="font-weight: normal;">
					By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>
				</label>
			</div>

			<button type="submit">Create Account</button>
		</form>
	</div>
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
	}

	p {
		text-align: center;
		font-size: 1.2rem;
		margin-bottom: 2rem; /* Add space after the paragraph */
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

	/* #Thankyou_Message{
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

	.form-failed {
		background-color: #f8d7da;
		color: #721c24;            
		border: 2px solid #f5c6cb; 
	} */
</style>