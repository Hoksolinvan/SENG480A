<script>
  import { onMount } from 'svelte';
  import DecisionSupport from '$lib/DecisionSupport.svelte';
  import ProgramComparison from '$lib/ProgramComparison.svelte';
  import ProgramList from '$lib/ProgramList.js';
  
  // Flag to control program list visibility
  let showPrograms = false;

  // Function to toggle the visibility of the program list
  function toggleProgramList() {
    showPrograms = searchQuery.trim().length > 0 || filters.location.trim().length > 0;
  }

  let searchQuery = '';
  let computer_science = false;
  let business_administration = false;
  let psychology = false;
  let biology = false;
  let law = false;
  let programs = ProgramList;

  let filters = {
    location: '',
    degreeType: '',
  };

  let savedPrograms = [];
  let filteredPrograms = [];
  let selectedProgram = [];
  let email = '';
  let reminderMessage = '';
  let showComparison = false;
  let showSavedPrograms = false;

  $: {
  filteredPrograms = programs.filter(program =>
    (searchQuery.trim() !== '' || filters.location.trim() !== '') && // display if either field has content
    (searchQuery.trim() === '' || program.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (filters.location.trim() === '' || program.location.toLowerCase().includes(filters.location.toLowerCase()))
  );
}

  /* $: {
    filteredPrograms = programs.filter(program =>
      program.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.location === '' || program.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.degreeType === '' || program.degreeType === filters.degreeType) && (
        (!computer_science && !business_administration && !psychology && !biology && !law) ||
        (computer_science && program.name.toLowerCase() === 'computer science') ||
        (business_administration && program.name.toLowerCase() === 'business administration') ||
        (psychology && program.name.toLowerCase() === 'psychology') ||
        (biology && program.name.toLowerCase() === "biology") ||
        (law && program.name.toLowerCase() === "law")
      )
    );
  } */

  function selectProgram(program) {
    if (!selectedProgram.some(p => p.id === program.id)) {
      selectedProgram = [program].concat(selectedProgram);
    }
  }

  function saveProgram() {
    if (selectedProgram.length > 0) {
      if (!savedPrograms.some(p => p.id === selectedProgram[0].id)) {
        savedPrograms = [...savedPrograms, selectedProgram[0]];
      }
      sortSavedProgramsByDeadline();
    }
  }

  function sortSavedProgramsByDeadline() {
    savedPrograms.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  async function sendReminder() {
    try {
      const request = await fetch('https://seng480a-production.up.railway.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
        }),
      });

      if (request.ok) {
        reminderMessage = 'Reminder set successfully!';
        setTimeout(() => {
          reminderMessage = '';
        }, 3000);
      }
    } catch (error) {
      reminderMessage = 'Failed to set reminder. Please try again.';
    }
  }

  function clearSavedPrograms() {
    savedPrograms = [];
    selectedProgram = [];
  }

  function toggleComparison() {
    showComparison = !showComparison;
  }
</script>

