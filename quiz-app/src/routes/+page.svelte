<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  const testimonials = [
    {
      name: "Emma Carter",
      role: "High School Senior",
      // The image used here  was AI generated 
      image: "./s2.png",
      quote: "EasyPath helped me find programs I never knew about. Amazing!"
    },
    {
      name: "John Patel",
      role: "Grade 12 Student",
      // The image used here  was AI generated 
      image: "./s1.png",
      quote: "All my application deadlines in one place. No more stress!"
    },
    {
      name: "Marcus Brown",
      role: "Future Arts Major",
      // The image used here  was AI generated 
      image: "./s3.png",
      quote: "EasyPath's reminders kept me organized and focused. Loved it!"
    }
  ];

  function navigateToSearch() {
    goto('/search');
  }

  function navigateToDashboard() {
    goto('/dashboard');
  }

  let isHidden=false;


  function openPopup() {
    isHidden = false; // Show popup
    console.log(isHidden);
  }

  function closePopup() {
    isHidden=true;
    console.log(isHidden);
  }


onMount(() => {
  openPopup();
});

</script>

<main class="min-h-screen bg-gray-50">

  <!--Temporary popup-->
  <div id="popup" class:hidden={isHidden}>
    <div class="popup">
    <div class="popup-content">
      <span><strong>BETA TESTING: </strong>Step-by-Step Instructions to Get Started </span>
      <br>
      <br>

      <div style="text-align: left;">
      <p>1. <strong>Log in for Full Access:</strong></p>
        <ul style="text-indent: 15px;">
          <li>Click the profile icon located in the top-right corner of the app.
          </li>
        </ul>
      <br>
      <p>2. On the Login page, use the <strong>pre-filled username and password</strong> to log in.</p>
      <ul style="text-indent: 15px;">
       
        <li>The login process is quick and easy!</li>
        <li><i>Note: </i>The <strong>sign-up functionality is currently unavailable</strong> as we’re still working on it.</li>

      </ul>
      <br>

      <p>3. <strong>Start Searching for Programs or Scholarships</strong></p>
      <ul style="text-indent: 15px;">
        <li>Navigate to the <strong>search page</strong> for programs or scholarships.</li>
        <li>Type your desired <strong>keywords</strong> in the search bar and press <strong>Enter.</strong></li>
        <li><i>Note:</i>The app currently supports two programs at the University of Victoria: <strong>Computer Science</strong> and <strong>Commerce</strong>.</li>
      </ul>
      <br>
      <br>
      <p>Enjoy exploring and discovering opportunities for your university admissions and career planning journey! If you have feedback, we’d love to hear from you.</p>
      </div>
      <button on:click={closePopup} class="bg-blue-600 hover:bg-blue-700">Close</button>

    </div>
  </div>
  </div>


  <!-- Hero Section -->
  <div class="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
    <div class="grid md:grid-cols-2 gap-12 max-w-7xl w-full px-6">
      <!-- Text Content -->
      <div class="flex flex-col justify-center space-y-6">
        <h1 class="text-5xl font-bold text-darkgreen leading-tight animate-fade-in">
          Plan Your Post-Secondary Path
        </h1>
        <h2 class="text-2xl text-midgreen font-medium animate-fade-in-delayed">
          Reduce the stress of post-secondary planning with an all in one tool
        </h2>
        <p class="text-gray-600 text-lg">
          Search programs, track deadlines, and manage scholarship opportunities to make informed decisions about your academic future
        </p>
        <button 
          class="w-fit px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg 
                 hover:bg-blue-700 transform hover:scale-105 transition-all
                 duration-300 text-lg font-semibold"
          on:click={navigateToSearch} 
        >
          Get Started
        </button>
        
      </div>
      <!-- Image -->
      <div class="flex items-center justify-center">
        <!-- The image used here  was AI generated -->
        <img 
          src="/hero-img.webp" 
          alt="Educational growth" 
          class="w-4/5 rounded-full shadow-2xl transform hover:scale-105 
                 transition-all duration-500 animate-float"
        />
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-darkgreen text-center mb-12">What EasyPath Offers</h2>
      <div class="grid md:grid-cols-4 gap-8">
        <div class="p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300 relative">
          <div class="text-midgreen text-4xl mb-4">⏰</div>
          <h3 class="text-xl font-semibold text-darkgreen mb-2">Deadline Tracking</h3>
          <p class="text-gray-600">Never miss an application deadline with our reminder system.</p>
          <div class="absolute top-0 left-0 w-full h-full bg-green-100 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <!-- The image used here  was AI generated -->
            <img src="/deadlines.webp" alt="Deadline Tracking" class="w-40 h-40" />
          </div>
        </div>

        <div class="p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300 relative">
          <div class="text-midgreen text-4xl mb-4">📊</div>
          <h3 class="text-xl font-semibold text-darkgreen mb-2">Easy Comparison</h3>
          <p class="text-gray-600">Compare different programs side by side to make informed decisions.</p>
          <div class="absolute top-0 left-0 w-full h-full bg-green-100 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <!-- The image used here  was AI generated -->
            <img src="/program.webp" alt="Program Comparison" class="w-40 h-40" />
          </div>
        </div>

        <div class="p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300 relative">
          <div class="text-midgreen text-4xl mb-4">🔍</div>
          <h3 class="text-xl font-semibold text-darkgreen mb-2">Smart Search</h3>
          <p class="text-gray-600">Find programs that match your interests and criteria with our advanced filtering system.</p>
          <div class="absolute top-0 left-0 w-full h-full bg-green-100 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <!-- The image used here  was AI generated -->
            <img src="/searchpic.webp
            " alt="Smart Search" class="w-40 h-40" />
          </div>
        </div>


        <div class="p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300 relative">
          <div class="text-midgreen text-4xl mb-4">🎓</div>
          <h3 class="text-xl font-semibold text-darkgreen mb-2">Scholarship Catalog</h3>
          <p class="text-gray-600">Explore the scholarships available in our database.</p>
          <div class="absolute top-0 left-0 w-full h-full bg-green-100 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <!-- The image used here  was AI generated -->
            <img src="/scholarships.webp
            " alt="Smart Search" class="w-40 h-40" />
          </div>
        </div>
      </div>


      
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-20 bg-green-50">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-darkgreen text-center mb-12">What Students Say About EasyPath</h2>
      <div class="grid md:grid-cols-3 gap-8">
        {#each testimonials as testimonial}
          <div class="bg-gradient-to-br from-green-100 to-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 relative">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              class="w-20 h-20 rounded-full mb-4 object-cover float-left mr-4"
            />
            <p class="text-gray-600 italic mb-6 pl-2">{testimonial.quote}</p>
            <p class="text-darkgreen font-semibold text-right mt-8">{testimonial.name}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Call to Action Section -->
  <section class="py-20 bg-darkgreen text-white">
    <div class="max-w-4xl mx-auto text-center px-6">
      <h2 class="text-3xl font-bold mb-6">Ready to Plan Your Path to Success?</h2>
      <p class="text-lg mb-8 text-green-100">Take control of your academic journey with our personalized planning and program search tool</p>
      <button 
        class="px-8 py-4 bg-white text-darkgreen rounded-lg shadow-lg 
               hover:bg-green-50 transform hover:scale-105 transition-all
               duration-300 text-lg font-semibold"
        on:click={navigateToSearch}
      >
        Start Searching Programs
      </button>
    </div>
  </section>
</main>

<style>
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fade-in-delayed {
    0% { opacity: 0; transform: translateY(-20px); }
    50% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }

  .animate-fade-in-delayed {
    animation: fade-in-delayed 2s ease-out forwards;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .font-hand {
    font-family: 'Satisfy', cursive;
  }



  .hidden {
  display: none;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 1000px;
  
}

.popup-content h2 {
  margin: 0 0 10px;
}

.popup-content button {
  
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}


</style>
