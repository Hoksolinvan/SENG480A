<div class="hero">
	<div class="hero-content">
		<!-- Left Column (Text) -->
		<div class="hero-text">
			<h1>Your Future, Your Fit</h1>
			<h2>Discover Your Perfect Path!</h2>
			<a href="/quiz" class="quiz-link">Take the Quiz</a>
		</div>

		<!-- Right Column (Image) -->
		<div class="hero-image">
			<img src="/hero-img.webp" alt="educational path, light at the horizon" />
		</div>
	</div>
</div>

<style>
	.hero {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 85vh; /* Reducing height to bring it closer to the top */
		padding: 2rem 0; /* Adjust top and bottom padding */
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		max-width: 1200px;
		width: 100%;
	}

	.hero-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.hero-text h1,
	.hero-text h2 {
		margin-bottom: 1rem;
	}

	.quiz-link {
		margin-top: 1.5rem;
		padding: 0.75rem 1.5rem;
		background-color: #007bff;
		color: white;
		text-decoration: none;
		border-radius: 5px;
		text-align: center;
		width: fit-content;
	}

	.hero-image img {
		max-width: 100%;
		height: auto;
	}

	@media (max-width: 768px) {
		.hero-content {
			grid-template-columns: 1fr;
		}

		.hero-image {
			margin-top: 2rem;
		}
	}
</style>