<main class="min-h-screen bg-gray-50">
  <!-- Hero Search Section -->
  <div class="bg-gradient-to-br from-blue-900 to-blue-500 py-16">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-white text-center mb-8">
        Find Your Perfect Program
      </h1>
      
      <!-- Main Search Bar -->
      <div class="max-w-4xl mx-auto space-y-6">
        <input
          type="text"
          bind:value={searchQuery}  
          on:input={toggleProgramList}
          placeholder="Search for programs..."
          class="w-full px-6 py-4 text-lg rounded-2xl shadow-2xl focus:ring-4 
                 focus:ring-blue-300 focus:outline-none transition-all duration-300"
        />
        
        <!-- Filters Row -->
        <div class="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            bind:value={filters.location}
            placeholder="Location..."
            class="px-4 py-3 rounded-2xl shadow-lg focus:ring-4 focus:ring-blue-300 
                   focus:outline-none transition-all duration-300"
          />
          
          <select 
            bind:value={filters.degreeType}
            class="px-4 py-3 rounded-2xl shadow-lg focus:ring-4 focus:ring-blue-300 
                   focus:outline-none transition-all duration-300 bg-white"
          >
            <option value="">All Degree Types</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  
  
  <!-- Program Type Filters -->
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- <div class="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 class="text-lg font-semibold text-blue-900 mb-4">Program Types</h3>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <label class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
          <input type="checkbox" bind:checked={computer_science} class="w-4 h-4 text-blue-600" />
          <span class="font-medium">Computer Science 🖥️</span>
        </label>
        <label class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
          <input type="checkbox" bind:checked={business_administration} class="w-4 h-4 text-blue-600" />
          <span class="font-medium">Business 📈</span>
        </label>
        <label class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
          <input type="checkbox" bind:checked={psychology} class="w-4 h-4 text-blue-600" />
          <span class="font-medium">Psychology 🧠</span>
        </label>
        <label class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
          <input type="checkbox" bind:checked={biology} class="w-4 h-4 text-blue-600" />
          <span class="font-medium">Biology 🔬</span>
        </label>
        <label class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
          <input type="checkbox" bind:checked={law} class="w-4 h-4 text-blue-600" />
          <span class="font-medium">Law ⚖️</span>
        </label>
      </div>
    </div> -->

    <!-- Results Section -->
    
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Search Results -->
      {#if showPrograms}
      <div class="md:col-span-2">
        <h2 class="text-2xl font-semibold text-blue-900 mb-6">Search Results</h2>
        {#if filteredPrograms.length > 0}
          <div class="grid gap-4">
            {#each filteredPrograms as program}
              <div 
                class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all
                       cursor-pointer border-2 border-transparent hover:border-blue-200"
                on:click={() => selectProgram(program)}
              >
                <h3 class="text-xl font-semibold text-blue-900">{program.name}</h3>
                <div class="text-gray-600 mt-2">{program.university}</div>
                <div class="mt-2 flex items-center gap-4">
                  <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {program.location}
                  </span>
                  <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {program.degreeType}
                  </span>
                </div>
              </div>
            {/each}
          </div>
        {:else}
          <div class="text-center py-12 bg-white rounded-xl">
            <p class="text-gray-500">No programs match your search criteria.</p>
          </div>
        {/if}
      </div>
    {/if}
      <!-- Selected Program Details -->
      {#if selectedProgram.length > 0}
        <div class="bg-white rounded-xl shadow-md p-6 h-fit sticky top-4">
          <h2 class="text-2xl font-semibold text-blue-900 mb-6">Program Details</h2>
          <div class="space-y-4">
            <img 
              src={selectedProgram[0].url}
              alt={selectedProgram[0].university}
              class="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 class="text-xl font-semibold text-blue-800">
              {selectedProgram[0].name}
            </h3>
            <p class="text-gray-600">{selectedProgram[0].university}</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-3 bg-blue-50 rounded-lg">
                <div class="text-sm text-gray-600">Location</div>
                <div class="font-medium">{selectedProgram[0].location}</div>
              </div>
              <div class="p-3 bg-blue-50 rounded-lg">
                <div class="text-sm text-gray-600">Degree Type</div>
                <div class="font-medium">{selectedProgram[0].degreeType}</div>
              </div>
              <div class="p-3 bg-blue-50 rounded-lg col-span-2">
                <div class="text-sm text-gray-600">Application Deadline</div>
                <div class="font-medium">{selectedProgram[0].deadline}</div>
              </div>
            </div>

            <button 
                on:click={saveProgram}
                class="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-900 transform hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out"
            >
              Save Program
            </button>

            <!-- Reminder Section -->
            <div class="space-y-3">
              <input
                type="email"
                bind:value={email}
                placeholder="Your email for deadline reminder"
                class="w-full px-4 py-3 rounded-lg border-2 border-blue-100 
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <button 
                on:click={sendReminder}
                class="w-full py-3 bg-green-600 text-white rounded-lg font-medium
                       hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
              >
                Set Reminder
              </button>
            </div>

            {#if reminderMessage}
              <div class="p-3 bg-green-100 text-green-700 rounded-lg text-center">
                {reminderMessage}
              </div>
            {/if}
          </div>
        </div>
      {/if}
    </div>

    <!-- Saved Programs Section -->
    {#if savedPrograms.length > 0}
      <div class="mt-12">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold text-blue-900">Saved Programs</h2>
          <button 
            class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 
                   transition-colors duration-200"
            on:click={clearSavedPrograms}
          >
            Clear All
          </button>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          {#each savedPrograms as program}
            <div class="bg-white p-6 rounded-xl shadow-md">
              <h3 class="font-semibold text-blue-900">{program.name}</h3>
              <p class="text-gray-600">{program.university}</p>
              <p class="text-sm text-gray-500 mt-2">
                <strong>Deadline:</strong> {program.deadline}
              </p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Decision Support Section -->
      <div class="mt-12">
        <DecisionSupport {savedPrograms} />
      </div>

      <!-- Program Comparison Section -->
      <div class="mt-12">
        <button 
          class="w-full py-4 bg-blue-600 text-white rounded-xl font-medium
                 hover:bg-blue-700 transition-colors duration-200"
          on:click={toggleComparison}
        >
          {showComparison ? 'Hide Comparison' : 'Compare Programs'}
        </button>
        
        {#if showComparison}
          <div class="mt-6">
            <ProgramComparison {selectedProgram} />
          </div>
        {/if}
      </div>
    {/if}
  </div>
</main>