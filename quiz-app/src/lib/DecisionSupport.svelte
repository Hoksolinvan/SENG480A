<script>
  export let savedPrograms = []; // Accept savedPrograms as a prop
  let selectedPrograms = [];
  let currentProgram = null;

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

  function comparePrograms() {
    // Implement logic to compare the selected programs
    console.log("Comparing programs:", selectedPrograms);
  }
</script>

<div class="mt-8">
  <h2 class="text-2xl font-bold text-blue-900 mb-6">Compare Programs</h2>

  <!-- Select Programs Section -->
  <div class="mb-6">
    <h3 class="text-lg font-semibold mb-3">Select Programs to Compare</h3>
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
          {program.name} at {program.university}
        </button>
      {/each}
    </div>

    <!-- Program Details -->
    {#if currentProgram}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="col-span-1 md:col-span-2 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-lg text-blue-900 mb-4">{currentProgram.name} at {currentProgram.university}</h3>
          <div class="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div class="bg-gray-100 p-3 rounded-lg">
              <span class="font-medium text-gray-800">Location:</span> {currentProgram.location}
            </div>
            <div class="bg-gray-100 p-3 rounded-lg">
              <span class="font-medium text-gray-800">Degree:</span> {currentProgram.degreeType}
            </div>
          </div>
        </div>
      </div>
    {/if}
  {/if}

  <!-- Compare Button -->
  {#if selectedPrograms.length > 1}
    <button
      class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mt-4"
      on:click={comparePrograms}
    >
      Compare Programs
    </button>
  {/if}
</div>