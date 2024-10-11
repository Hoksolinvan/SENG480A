<div class="hero">
  <div class="hero-content">
    <!-- Left Column (Text) -->
    <div class="hero-text">
      <h1>Find Your Ideal Program</h1>
      <h2>Plan Your Academic Journey</h2>
      <a href="/quiz" class="quiz-link">Get Started</a>
    </div>
    <!-- Right Column (Image) -->
    <div class="hero-image">
      <img src="/hero-img.webp" alt="a green tree depicting educational growth" />
    </div>
  </div>
</div>

<style>
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
    padding: 2rem 0;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
    padding: 0 2rem;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
  }

  .hero-text h1 {
    margin-bottom: 1rem;
    font-size: 3.2rem; /* Adjusted for better visual balance */
    /* color: #1e3a8a; */
    color: #5603ad;
    /* color: rgb(123, 123, 123); */
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    animation: fadeInDown 1s ease-out;
    font-family: 'Poppins', sans-serif;
    
  }

  .hero-text h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem; /* Slightly reduced to fit under h1 */
    /* color: #3b82f6; */
    color: #8367c7;
    font-weight: 500;
    animation: fadeInUp 1s ease-out 0.5s;
    animation-fill-mode: both;
    font-family: 'Montserrat', sans-serif;
  }

  .quiz-link {
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    /* background-color: #007bff; */
    /* background-color: #5603ad; */
    background-color: #3500A5;
    color: white;
    text-decoration: none;
    border-radius: 10px;
    text-align: center;
    width: fit-content;
    border-style: none none solid none;
    border-width: 5px;
    /* border-color: #004a99; */
    border-color: #36006f;
    font-weight: bold;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-family: 'Roboto', sans-serif;
  }

  .quiz-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .hero-image {
    padding: 0 1rem;
  }

  .hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    animation: floatAnimation 3s ease-in-out infinite;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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

  @keyframes floatAnimation {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  /* Responsive design for smaller screens */
  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      padding: 0 1rem;
    }

    .hero-image {
      margin-top: 2rem;
    }

    .hero-text h1 {
      font-size: 2.2rem; /* Smaller for mobile screens */
    }

    .hero-text h2 {
      font-size: 1.4rem; /* Proportional to h1 */
    }

    .quiz-link {
      font-size: 1rem; /* Adjust button size on smaller screens */
      padding: 0.5rem 1.2rem;
    }
  }
</style>
