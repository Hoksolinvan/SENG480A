<script>
  import { savedPrograms } from '$lib/savedPrograms';

  // Subscribe to saved programs
  let programs = [];
  savedPrograms.subscribe((value) => {
    programs = value.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  });

  // Selected program and animation state
  let selectedProgram = programs[0];
  let animateDeadline = false;

  // Notification state
  let email = '';
  let notificationPreference = '2weeks';
  let confirmationMessage = '';

  // Select a program and trigger animation
  function selectProgram(program) {
    selectedProgram = program;
    animateDeadline = true;
    setTimeout(() => (animateDeadline = false), 500);
  }

  // Get remaining days until deadline
  function getDaysUntil(dateStr) {
    const today = new Date();
    const deadlineDate = new Date(dateStr);
    const diffTime = deadlineDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  // Format date to readable string
  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Handle reminder setup
  function setReminder() {
    if (!email) {
      confirmationMessage = 'Please enter your email address';
      return;
    }

    const reminderDate = new Date(selectedProgram.deadline);
    
    switch (notificationPreference) {
      case '2weeks':
        reminderDate.setDate(reminderDate.getDate() - 14);
        break;
      case '1week':
        reminderDate.setDate(reminderDate.getDate() - 7);
        break;
      case '3days':
        reminderDate.setDate(reminderDate.getDate() - 3);
        break;
    }

    confirmationMessage = `Reminder set for ${formatDate(reminderDate)}!`;
    setTimeout(() => (confirmationMessage = ''), 5000);
  }
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <button 
    class="w-fit px-4 py-2 bg-blue-900 text-white rounded-lg shadow-sm 
    hover:bg-blue-800 transform hover:scale-105 transition-all
    duration-300text-sm font-medium border border-gray-200 mb-8"
    onclick="window.location.href = './dashboard';"
  >
    Back
  </button>

  <div class="grid md:grid-cols-2 gap-8 items-start">
    <!-- Programs List -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div class="px-6 py-5 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-900">Programs</h2>
      </div>
      
      <div class="divide-y divide-gray-200">
        {#if programs && programs.length > 0}
          {#each programs as program (program.id)}
            <button
              on:click={() => selectProgram(program)}
              class="w-full text-left px-6 py-4 transition-colors
                {selectedProgram === program ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'}"
            >
              <h3 class="text-base font-medium {selectedProgram === program ? 'text-blue-700' : 'text-gray-900'}">
                {program.name}
              </h3>
              <p class="text-sm text-gray-500 mt-1">{program.university}</p>
            </button>
          {/each}
        {:else}
          <p class="px-6 py-4 text-sm text-gray-500">
            No programs available. Please add some programs.
          </p>
        {/if}
      </div>
    </div>

    <!-- Program Details -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      {#if selectedProgram}
        <div class="space-y-6 p-6" class:scale-105={animateDeadline} class:transition-transform={animateDeadline} class:duration-500={animateDeadline}>
          <div>
            <h2 class="text-xl font-semibold text-gray-900">
              {selectedProgram.name}
            </h2>
            <p class="mt-1 text-base text-gray-600">
              {selectedProgram.university}
            </p>
          </div>

          <div class="space-y-2">
            <p class="text-sm text-gray-600">
              Deadline: 
              <span class="font-medium text-gray-900">
                {formatDate(selectedProgram.deadline)}
              </span>
            </p>
            <p class="text-sm text-gray-600">
              Days Remaining: 
              {#if getDaysUntil(selectedProgram.deadline) > 0}
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  {getDaysUntil(selectedProgram.deadline)} days
                </span>
              {:else}
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Deadline passed
                </span>
              {/if}
            </p>
          </div>

          <!-- Email Notification -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900">
              Email Notification
            </h3>
            <div class="grid sm:grid-cols-2 gap-3">
              <input
                type="email"
                bind:value={email}
                placeholder="your.email@example.com"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
              <select
                bind:value={notificationPreference}
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="2weeks">2 weeks before</option>
                <option value="1week">1 week before</option>
                <option value="3days">3 days before</option>
              </select>
            </div>

            <button
              on:click={setReminder}
              class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Set Reminder
            </button>
          </div>

          {#if confirmationMessage}
            <div class="text-sm text-green-700 bg-green-50 rounded-md p-4 border border-green-200">
              {confirmationMessage}
            </div>
          {/if}
        </div>
      {:else}
        <div class="p-6">
          <p class="text-center text-gray-500">Please select a program to view details.</p>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  /* Add any additional custom styles here */
  :global(body) {
    background-color: #f9fafb;
  }
</style>