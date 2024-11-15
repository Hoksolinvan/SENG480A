<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import DecisionSupport from '$lib/DecisionSupport.svelte';
  import { goto } from '$app/navigation';

  let savedPrograms = [];
  let email = '';
  let reminderMessage = '';

  onMount(() => {
    // Load saved programs from localStorage
    savedPrograms = JSON.parse(localStorage.getItem('savedPrograms')) || [];
  });

  async function sendReminder() {
    // Placeholder for send reminder functionality
  }

  function clearSavedPrograms() {
    savedPrograms = [];
    localStorage.removeItem('savedPrograms');
  }
</script>

<div class="min-h-screen bg-gray-50 py-8" in:fade={{ duration: 300 }}>
  <div class="max-w-7xl mx-auto px-4">
    {#if savedPrograms.length > 0}
      <div class="flex justify-between items-center mb-8" in:fly={{ y: 20, duration: 600 }}>
        <h1 class="text-3xl font-bold text-blue-900">Saved Programs</h1>
        <button 
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 
                 transition-all duration-200 transform hover:scale-105"
          on:click={clearSavedPrograms}
        >
          Clear All
        </button>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6" in:fly={{ y: 20, duration: 600, delay: 200 }}>
        {#each savedPrograms as program (program.id)}
          <div class="p-6 bg-white shadow rounded-lg">
            <h2 class="text-lg font-semibold text-blue-800">{program.name}</h2>
            <p class="text-sm text-gray-600">{program.university}</p>
            <p class="text-sm text-gray-500">Deadline: {program.deadline}</p>
          </div>
        {/each}
      </div>

      <!-- Navigation to Compare Programs -->
      <div class="mt-8 flex justify-center" in:fly={{ y: 20, duration: 600, delay: 400 }}>
        <button 
          on:click={() => goto('/compare')}
          class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium
                 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
        >
          Compare Saved Programs
        </button>
      </div>

      <!-- DecisionSupport component with savedPrograms prop -->
       <div class="mt-12" in:fly={{ y: 20, duration: 600, delay: 600 }}>
        <DecisionSupport {savedPrograms} />
      </div>
       
      <div class="mt-12 max-w-xl mx-auto" in:fly={{ y: 20, duration: 600, delay: 1000 }}>
        <!-- Reminder Section -->
        <h2 class="text-xl font-bold text-gray-700 mb-4">Send Reminder</h2>
        <input
          type="email"
          bind:value={email}
          placeholder="Enter your email"
          class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        />
        <textarea
          bind:value={reminderMessage}
          placeholder="Write your reminder message"
          class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        ></textarea>
        <button
          class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          on:click={sendReminder}
        >
          Send Reminder
        </button>
      </div>
    {:else}
      <!-- Message for empty saved programs list -->
      <div class="text-center py-12 text-gray-500">
        <p>You have no saved programs yet.</p>
        <p>Go back to the search page to add some programs.</p>
      </div>
    {/if}
  </div>
</div>
