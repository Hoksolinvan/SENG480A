<script>
	let questionIndex = 0;
	let answers = {};
	let quizComplete = false;
	let recommendation = '';

	const questions = [
		{
			question: 'Which major are you interested in?',
			options: ['Social Sciences', 'Engineering', 'Business', 'Arts']
		},
		{
			question: 'How important is academic ranking to you?',
			options: ['Very Important', 'Somewhat Important', 'Not Important']
		}
	];

	const universityRecommendations = {
		'Social Sciences': {
			'Very Important': 'University of British Columbia (UBC) - Psychology',
			'Somewhat Important': 'Simon Fraser University (SFU) - Sociology',
			'Not Important': 'University of the Fraser Valley (UFV) - Anthropology'
		},
		'Engineering': {
			'Very Important': 'University of British Columbia (UBC) - Electrical Engineering',
			'Somewhat Important': 'University of Victoria (UVic) - Mechanical Engineering',
			'Not Important': 'British Columbia Institute of Technology (BCIT) - Civil Engineering'
		},
		'Business': {
			'Very Important': 'University of British Columbia (UBC) - Sauder School of Business',
			'Somewhat Important': 'Simon Fraser University (SFU) - Beedie School of Business',
			'Not Important': 'Thompson Rivers University (TRU) - Bachelor of Business Administration'
		},
		'Arts': {
			'Very Important': 'Emily Carr University of Art + Design - Visual Arts',
			'Somewhat Important': 'University of Victoria (UVic) - Fine Arts',
			'Not Important': 'Capilano University - Bachelor of Design in Visual Communication'
		}
	};

	function selectAnswer(option) {
		if (questionIndex === 0) {
			answers.major = option;
		} else if (questionIndex === 1) {
			answers.ranking = option;
			recommendation = universityRecommendations[answers.major][answers.ranking];
		}

		if (questionIndex < questions.length - 1) {
			questionIndex++;
		} else {
			quizComplete = true;
		}
	}
</script>

<div class="quiz-wrapper">
	{#if !quizComplete}
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
		<div class="quiz-complete">
			<h2 class="recommendation-header">Recommendation Based on Your Answers</h2>
			<p class="recommendation">Based on your interest in <strong>{answers.major}</strong> 
			and your <strong>{answers.ranking.toLowerCase()}</strong> preference for academic ranking, 
			we recommend: <strong>{recommendation}</strong></p>
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
		padding: 20px;
	}
	.quiz-question h2 {
		font-size: 1.8rem;
		margin-bottom: 1rem;
		color: #333;
	}
	.quiz-question ul {
		list-style-type: none;
		padding: 0;
	}
	.quiz-question li {
		margin: 1rem 0;
	}
	.quiz-question button {
		padding: 0.7rem 1.5rem;
		font-size: 1.2rem;
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
		margin-top: 2rem;
	}
	.recommendation-header {
		font-size: 2.5rem;
		color: #007bff;
		text-align: center;
		margin-bottom: 2rem;
		animation: fadeInUp 1s ease-out;
	}
	.recommendation {
		font-size: 1.5rem;
		color: #333;
		background-color: #f8f9fa;
		border: 2px solid #007bff;
		padding: 1rem;
		border-radius: 10px;
		margin-top: 1.5rem;
		width: 80%;
		max-width: 500px;
	}
	strong {
		color: #007bff;
		font-size: 1.7rem;
	}
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>