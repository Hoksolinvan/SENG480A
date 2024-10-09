<script>
  let questionIndex = 0;
  let answers = {};
  let quizComplete = false;
  let recommendation = '';
  let applicationDeadline = '';
  let userEmail = '';
  let reminderSent = false;

  function sendReminder() {
    console.log(`Sending reminder to ${userEmail} for ${recommendation} deadline: ${applicationDeadline}`);
    reminderSent = true;
  }

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
      'Very Important': {
        program: 'University of British Columbia (UBC) - Psychology',
        deadline: 'January 15, 2025'
      },
      'Somewhat Important': {
        program: 'Simon Fraser University (SFU) - Sociology',
        deadline: 'February 1, 2025'
      },
      'Not Important': {
        program: 'University of the Fraser Valley (UFV) - Anthropology',
        deadline: 'March 1, 2025'
      }
    },
    'Engineering': {
      'Very Important': {
        program: 'University of British Columbia (UBC) - Electrical Engineering',
        deadline: 'January 15, 2025'
      },
      'Somewhat Important': {
        program: 'University of Victoria (UVic) - Mechanical Engineering',
        deadline: 'February 28, 2025'
      },
      'Not Important': {
        program: 'British Columbia Institute of Technology (BCIT) - Civil Engineering',
        deadline: 'April 1, 2025'
      }
    },
    'Business': {
      'Very Important': {
        program: 'University of British Columbia (UBC) - Sauder School of Business',
        deadline: 'January 15, 2025'
      },
      'Somewhat Important': {
        program: 'Simon Fraser University (SFU) - Beedie School of Business',
        deadline: 'February 1, 2025'
      },
      'Not Important': {
        program: 'Thompson Rivers University (TRU) - Bachelor of Business Administration',
        deadline: 'March 15, 2025'
      }
    },
    'Arts': {
      'Very Important': {
        program: 'Emily Carr University of Art + Design - Visual Arts',
        deadline: 'January 31, 2025'
      },
      'Somewhat Important': {
        program: 'University of Victoria (UVic) - Fine Arts',
        deadline: 'February 28, 2025'
      },
      'Not Important': {
        program: 'Capilano University - Bachelor of Design in Visual Communication',
        deadline: 'March 31, 2025'
      }
    }
  };
  
  function selectAnswer(option) {
    if (questionIndex === 0) {
      answers.major = option;
    } else if (questionIndex === 1) {
      answers.ranking = option;
      const result = universityRecommendations[answers.major][answers.ranking];
      recommendation = result.program;
      applicationDeadline = result.deadline;
    }
    if (questionIndex < questions.length - 1) {
      questionIndex++;
    } else {
      quizComplete = true;
    }
  }

  // Add delay for reminder section
  $: if (quizComplete) {
    setTimeout(() => {
      document.querySelector('.email-reminder').style.opacity = 1;
    }, 1000);
  }
</script>

<div class="quiz-wrapper">
  <div class="quiz-container">
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
        <div class="deadline-info">
          <h3>Application Deadline</h3>
          <p><strong>{applicationDeadline}</strong></p>
        </div>
      </div>
      
      <!-- Show the reminder section only after the quiz is completed and the deadline is shown -->
      <div class="email-reminder" style="opacity: 0;">
        <h3>Set Email Reminder</h3>
        {#if !reminderSent}
          <p class="reminder-text">Don't miss the deadline! Enter your email to receive a reminder:</p>
          <form on:submit|preventDefault={sendReminder}>
            <input 
              type="email" 
              bind:value={userEmail} 
              placeholder="Enter your email" 
              required
              id="email-input-field"
            />
            <button type="submit" class="reminder-btn">Send Reminder</button>
          </form>
        {:else}
          <p class="success-message">Reminder set! We'll email you before the deadline.</p>
        {/if}
      </div>
    {/if}
  </div>

</div>

<style>
  .quiz-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    padding: 2rem;
    background-color: #f0f8ff;
  }

  .quiz-container {
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .quiz-question h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #1e3a8a;
    text-align: center;
  }

  .quiz-question ul {
    list-style-type: none;
    padding: 0;
  }

  .quiz-question li {
    margin: 1rem 0;
  }

  .quiz-question button {
    width: 100%;
    padding: 0.7rem 1.5rem;
    font-size: 1.2rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .quiz-question button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  .quiz-complete {
    text-align: center;
  }

  .recommendation-header {
    font-size: 2.2rem;
    color: #1e3a8a;
    text-align: center;
    margin-bottom: 1.5rem;
    animation: fadeInUp 1s ease-out;
  }

  .recommendation {
    font-size: 1.3rem;
    color: #333;
    background-color: #f8f9fa;
    border: 2px solid #007bff;
    padding: 1.5rem;
    border-radius: 10px;
    margin-top: 1.5rem;
    width: 100%;
  }

  .deadline-info {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #e6f3ff;
    border-radius: 10px;
    animation: fadeInUp 1s ease-out 0.5s;
  }

  .deadline-info h3 {
    color: #1e3a8a;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .deadline-info p {
    font-size: 1.3rem;
    color: #333;
  }

  .email-reminder {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #e8f5e9;
    border-radius: 10px;
    border: 2px solid #4caf50;
    opacity: 0;
    transition: opacity 1s ease;
  }

  .email-reminder h3 {
    font-size: 1.3rem;
    color: #333;
  }

  .reminder-text {
    padding: 0.5rem 0;
    font-size: 1.1rem;
    color: #333;
  }

  .reminder-btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin-top: 1rem;
  }

  #email-input-field {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    width: 70%;
  }

  .reminder-btn:hover {
    background-color: #388e3c;
    transform: translateY(-2px);
  }

  .success-message {
    color: #4caf50;
    font-weight: bold;
  }

  strong {
    color: #007bff;
    font-weight: 600;
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

  @media (max-width: 768px) {
    .quiz-wrapper {
      padding: 1rem;
    }
    
    .quiz-container {
      padding: 1.5rem;
    }

    .quiz-question h2 {
      font-size: 1.5rem;
    }

    .recommendation-header {
      font-size: 1.8rem;
    }

    .recommendation {
      font-size: 1.1rem;
    }

    .deadline-info h3 {
      font-size: 1.3rem;
    }

    .deadline-info p {
      font-size: 1.1rem;
    }

  }
</style>