<script>
	let Name = '';
	let Email = '';
	let Message = '';
	let Form = [];
	
	function handleSubmit() {
		Name = document.getElementById("name").value;
		Email = document.getElementById("email").value;
		Message = document.getElementById("message").value;

		Form = [Name, Email, Message];

		//alert(`Thank you for your feedback, ${Name}!`); // Commented out the alert message

		post_Contact();

		if (localStorage.getItem("formSubmitted") == "true") {
			document.getElementById("Thankyou_Message").classList.remove("hidden");
			document.getElementById("Thankyou_Message").classList.add("show");
			localStorage.removeItem("formSubmitted");
		} else if (localStorage.getItem("formFailed") == "true") {
			document.getElementById("Thankyou_Message").textContent =
				"Form submission failed. Please try again.";
			document.getElementById("Thankyou_Message").classList.remove("hidden");
			document.getElementById("Thankyou_Message").classList.add("show", "form-failed");
			localStorage.removeItem("formFailed");
		}

		// Clear the form fields by resetting the bound variables
		Name = '';
		Email = '';
		Message = '';
	}

	async function post_Contact() {
		try {
			const request = await fetch('https://seng480a-production.up.railway.app/Forms', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					Forms: Form,
				}),
			});

			if (request.ok) {
				const result = await request.json();
				console.log('Form results were successfully posted: ', result);
				localStorage.setItem("formSubmitted", "true");
			} else {
				console.error('Error Submitting Form', request.statusText);
				localStorage.setItem("formFailed", "true");
			}
		} catch (error) {
			console.log("Failed to submit Form\n");
			localStorage.setItem("formFailed", "true");
		}
	}
</script>

<main>
	<h1>Help Us Improve Your Career Planning Experience</h1>
	<p>
		We're here to help you plan your academic future. We'd love to hear your feedback or suggestions to make it even better!
	</p>

	<div class="form-container">
		<form on:submit|preventDefault={handleSubmit} id="ContactForm">
			<div>
				<label for="name">Name:</label>
				<input type="text" id="name" bind:value={Name} required />
			</div>

			<div>
				<label for="email">Email:</label>
				<input type="email" id="email" bind:value={Email} required />
			</div>

			<div>
				<label for="message">Your Feedback:</label>
				<textarea id="message" bind:value={Message} required></textarea>
			</div>

			<button type="submit">Submit</button>
		</form>
	</div>

	<br>
	<div id="Thankyou_Message" class="hidden">Thank you for submitting the form! 🎉</div>
</main>

<style>
	main {
		padding: 1rem;
		max-width: 600px;
		margin: 0 auto;
		text-align: left; /* Changed to left-aligned */
	}

	h1 {
		font-size: 2.5rem;
		color: #5603ad; /* Updated h1 color */
		margin-bottom: 1rem;
		font-family: 'Poppins', sans-serif;
	}

	p {
		font-size: 1.2rem;
		color: #555;
		margin-top: 2rem;
		margin-bottom: 2rem;
		font-family: 'Roboto', sans-serif;
	}

	.form-container {
		border: 2px solid #8367c7; /* Updated border color */
		padding: 1.5rem;
		border-radius: 10px;
		background-color: #f9f9f9;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
		color: #8367c7; /* Updated label color */
		text-align: left; /* Left-align form labels */
		display: block; /* Ensures the label takes full width */
	}

	input,
	textarea {
		padding: 0.75rem;
		font-size: 1rem;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid #8367c7; /* Updated input border color */
		border-radius: 5px;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: #674ea7;
		box-shadow: 0 0 5px rgba(103, 78, 167, 0.3);
	}

	button {
		padding: 0.75rem;
		background-color: #5603ad; /* Updated button color */
		color: white;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		border-radius: 5px;
	}

	button:hover {
		background-color: #8367c7; /* Updated hover color */
		transform: translateY(-2px);
	}

	#Thankyou_Message {
		font-size: 1.3rem;
		font-family: 'Roboto', sans-serif;
		border: 2px solid #d4f4cc;
		border-radius: 25px;
		background-color: #d4f4cc;
		font-weight: bold;
		color: #2c543d;
		text-align: center;
	}

	.hidden {
		opacity: 0;
	}

	.show {
		opacity: 1;
	}

	.form-failed {
		background-color: #f8d7da;
		color: #721c24;
		border: 2px solid #f5c6cb;
	}
</style>
