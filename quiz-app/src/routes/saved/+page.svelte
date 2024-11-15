<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import DecisionSupport from '$lib/DecisionSupport.svelte';

  let savedPrograms = [];
  let email = '';
  let reminderMessage = '';

  onMount(() => {
    // Load saved programs from localStorage
    savedPrograms = JSON.parse(localStorage.getItem('savedPrograms')) || [];
  });

  function clearSavedPrograms() {
    savedPrograms = [];
    localStorage.removeItem('savedPrograms');
  }

  function deleteSavedProgram(programId) {
    savedPrograms = savedPrograms.filter(program => program.id !== programId);
    localStorage.setItem('savedPrograms', JSON.stringify(savedPrograms));
  }

  function sendReminder() {
    // Placeholder functionality for sending a reminder
    alert(`Reminder sent to ${email} with message: ${reminderMessage}`);
    email = '';
    reminderMessage = '';
  }
</script>

<div class="min-h-screen bg-gray-50 py-8" in:fade={{ duration: 300 }}>
  <div class="max-w-7xl mx-auto px-4">
    {#if savedPrograms.length > 0}
      <!-- Header and Controls -->
      <div class="flex justify-between items-center mb-6" in:fly={{ y: 20, duration: 600 }}>
        <a href="/search" class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md">
          Back to Search
        </a>
        <h1 class="text-3xl font-bold text-blue-900">Saved Programs</h1>
        <button
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
          on:click={clearSavedPrograms}
        >
          Clear All
        </button>
      </div>

      <!-- Saved Programs Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" in:fly={{ y: 20, duration: 600, delay: 200 }}>
        {#each savedPrograms as program (program.id)}
          <div class="p-4 bg-white shadow rounded-lg border border-gray-200 flex justify-between items-center">
            <div>
              <h2 class="text-lg font-semibold text-blue-800 mb-1">{program.name}</h2>
              <p class="text-sm text-gray-600">{program.university}</p>
              <p class="text-sm text-gray-500">Deadline: {program.deadline}</p>
            </div>
            <button
              class="text-red-500 hover:text-red-700 ml-4"
              on:click={() => deleteSavedProgram(program.id)}
              aria-label="Delete Program"
            >
              ✕
            </button>
          </div>
        {/each}
      </div>

      <!-- Navigation to Compare Programs -->
      <div class="mt-8 flex justify-center" in:fly={{ y: 20, duration: 600, delay: 400 }}>
        <a href="/compare" class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
          Compare Saved Programs
        </a>
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
      <!-- Empty State Message -->
      <div class="text-center py-12 text-gray-500">
        <p>You have no saved programs yet.</p>
        <p>Go back to the <a href="/search" class="text-blue-600 hover:underline">search page</a> to add some programs.</p>
      </div>
    {/if}
  </div>
</div>
