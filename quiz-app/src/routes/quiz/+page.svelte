<script>
 


  var deadlines=[]
  let questionIndex = 0;
  let answers = {};
  let quizComplete = false;
  let recommendation = '';
  let applicationDeadline = '';
  let userEmail = '';
  let reminderSent = false;
  let mutexlock=false;

  webscrape();


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
  var universityRecommendations = {
    // 'Social Sciences': {
    //   'Very Important': {
    //     program: 'University of British Columbia (UBC) - Psychology',
    //     deadline: deadlines[1] //'January 15, 2025'
    //   },
    //   'Somewhat Important': {
    //     program: 'Simon Fraser University (SFU) - Sociology',
    //     deadline: deadlines[0] //'February 1, 2025'
    //   },
    //   'Not Important': {
    //     program: 'University of the Fraser Valley (UFV) - Anthropology',
    //     deadline: deadlines[3] //'March 1, 2025'
    //   }
    // },
    // 'Engineering': {
    //   'Very Important': {
    //     program: 'University of British Columbia (UBC) - Electrical Engineering',
    //     deadline: deadlines[1] //'January 15, 2025'
    //   },
    //   'Somewhat Important': {
    //     program: 'University of Victoria (UVic) - Mechanical Engineering',
    //     deadline: deadlines[2] //'February 28, 2025'
    //   },
    //   'Not Important': {
    //     program: 'British Columbia Institute of Technology (BCIT) - Civil Engineering',
    //     deadline: deadlines[4] //'April 1, 2025'
    //   }
    // },
    // 'Business': {
    //   'Very Important': {
    //     program: 'University of British Columbia (UBC) - Sauder School of Business',
    //     deadline: deadlines[1] //'January 15, 2025'
    //   },
    //   'Somewhat Important': {
    //     program: 'Simon Fraser University (SFU) - Beedie School of Business',
    //     deadline: deadlines[0] //'February 1, 2025'
    //   },
    //   'Not Important': {
    //     program: 'Thompson Rivers University (TRU) - Bachelor of Business Administration',
    //     deadline: deadlines[5]//'March 15, 2025'
    //   }
    // },
    // 'Arts': {
    //   'Very Important': {
    //     program: 'Emily Carr University of Art + Design - Visual Arts',
    //     deadline: deadlines[6] //'January 31, 2025'
    //   },
    //   'Somewhat Important': {
    //     program: 'University of Victoria (UVic) - Fine Arts',
    //     deadline: deadlines[2] //'February 28, 2025'
    //   },
    //   'Not Important': {
    //     program: 'Capilano University - Bachelor of Design in Visual Communication',
    //     deadline:  deadlines[7] //'March 31, 2025'
    //   }
    // }
  };
  
  function selectAnswer(option) {

    if(!mutexlock){
      console.log('initializing');
      return
    }


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
      
      store_quiz();

    }
  }
  // Add delay for reminder section
  $: if (quizComplete) {

   

    setTimeout(() => {
      document.querySelector('.email-reminder').style.opacity = 1;
    }, 1000);
  }


  
  async function webscrape(){

    try{
  
     
      const request = await fetch('https://seng480a-production.up.railway.app/webscrape');
      

      if (request.ok){
				
        deadlines = await request.json();
        mutexlock=true;
        console.log(deadlines);


        universityRecommendations = {
        'Social Sciences': {
          'Very Important': {
            program: 'University of British Columbia (UBC) - Psychology',
            deadline: deadlines[1]
          },
          'Somewhat Important': {
            program: 'Simon Fraser University (SFU) - Sociology',
            deadline: deadlines[0]
          },
          'Not Important': {
            program: 'University of the Fraser Valley (UFV) - Anthropology',
            deadline: deadlines[3]
          }
        },
        'Engineering': {
          'Very Important': {
            program: 'University of British Columbia (UBC) - Electrical Engineering',
            deadline: deadlines[1]
          },
          'Somewhat Important': {
            program: 'University of Victoria (UVic) - Mechanical Engineering',
            deadline: deadlines[2]
          },
          'Not Important': {
            program: 'British Columbia Institute of Technology (BCIT) - Civil Engineering',
            deadline: deadlines[4]
          }
        },
        'Business': {
          'Very Important': {
            program: 'University of British Columbia (UBC) - Sauder School of Business',
            deadline: deadlines[1]
          },
          'Somewhat Important': {
            program: 'Simon Fraser University (SFU) - Beedie School of Business',
            deadline: deadlines[0]
          },
          'Not Important': {
            program: 'Thompson Rivers University (TRU) - Bachelor of Business Administration',
            deadline: deadlines[5]
          }
        },
        'Arts': {
          'Very Important': {
            program: 'Emily Carr University of Art + Design - Visual Arts',
            deadline: deadlines[6]
          },
          'Somewhat Important': {
            program: 'University of Victoria (UVic) - Fine Arts',
            deadline: deadlines[2]
          },
          'Not Important': {
            program: 'Capilano University - Bachelor of Design in Visual Communication',
            deadline: deadlines[7]
          }
        }
      };
			}
			else{
				console.error('Error Obtaining webscrape', request.statusText);
			}


    }
    catch(error){
      console.log("Failed to obtain webscrape data\n");
    }

  }

  async function store_quiz(){
    
    
    try{
      let buffer=[answers.major,answers.ranking];
      console.log(buffer)
			const request = await fetch('https://seng480a-production.up.railway.app/quiz_result',
			{
				method: 'POST',
				headers: {
					'Content-Type':'application/json'
				},
				body: JSON.stringify({
					answers: buffer
				})

			});

			if (request.ok){
				const result = await request.json();
				console.log('Quiz results was successfully posted: ',result);
			}
			else{
				console.error('Error Submitting Quiz', response.statusText);
			}
		}
		catch(error) {
			console.log("Failed to submit Quiz\n",error);
		}
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
    {#if mutexlock}
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
      {:else}
      <div class="loading-message">
        <h2>Loading your recommendation...</h2>
      </div>

      {/if}
      
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

      <!-- Reload Page. Might need improvements to have a reset mechanism that is more seemless -->
      <!-- <button onclick="location.reload();" id="reset-button">Reset</button> -->
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
    /* color: #1e3a8a; */
    color: #5603ad;
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
    /* background-color: #007bff; */ 
    /* background-color: #5603ad;  Dark purple */
    background-color: #03ad06; /*Dark green*/
    /* background-color: #C2F8CB; Lighter green, see palette for the remaining two greens */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .quiz-question button:hover {
    /* background-color: #0056b3; */
    background-color: #5603ad;
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
    animation: fadeInUp 1s ease-out;
  }

  .deadline-info {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #e6f3ff;
    border-radius: 10px;
    animation: fadeInUp 2s;
    /* animation: fadeInUp 2s ease-out 0.5s; */
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

  /* #reset-button {
		padding: 0.5rem 1rem;
    font-size: 1rem;
		background-color: #007bff;
		color: white;
		border-radius: 10px;
		cursor: pointer;
		font-weight: bold;
		border-style: none none solid none;
		border-width: 5px;
		border-color: #004a99;
    margin-top: 1rem;
	} */
  

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