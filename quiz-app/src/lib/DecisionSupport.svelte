<script>
  import { goto } from '$app/navigation';
  export let savedPrograms = []; // Accept savedPrograms as a prop
  let selectedPrograms = [];
  let currentProgram = null;

  // Calculate remaining days to the deadline
  function getRemainingTime(deadline) {
    const now = new Date();
    const timeLeft = new Date(deadline) - now;
    const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
    return daysLeft;
  }

  // Determine status based on days left
  function getStatus(daysLeft) {
    if (daysLeft <= 0) {
      return { label: "Deadline Passed", color: "text-red-600" };
    } else if (daysLeft <= 7) {
      return { label: `Due Soon (${daysLeft} days left)`, color: "text-yellow-600" };
    } else {
      return { label: `On Track (${daysLeft} days left)`, color: "text-green-600" };
    }
  }

  function toggleTrackProgram(program) {
    const existingIndex = selectedPrograms.findIndex(p => p.id === program.id);
    if (existingIndex === -1) {
      selectedPrograms = [...selectedPrograms, { ...program, isTracked: true }];
      currentProgram = selectedPrograms[selectedPrograms.length - 1];
    } else {
      selectedPrograms = selectedPrograms.filter(p => p.id !== program.id);
      currentProgram = selectedPrograms.length > 0 ? selectedPrograms[0] : null;
    }
  }

  function goBackToSearch() {
    goto('/search');
  }
</script>

<div class="mt-8">
  <!-- Back Button -->
  <button 
    class="mb-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-md"
    on:click={goBackToSearch}
  >
    Back to Search
  </button>

  <h2 class="text-2xl font-bold text-blue-900 mb-6">Track Programs</h2>

  <!-- Select Programs Section -->
  <div class="mb-6">
    <h3 class="text-lg font-semibold mb-3">Select Programs to Track Deadlines</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      {#each savedPrograms as program}
        <div class="flex items-center justify-between p-3 border rounded-lg bg-white">
          <div>
            <h4 class="font-medium text-blue-800">{program.name}</h4>
            <p class="text-sm text-gray-500">{program.university}</p>
          </div>
          <button
            class="px-3 py-1 rounded-md {selectedPrograms.some(p => p.id === program.id) ? 'bg-blue-500 text-white' : 'bg-gray-200'}"
            on:click={() => toggleTrackProgram(program)}
          >
            {selectedPrograms.some(p => p.id === program.id) ? 'Tracking' : 'Track'}
          </button>
        </div>
      {/each}
    </div>
  </div>

  <!-- Display Tracked Programs -->
  {#if selectedPrograms.length > 0}
    <div class="mb-4 flex gap-2 overflow-x-auto pb-2">
      {#each selectedPrograms as program}
        <button
          class="px-4 py-2 rounded-md whitespace-nowrap {currentProgram?.id === program.id ? 'bg-blue-500 text-white' : 'bg-gray-100'}"
          on:click={() => currentProgram = program}
        >
          {program.name}
        </button>
      {/each}
    </div>

    <!-- Program Deadline Details -->
    {#if currentProgram}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="col-span-1 md:col-span-2 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-lg text-blue-900 mb-4">{currentProgram.name} - Deadline Details</h3>
          <div class="grid grid-cols-1 gap-4 text-sm text-gray-600">
            <div class="bg-gray-100 p-3 rounded-lg">
              <span class="font-medium text-gray-800">Application Deadline:</span> {new Date(currentProgram.deadline).toLocaleDateString()}
            </div>
            <div class="bg-gray-100 p-3 rounded-lg">
              <span class="font-medium text-gray-800">Days Remaining:</span> {getRemainingTime(currentProgram.deadline)}
            </div>
            <div class={`font-semibold ${getStatus(getRemainingTime(currentProgram.deadline)).color}`}>
              {getStatus(getRemainingTime(currentProgram.deadline)).label}
            </div>
          </div>
        </div>
      </div>
    {/if}
  {/if}

  <!-- Compare Programs Button -->
  {#if selectedPrograms.length > 1}
    <div class="mt-6">
      <button
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        on:click={() => goto('/compare')}
      >
        Compare Selected Programs
      </button>
    </div>
  {/if}
</div>
