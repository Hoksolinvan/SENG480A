<script>
	let name = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		alert(`Thank you for your feedback, ${name}!`);
	}
</script>

<main>
	<h1>Explore Your Future Career Paths with Our App</h1>
	<p>
		If you are a high school student interested in using our app to explore your career prospects,
		please provide us with feedback to help us improve!
	</p>

	<div class="form-container">
		<form on:submit|preventDefault={handleSubmit}>
			<div>
				<label for="name">Name:</label>
				<input type="text" id="name" bind:value={name} required />
			</div>

			<div>
				<label for="email">Email:</label>
				<input type="email" id="email" bind:value={email} required />
			</div>

			<div>
				<label for="message">Your Feedback:</label>
				<textarea id="message" bind:value={message} required></textarea>
			</div>

			<button type="submit">Submit</button>
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

	input,
	textarea {
		padding: 0.75rem;
		font-size: 1rem;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid #007bff;
		border-radius: 5px;
	}

	input:focus,
	textarea:focus {
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
	}
</style>
