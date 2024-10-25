<script>
  import TimelineDashboard from './TimelineDashboard.svelte';
  export let savedPrograms = []; // Receive saved programs as a prop
  
  let trackedPrograms = [];
  let currentProgram = null;
  let newPro = '';  // Separate state for Pros
  let newCon = '';  // Separate state for Cons

  function toggleTracking(program) {
    const existingIndex = trackedPrograms.findIndex(p => p.id === program.id);
    
    if (existingIndex === -1) {
      const programWithDecisionSupport = {
        ...program,
        pros: [],
        cons: [],
        notes: '',
        isTracked: true
      };
      trackedPrograms = [...trackedPrograms, programWithDecisionSupport];
      currentProgram = programWithDecisionSupport;
    } else {
      trackedPrograms = trackedPrograms.filter(p => p.id !== program.id);
      currentProgram = trackedPrograms[0] || null;
    }
  }

  function addPro() {
    if (newPro.trim() && currentProgram) {
      currentProgram.pros = [...(currentProgram.pros || []), newPro];
      trackedPrograms = [...trackedPrograms];
      newPro = '';  // Clear the input field after adding
    }
  }

  function addCon() {
    if (newCon.trim() && currentProgram) {
      currentProgram.cons = [...(currentProgram.cons || []), newCon];
      trackedPrograms = [...trackedPrograms];
      newCon = '';  // Clear the input field after adding
    }
  }

  function removeItem(array, index) {
    array.splice(index, 1);
    trackedPrograms = [...trackedPrograms];
  }

  function updateNotes(event) {
    if (currentProgram) {
      currentProgram.notes = event.target.value;
      trackedPrograms = [...trackedPrograms];
    }
  }
</script>

<div class="mt-8">
  <h2 class="text-2xl font-bold mb-6">Compare Programs</h2>
  
  <div class="mb-6">
    <h3 class="text-lg font-semibold mb-3">Select Programs to Compare</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      {#each savedPrograms as program}
        <div class="flex items-center justify-between p-3 border rounded-lg {trackedPrograms.some(p => p.id === program.id) ? 'bg-blue-50 border-blue-500' : 'bg-white'}">
          <div>
            <h4 class="font-medium">{program.name}</h4>
            <p class="text-sm text-gray-600">{program.university}</p>
          </div>
          <button
            class="px-3 py-1 rounded-md {trackedPrograms.some(p => p.id === program.id) ? 'bg-blue-500 text-white' : 'bg-gray-100'}"
            on:click={() => toggleTracking(program)}
          >
            {trackedPrograms.some(p => p.id === program.id) ? 'Tracking' : 'Track'}
          </button>
        </div>
      {/each}
    </div>
  </div>

  {#if trackedPrograms.length > 0}
    <div class="mb-4 flex gap-2 overflow-x-auto pb-2">
      {#each trackedPrograms as program}
        <button
          class="px-4 py-2 rounded-md whitespace-nowrap {currentProgram?.id === program.id ? 'bg-blue-500 text-white' : 'bg-gray-100'}"
          on:click={() => currentProgram = program}
        >
          {program.name} at {program.university}
        </button>
      {/each}
    </div>

    {#if currentProgram}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Program Info -->
        <div class="col-span-1 md:col-span-2 bg-gray-50 p-4 rounded-lg">
          <h3 class="font-semibold mb-2">{currentProgram.name} at {currentProgram.university}</h3>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>Location: {currentProgram.location}</div>
            <div>Degree: {currentProgram.degreeType}</div>
            <div>Admission Rate: {currentProgram.admissionRate}%</div>
            <div>Deadline: {new Date(currentProgram.deadline).toLocaleDateString()}</div>
          </div>
        </div>

        <!-- Pros Column -->
        <div class="bg-green-50 p-4 rounded-lg">
          <h3 class="font-semibold mb-4">Pros</h3>
          <div class="space-y-2">
            {#each currentProgram.pros || [] as pro, i}
              <div class="flex items-center gap-2">
                <span class="flex-grow">{pro}</span>
                <button
                  class="text-red-500"
                  on:click={() => removeItem(currentProgram.pros, i)}
                >
                  ×
                </button>
              </div>
            {/each}
          </div>
          <div class="mt-4 flex gap-2">
            <input
              type="text"
              bind:value={newPro}
              placeholder="Add a pro..."
              class="flex-grow p-2 border rounded-md"
            />
            <button
              on:click={addPro}
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>

        <!-- Cons Column -->
        <div class="bg-red-50 p-4 rounded-lg">
          <h3 class="font-semibold mb-4">Cons</h3>
          <div class="space-y-2">
            {#each currentProgram.cons || [] as con, i}
              <div class="flex items-center gap-2">
                <span class="flex-grow">{con}</span>
                <button
                  class="text-red-500"
                  on:click={() => removeItem(currentProgram.cons, i)}
                >
                  ×
                </button>
              </div>
            {/each}
          </div>
          <div class="mt-4 flex gap-2">
            <input
              type="text"
              bind:value={newCon}
              placeholder="Add a con..."
              class="flex-grow p-2 border rounded-md"
            />
            <button
              on:click={addCon}
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>

        <!-- Notes Section -->
        <div class="col-span-1 md:col-span-2 bg-gray-50 p-4 rounded-lg">
          <h3 class="font-semibold mb-4">Notes</h3>
          <textarea
            value={currentProgram.notes}
            on:input={updateNotes}
            class="w-full h-32 p-2 border rounded-md"
            placeholder="Add any additional notes about this program..."
          />
        </div>
      </div>
    {/if}
  {:else}
    <div class="text-center py-8 text-gray-600">
      Select programs to compare by clicking the "Track" button above
    </div>
  {/if}
</div>

<!-- Integrating the TimelineDashboard for tracked programs -->
<section>
  <h2>Your Program Timeline</h2>
  <TimelineDashboard programs={trackedPrograms} />
</section>
