<script>
  import { savedPrograms } from '$lib/savedPrograms';

  // Subscribe to saved programs
  let programs = [];
  savedPrograms.subscribe((value) => {
    programs = value.sort((a, b) => new Date(a.deadline) - new Date(b.deadline)); // Sort by deadline
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
    setTimeout(() => (animateDeadline = false), 500); // Reset animation after 500ms
  }

  // Get remaining days until the deadline
  function getDaysUntil(dateStr) {
    const today = new Date();
    const deadlineDate = new Date(dateStr);
    const diffTime = deadlineDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  // Format date to a readable string
  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  // Handle reminder setup
  function setReminder() {
    if (!email) {
      confirmationMessage = 'Please enter your email address';
      return;
    }

    const reminderDate = new Date(selectedProgram.deadline);

    // Adjust reminder date based on preference
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
    setTimeout(() => (confirmationMessage = ''), 5000); // Hide message after 5 seconds
  }
</script>

<div class="container mx-auto py-8 grid md:grid-cols-2 gap-6">
  <!-- Programs List -->
  <div class="bg-white border rounded-lg shadow-md p-6">
    <h2 class="text-lg font-medium mb-4 text-gray-800">Programs</h2>
    <div class="space-y-2">
      {#if programs && programs.length > 0}
        {#each programs as program (program.id)}
          <button
            on:click={() => selectProgram(program)}
            class="w-full text-left px-3 py-2 rounded-md transition-colors text-gray-700
                   {selectedProgram === program ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'}"
          >
            <span class="block text-base truncate">{program.name}</span>
            <span class="block text-sm text-gray-500 truncate">{program.university}</span>
          </button>
        {/each}
      {:else}
        <p class="text-sm text-gray-500">No programs available. Please add some programs.</p>
      {/if}
    </div>
  </div>

  <!-- Deadline Details -->
  <div class="bg-white border rounded-lg shadow-md p-6">
    {#if selectedProgram}
      <div class={animateDeadline ? 'transition-transform transform scale-105 duration-500 ease-in-out' : ''}>
        <h2 class="text-lg font-semibold mb-3 text-gray-800">{selectedProgram.name}</h2>
        <p class="text-base text-gray-700 mb-4">{selectedProgram.university}</p>
        <p class="text-sm text-gray-600 mb-2">
          Deadline: <span class="font-medium">{formatDate(selectedProgram.deadline)}</span>
        </p>
        <p class="text-sm text-gray-600 mb-2">
          Days Remaining: 
          {#if getDaysUntil(selectedProgram.deadline) > 0}
            <span class="text-yellow-800 bg-yellow-100 px-2 py-1 rounded">
              {getDaysUntil(selectedProgram.deadline)} days
            </span>
          {:else}
            <span class="text-red-800 bg-red-100 px-2 py-1 rounded">Deadline passed</span>
          {/if}
        </p>
      </div>

      <!-- Email Notification -->
      <div class="mt-6">
        <h3 class="text-lg font-medium mb-2 text-gray-800">Email Notification</h3>
        <div class="flex items-center space-x-2">
          <input
            type="email"
            bind:value={email}
            placeholder="your.email@example.com"
            class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            bind:value={notificationPreference}
            class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="2weeks">2 weeks before</option>
            <option value="1week">1 week before</option>
            <option value="3days">3 days before</option>
          </select>
        </div>
        <button
          on:click={setReminder}
          class="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-base font-medium"
        >
          Set Reminder
        </button>
      </div>

      <!-- Display Confirmation Message -->
      {#if confirmationMessage}
        <div class="mt-4 text-green-600 bg-green-100 p-3 rounded-lg text-center">
          {confirmationMessage}
        </div>
      {/if}
    {:else}
      <p class="text-center text-gray-500">Please select a program to view details.</p>
    {/if}
  </div>
</div>

<style>
  .container {
    max-width: 1200px;
  }
</style>
