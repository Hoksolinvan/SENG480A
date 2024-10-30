<script>
  export let programs = [];

  // Helper function to calculate remaining time
  function getRemainingTime(deadline) {
    const now = new Date();
    const timeLeft = new Date(deadline) - now;
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    return daysLeft;
  }
</script>
{#if programs.length !== 0 }
<h2 class="text-2xl font-bold mb-6 text-blue-900">Application Deadlines</h2>
{#each programs as program}

  <div class="bg-white p-4 shadow rounded-lg border border-gray-200">
    
    <h3 class="text-lg font-semibold text-gray-700">{program.name}</h3>
    <p class="text-gray-500">Deadline: {program.deadline}</p>
    <p class="text-gray-600">Days Remaining: {getRemainingTime(program.deadline)}</p>

    <!-- Progress bar for time remaining -->
    <div class="w-full h-2 bg-gray-300 rounded mt-2 overflow-hidden">
      <div
        class="h-full bg-green-500"
        style="width: {Math.max(0, (getRemainingTime(program.deadline) / 30) * 100)}%"
      ></div>
    </div>
  </div>
{/each}
{/if}

