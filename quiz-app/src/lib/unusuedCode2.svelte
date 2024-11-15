<!-- timeline support -->
<script>
  export let programs = [];

  // Helper function to calculate remaining time
  function getRemainingTime(deadline) {
    const now = new Date();
    const timeLeft = new Date(deadline) - now;
    const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
    return daysLeft;
  }

  // Function to determine urgency level and style based on days left
  function getStatus(daysLeft) {
    if (daysLeft <= 0) {
      return { label: "Deadline Passed", color: "text-red-600" };
    } else if (daysLeft <= 7) {
      return { label: `Due Soon (${daysLeft} days left)`, color: "text-yellow-600" };
    } else {
      return { label: `On Track (${daysLeft} days left)`, color: "text-green-600" };
    }
  }
</script>

{#if programs.length !== 0}
<h2 class="text-2xl font-bold mb-6 text-blue-900">Application Deadlines</h2>
{#each programs as program}
  <div class="bg-white p-4 shadow rounded-lg border border-gray-200 mb-4">
    <h3 class="text-lg font-semibold text-gray-700">{program.name}</h3>
    <p class="text-gray-500">Deadline: {new Date(program.deadline).toLocaleDateString()}</p>

    <!-- Display Days Remaining if the deadline is not passed -->
    {#if getRemainingTime(program.deadline) > 0}
      <p class="text-gray-600">Days Remaining: {getRemainingTime(program.deadline)}</p>
    {/if}
    
    <!-- Status Message with Color Coding -->
    <p class="{getStatus(getRemainingTime(program.deadline)).color} font-semibold">
      {getStatus(getRemainingTime(program.deadline)).label}
    </p>
  </div>
{/each}
{/if}
