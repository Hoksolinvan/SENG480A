<script>
  // Any relevant script logic goes here
</script>

<div class="about-wrapper">
  <h1 class="fade-in">About Our Planner</h1>
  <p class="intro slide-in">
    <!-- We provide students with the tools to organize and plan their future education by helping them stay on top of deadlines, requirements, and major options. Our mission is simple: to help you take control of your academic journey with confidence. -->
    We provide Canadian high school students and their parents with an all-in-one platform to organize and plan post-secondary paths. We help students and parents search and compare programs, stay on top of deadlines and program requirements, and discover scholarship opportunities. Our mission is simple: we want to help reduce the stress of applying for post-secondary.
  </p>

  <div class="section fade-in">
    <h2 class="slide-in">Who We Are</h2>
    <p class="slide-in">
      <!-- We’re a team of dedicated individuals passionate about assisting high school students in shaping their academic futures. Whether you're interested in social sciences, engineering, or business, we provide a platform that simplifies planning, so you can focus on what matters most: finding your path. -->
      We are a team of diverse UVic students passionate about making a positive impact on young Canadians. Whether you're interested in social sciences, engineering, or business, we want to reduce the stress of the planning process, as we were all there once!
    </p>
  </div>

  <div class="section fade-in">
    <h2 class="slide-in">Our Purpose</h2>
    <p class="slide-in">
      <!-- Our app is designed to be your go-to planning assistant for navigating the complexities of college applications and choosing the right major. We’re here to provide clarity, not to overwhelm, helping you stay organized and confident in your decisions. -->
      Our app is designed to be your go-to planning assistant for navigating the difficulties of post-secondary applications. We are here to simplify the planning process and make you feel confident with your plan.
    </p>
  </div>

  <div class="section fade-in">
    <h2 class="slide-in">What Drives Us</h2>
    <ul class="values-list">
      <li class="fade-in">
        <strong>Student-Focused</strong>: Everything we do is centered around making your experience as seamless as possible.
      </li>
      <li class="fade-in">
        <strong>Equality</strong>: We believe all students should have access to the tools they need, no matter their background.
      </li>
      <li class="fade-in">
        <strong>Empowerment</strong>: Our goal is to provide you with simple, powerful tools to plan your future on your terms.
      </li>
    </ul>
  </div>
</div>

<style>
/* Basic layout and typography */
.about-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

h1 {
  font-size: 2.5rem;
  /* color: #5603ad; */
  /* color: #007bff; */
  /* color: rgb(30 58 138); */
  color: #194C13;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
}

.intro, .section p {
  color: #555;
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 2rem;
}

.section h2 {
  font-size: 1.8rem;
  /* color: #8367c7; 
  color: #007bff;*/
  color: #52cc26;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 1rem;
}

.values-list {
  list-style-type: none;
  padding: 0;
  
}

.values-list li {
  font-size: 1.1rem;
  margin: 0.5rem 0;
  color: #555;
}

.values-list li strong {
  /* color: #5603ad;
  color: #1e3a8a; */
  color: #194C13;
}

/* Hover effect for values list */
.values-list li:hover {
  transform: translateX(10px);
  transition: transform 0.3s ease;
}

/* Animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease forwards;
}

.slide-in {
  animation: slideIn 1.2s ease forwards;
}

/* Apply slight delay for sections to animate sequentially */
.section:nth-child(2) .fade-in,
.section:nth-child(2) .slide-in {
  animation-delay: 0.3s;
}

.section:nth-child(3) .fade-in,
.section:nth-child(3) .slide-in {
  animation-delay: 0.6s;
}

.section:nth-child(4) .fade-in,
.section:nth-child(4) .slide-in {
  animation-delay: 0.9s;
}
</style>
