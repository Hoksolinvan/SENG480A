<script>
	let Name = '';
	let Email = '';
	let Message = '';
	let Form=[];
	

	function handleSubmit() {
		

		Name = document.getElementById("name").value;
    	Email = document.getElementById("email").value;
    	Message = document.getElementById("message").value;

		Form=[Name,Email,Message];
		
		alert(`Thank you for your feedback, ${Name}!`);

		

		
		

		post_Contact();


		if(localStorage.getItem("formSubmitted")=="true"){

document.getElementById("Thankyou_Message").classList.remove("hidden");
document.getElementById("Thankyou_Message").classList.add("show");
localStorage.removeItem("formSubmitted");
}
else if(localStorage.getItem("formFailed")=="true"){
document.getElementById("Thankyou_Message").textContent = "Form submission failed. Please try again.";
document.getElementById("Thankyou_Message").classList.remove("hidden");
document.getElementById("Thankyou_Message").classList.add("show","form-failed");
localStorage.removeItem("formFailed");
}
	
	}


	// if(localStorage.getItem("formSubmitted")=="true"){

	// 	document.getElementById("Thankyou_Message").classList.remove("hidden");
	// 	document.getElementById("Thankyou_Message").classList.add("show");
	// 	localStorage.removeItem("formSubmitted");
	// }
	// else if(localStorage.getItem("formFailed")=="true"){
	// 	document.getElementById("Thankyou_Message").textContent = "Form submission failed. Please try again.";
	// 	document.getElementById("Thankyou_Message").classList.remove("hidden");
	// 	document.getElementById("Thankyou_Message").classList.add("show","form-failed");
	// 	localStorage.removeItem("formFailed");
	// }




	async function post_Contact(){
		try{
			const request = await fetch('https://seng480a-production.up.railway.app/Forms',
			{
				method: 'POST',
				headers: {

					'Content-Type':'application/json'
				},
				body: JSON.stringify({

					Forms: Form
				})

			});

			if (request.ok){
				const result = await request.json();
				console.log('Form results was successfully posted: ',result);

				localStorage.setItem("formSubmitted","true");

				location.reload();
			}
			else{
				console.error('Error Submitting Form', response.statusText);
				localStorage.setItem("formFailed", "true");
				location.reload();
			}

		}
		catch(error) {
			console.log("Failed to submit Form\n");
			localStorage.setItem("formFailed", "true");
			location.reload();
		}
	};



</script>

<main>
	<h1>Explore Your Future Career Paths with Our App</h1>
	<p>
		If you are a high school student interested in using our app to explore your career prospects,
		please provide us with feedback to help us improve!
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
	<div id="Thankyou_Message" class="hidden"> Thank you for submitting the Form! 🎉</div>

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

	.form-failed {
    background-color: #f8d7da;
    color: #721c24;            
    border: 2px solid #f5c6cb; 
}


</style>
