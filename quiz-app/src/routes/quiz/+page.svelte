<script>
	let questionIndex = 0; // Index for the current question
	let answers = []; // Array to store user's answers
	let quizComplete = false;

	// Sample questions -- lets change these later on !
	const questions = [
		{
			question: 'What is your favorite subject?',
			options: ['Math', 'Science', 'History', 'Art']
		},
		{
			question: 'Which career excites you the most?',
			options: ['Engineer', 'Doctor', 'Artist', 'Entrepreneur']
		}
	];

	// Function to handle the answer selection
	// Van --> you may want to store the answers in the database!

	function selectAnswer(option) {
		answers[questionIndex] = option;
		if (questionIndex < questions.length - 1) {
			questionIndex++;
		} else {
			quizComplete = true;
			console.log('Quiz completed:', answers);
		}
	}
</script>

<div class="quiz-wrapper">
	{#if !quizComplete}
		<!-- Quiz in Progress -->
		<div class="quiz-question">
			<h2>{questions[questionIndex].question}</h2>
			<ul>
				{#each questions[questionIndex].options as option}
					<li>
						<button on:click={() => selectAnswer(option)}>{option}</button>
					</li>
				{/each}
			</ul>
		</div>
	{:else}
		<!-- Quiz Complete -->
		<div class="quiz-complete">
			<h2>Thank you for completing the quiz!</h2>
			<p>Your answers: {answers.join(', ')}</p>
			<!-- We can add more UI here if needed or a different way to present quiz results !-->
		</div>
	{/if}
</div>

<style>
	.quiz-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 80vh;
	}

	.quiz-question ul {
		list-style-type: none;
		padding: 0;
	}

	.quiz-question li {
		margin: 1rem 0;
	}

	.quiz-question button {
		padding: 0.5rem 1rem;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	.quiz-question button:hover {
		background-color: #0056b3;
	}

	.quiz-complete {
		text-align: center;
	}
</style>
