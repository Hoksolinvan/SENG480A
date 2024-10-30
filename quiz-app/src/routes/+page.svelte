<script>
  import { goto } from '$app/navigation';

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Graduate",
      image: "./s2.png",
      quote: "This platform helped me find the perfect Computer Science program. The comparison tools were invaluable in my decision-making process."
    },
    {
      name: "Michael Rodriguez",
      role: "Business School Student",
      image: "./s1.png",
      quote: "The program finder made my graduate school search so much easier. I found my dream Business Administration program in just a few clicks!"
    },
    {
      name: "Ryan Parker",
      role: "Psychology Major",
      image: "./s3.png",
      quote: "The detailed program comparisons and deadline reminders helped me stay organized throughout my application process."
    }
  ];

  function navigateToSearch() {
    goto('/search');
  }
</script>

<main class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <div class="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
    <div class="grid md:grid-cols-2 gap-12 max-w-7xl w-full px-6">
      <!-- Text Content -->
      <div class="flex flex-col justify-center space-y-6">
        <h1 class="text-5xl font-bold text-blue-900 leading-tight animate-fade-in">
          Find Your Future Major
        </h1>
        <h2 class="text-2xl text-blue-600 font-medium animate-fade-in-delayed">
          Discover the Best Academic Path for You
        </h2>
        <p class="text-gray-600 text-lg">
          Compare programs, track deadlines, and make informed decisions about your academic future.
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
      <h2 class="text-3xl font-bold text-blue-900 text-center mb-12">Why Choose Our Platform</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6 bg-blue-50 rounded-xl">
          <div class="text-blue-600 text-4xl mb-4">⏰</div>
          <h3 class="text-xl font-semibold text-blue-900 mb-2">Deadline Tracking</h3>
          <p class="text-gray-600">Never miss an application deadline with our reminder system.</p>
        </div>

        <div class="p-6 bg-blue-50 rounded-xl">
          <div class="text-blue-600 text-4xl mb-4">📊</div>
          <h3 class="text-xl font-semibold text-blue-900 mb-2">Easy Comparison</h3>
          <p class="text-gray-600">Compare different programs side by side to make informed decisions.</p>
        </div>

        <div class="p-6 bg-blue-50 rounded-xl">
          
          <div class="text-blue-600 text-4xl mb-4">🔍</div>
          <h3 class="text-xl font-semibold text-blue-900 mb-2">Smart Search</h3>
          <p class="text-gray-600">Find programs that match your interests and criteria with our advanced filtering system.</p>
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
  
            <!-- Right-aligned name at the bottom -->
            <p class="text-blue-900 font-semibold text-right mt-8">{testimonial.name}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  
  

  <!-- call to action section -->
  <section class="py-20 bg-blue-900 text-white">
    <div class="max-w-4xl mx-auto text-center px-6">
      <h2 class="text-3xl font-bold mb-6">Ready to Find Your Perfect Program?</h2>
      <p class="text-lg mb-8 text-blue-100">Start your academic journey today with our comprehensive program finder.</p>
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

  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }

  .animate-fade-in-delayed {
    animation: fade-in-delayed 2s ease-out forwards;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
</style>