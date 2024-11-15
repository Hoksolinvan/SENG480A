<script>
  export let savedPrograms = [];
  let selectedPrograms = [];
  let currentProgram = null;

  function getRemainingTime(deadline) {
    const now = new Date();
    const timeLeft = new Date(deadline) - now;
    const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
    return daysLeft;
  }

  function getStatus(daysLeft) {
    if (daysLeft <= 0) {
      return { label: 'Deadline Passed', color: 'text-red-600' };
    } else if (daysLeft <= 7) {
      return { label: `Due Soon (${daysLeft} days left)`, color: 'text-yellow-600' };
    } else {
      return { label: `On Track (${daysLeft} days left)`, color: 'text-green-600' };
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
</script>

<div class="mt-8">
  <h2 class="text-2xl font-bold text-blue-900 mb-6">Deadline Monitoring Dashboard</h2>

  <h3 class="text-lg font-medium mb-4">Tracked Programs</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    {#each savedPrograms as program}
      <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
        <div>
          <h4 class="font-medium text-blue-800">{program.name}</h4>
          <p class="text-sm text-gray-500">{program.university}</p>
        </div>
        <button
          class="px-3 py-1 rounded-md {selectedPrograms.some(p => p.id === program.id) ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}"
          on:click={() => toggleTrackProgram(program)}
        >
          {selectedPrograms.some(p => p.id === program.id) ? 'Monitoring' : 'Monitor Deadline'}
        </button>
      </div>
    {/each}
  </div>

  {#if selectedPrograms.length > 0}
    <h3 class="text-lg font-medium mb-4">Current Program</h3>
    <div class="flex gap-4 overflow-x-auto pb-4 mb-6">
      {#each selectedPrograms as program}
        <button
          class="px-4 py-2 rounded-md whitespace-nowrap {currentProgram?.id === program.id ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}"
          on:click={() => currentProgram = program}
        >
          {program.name} - {program.university}
        </button>
      {/each}
    </div>

    {#if currentProgram}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="col-span-1 md:col-span-2 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-lg text-blue-900 mb-4">
            {currentProgram.name} - {currentProgram.university} Deadline Details
          </h3>
          <div class="grid grid-cols-1 gap-4 text-sm text-gray-600">
            <div class="bg-gray-100 p-3 rounded-lg flex items-center gap-2">
              <i class="fas fa-calendar-alt"></i>
              <span class="font-medium text-gray-800">
                Application Deadline: {new Date(currentProgram.deadline).toLocaleDateString()}
              </span>
            </div>
            <div class="bg-gray-100 p-3 rounded-lg flex items-center gap-2">
              <i class="fas fa-clock"></i>
              <span class="font-medium text-gray-800">Days Remaining:</span>
              <span class={getStatus(getRemainingTime(currentProgram.deadline)).color}>
                {getRemainingTime(currentProgram.deadline)}
              </span>
            </div>
            <div
              class="bg-gray-100 p-3 rounded-lg flex items-center gap-2 font-medium {getStatus(getRemainingTime(currentProgram.deadline)).color}"
            >
              {getStatus(getRemainingTime(currentProgram.deadline)).label}
            </div>
          </div>
        </div>
      </div>
    {/if}
  {/if}
</div>