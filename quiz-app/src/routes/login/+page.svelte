<main>
	<h1>Welcome Back!</h1>
	<p>
		We have been waiting for you. Log right in and get back to where you left.
	</p>

	<div class="form-container">
		<form on:submit|preventDefault={handleSubmit} id="LogInForm">
			<div>
				<label for="email">Email:</label>
				<input type="email" id="email" name="email" placeholder="Enter Email Address" />
				<!-- <input type="text" id="name" bind:value={Name} required /> -->
			</div>

			<div>
				<label for="password">Password:</label>
				<input type="password" id="password" name="password" placeholder="Enter Password"  />
			</div>

			<button type="submit">Log In</button>
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

	.form-failed {
		background-color: #f8d7da;
		color: #721c24;            
		border: 2px solid #f5c6cb; 
	}
</style>