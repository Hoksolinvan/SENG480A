<script>
  import { goto } from '$app/navigation';

  const testimonials = [
    {
      name: "Avery Thompson",
      role: "High School Senior",
      image: "./s2.png",
      quote: "EasyPath made finding the right program so simple and stress-free!"
    },
    {
      name: "John Patel",
      role: "Grade 12 Student",
      image: "./s1.png",
      quote: "All my application deadlines in one place—no more stress!"
    },
    {
      name: "Marcus Brown",
      role: "Future Arts Major",
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
</script>

<main class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <div class="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
    <div class="grid md:grid-cols-2 gap-12 max-w-7xl w-full px-6">
      <!-- Text Content -->
      <div class="flex flex-col justify-center space-y-6">
        <h1 class="text-5xl font-bold text-blue-900 leading-tight animate-fade-in">
          Plan Your Post-Secondary Path
        </h1>
        <h2 class="text-2xl text-blue-600 font-medium animate-fade-in-delayed">
          Reduce the stress of post-secondary planning with an all in one tool
        </h2>
        <p class="text-gray-600 text-lg">
          Search programs, track deadlines, and manage scholarship opportunities to make informed decisions about your academic future
        </p>
        <button 
          class="w-fit px-8 py-4 bg-blue-900 text-white rounded-lg shadow-lg 
                 hover:bg-blue-800 transform hover:scale-105 transition-all
                 duration-300 text-lg font-semibold"
          on:click={navigateToSearch} 
        >
          Get Started
        </button>
        
      </div>
      <!-- Image -->
      <div class="flex items-center justify-center">
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
      <h2 class="text-3xl font-bold text-blue-900 text-center mb-12">What EasyPath Offers</h2>
      <div class="grid md:grid-cols-4 gap-8">
        <div class="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 relative">
          <div class="text-blue-600 text-4xl mb-4">⏰</div>
          <h3 class="text-xl font-semibold text-blue-900 mb-2">Deadline Tracking</h3>
          <p class="text-gray-600">Never miss an application deadline with our reminder system.</p>
          <div class="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <img src="/deadlines.webp" alt="Deadline Tracking" class="w-40 h-40" />
          </div>
        </div>

        <div class="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 relative">
          <div class="text-blue-600 text-4xl mb-4">📊</div>
          <h3 class="text-xl font-semibold text-blue-900 mb-2">Easy Comparison</h3>
          <p class="text-gray-600">Compare different programs side by side to make informed decisions.</p>
          <div class="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <img src="/program.webp" alt="Program Comparison" class="w-40 h-40" />
          </div>
        </div>

        <div class="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 relative">
          <div class="text-blue-600 text-4xl mb-4">🔍</div>
          <h3 class="text-xl font-semibold text-blue-900 mb-2">Smart Search</h3>
          <p class="text-gray-600">Find programs that match your interests and criteria with our advanced filtering system.</p>
          <div class="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <img src="/searchpic.webp
            " alt="Smart Search" class="w-40 h-40" />
          </div>
        </div>


        <div class="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 relative">
          <div class="text-blue-600 text-4xl mb-4">🎓</div>
          <h3 class="text-xl font-semibold text-blue-900 mb-2">Scholarship Catalog</h3>
          <p class="text-gray-600">Explore the scholarships available in our database.</p>
          <div class="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <img src="/searchpic.webp
            " alt="Smart Search" class="w-40 h-40" />
          </div>
        </div>
      </div>


      
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-20 bg-blue-50">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-blue-900 text-center mb-12">What Students Say About EasyPath</h2>
      <div class="grid md:grid-cols-3 gap-8">
        {#each testimonials as testimonial}
          <div class="bg-gradient-to-br from-blue-100 to-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 relative">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              class="w-20 h-20 rounded-full mb-4 object-cover float-left mr-4"
            />
            <p class="text-gray-600 italic mb-6 pl-2">{testimonial.quote}</p>
            <p class="text-blue-900 font-semibold text-right mt-8">{testimonial.name}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Call to Action Section -->
  <section class="py-20 bg-blue-900 text-white">
    <div class="max-w-4xl mx-auto text-center px-6">
      <h2 class="text-3xl font-bold mb-6">Ready to Plan Your Path to Success?</h2>
      <p class="text-lg mb-8 text-blue-100">Take control of your academic journey with our personalized planning and program search tool</p>
      <button 
        class="px-8 py-4 bg-white text-blue-900 rounded-lg shadow-lg 
               hover:bg-blue-50 transform hover:scale-105 transition-all
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
</style>