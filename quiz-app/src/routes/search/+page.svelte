<script>
  import { fade, fly } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import ProgramList from '$lib/ProgramList.js';
  
  let searchQuery = '';
  let filters = {
    location: '',
    degreeType: ''
  };

  let filteredPrograms = [];
  let selectedProgram = null;
  
  $: {
    filteredPrograms = ProgramList.filter(program =>
      (searchQuery.trim() || filters.location.trim()) &&
      (searchQuery.trim() === '' || program.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filters.location.trim() === '' || program.location.toLowerCase().includes(filters.location.toLowerCase()))
    );
  }
  
  function handleProgramSelect(program) {
    selectedProgram = program;
  }
  
  async function saveProgram() {
    if (selectedProgram) {
      const savedPrograms = JSON.parse(localStorage.getItem('savedPrograms') || '[]');
      if (!savedPrograms.some(p => p.id === selectedProgram.id)) {
        savedPrograms.push(selectedProgram);
        localStorage.setItem('savedPrograms', JSON.stringify(savedPrograms));
      }
      window.location.href = '/saved';
    }
  }
</script>

<div class="min-h-screen bg-gray-50" in:fade={{ duration: 300 }}>
  <!-- Hero Search Section -->
  <div class="bg-gradient-to-br from-blue-900 to-blue-500 py-16">
    <div class="max-w-7xl mx-auto px-4" in:fly={{ y: 20, duration: 600 }}>
      <h1 class="text-4xl font-bold text-white text-center mb-8">
        Find Your Perfect Program
      </h1>
      
      <div class="max-w-4xl mx-auto space-y-6">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Search for programs..."
          class="w-full px-6 py-4 text-lg rounded-2xl shadow-2xl focus:ring-4 
                 focus:ring-blue-300 focus:outline-none transition-all duration-300
                 transform hover:scale-[1.02]"
        />

        <!-- Location filter displayed as a text-input form -->
        <input
          type="text"
          bind:value={filters.location}
          placeholder="Location..."
          class="w-full px-6 py-4 text-lg rounded-2xl shadow-2xl focus:ring-4 
                 focus:ring-blue-300 focus:outline-none transition-all duration-300
                 transform hover:scale-[1.02]"
        />

        <!-- Uncomment and use below for check-box based location search -->
        <!--
        <div style="position: relative; display: inline-block;">
          <button onclick="myFunction()" id="dropbtn" class="bg-white px-4 py-3 rounded-2xl shadow-lg focus:ring-4 focus:ring-blue-300 
          focus:outline-none transition-all duration-300 w-full text-gray-400 text-lg">Location</button>
          <div id="myDropdown" class="locationList">
            {#each [["BC", ['Vancouver, BC', 'Victoria, BC', "Kelowna, BC"]], ["AB", ["Calgary, AB", "Edmonton, AB"]]] as location}
              <label class="locationBox">
                <input type="checkbox" value={location[0]} bind:group={filters.location} class="locBoxinput"> {location[0]}
                {#each location[1] as city}
                  <label class="locationBox">
                    <input type="checkbox" value={city} bind:group={filters.location} class="locBoxinput"> {city}
                  </label>
                {/each}
              </label>
            {/each}
          </div>
        </div>
        -->

      </div>
    </div>
  </div>
  
  <!-- Results Section -->
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Search Results -->
      {#if filteredPrograms.length > 0}
        <div class="md:col-span-2">
          <div class="grid gap-4">
            {#each filteredPrograms as program (program.id)}
              <div 
                in:fly={{ y: 20, duration: 300 }}
                class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all
                       cursor-pointer border-2 border-transparent hover:border-blue-200
                       transform hover:scale-[1.02]"
                on:click={() => handleProgramSelect(program)}
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
        </div>
      {/if}
      
      <!-- Selected Program Details -->
      {#if selectedProgram}
        <div 
          class="bg-white rounded-xl shadow-md p-6 h-fit sticky top-4"
          in:fly={{ x: 20, duration: 300 }}
        >
          <h2 class="text-2xl font-semibold text-blue-900 mb-6">Program Details</h2>
          <img 
            src={selectedProgram.url}
            alt={selectedProgram.university}
            class="w-full h-48 object-cover rounded-lg shadow-md mb-4
                   transform hover:scale-[1.02] transition-transform duration-300"
          />
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-blue-800">
              {selectedProgram.name}
            </h3>
            <p class="text-gray-600">{selectedProgram.university}</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-3 bg-blue-50 rounded-lg">
                <div class="text-sm text-gray-600">Location</div>
                <div class="font-medium">{selectedProgram.location}</div>
              </div>
              <div class="p-3 bg-blue-50 rounded-lg">
                <div class="text-sm text-gray-600">Degree Type</div>
                <div class="font-medium">{selectedProgram.degreeType}</div>
              </div>
              <div class="p-3 bg-blue-50 rounded-lg col-span-2">
                <div class="text-sm text-gray-600">Application Deadline</div>
                <div class="font-medium">{selectedProgram.deadline}</div>
              </div>
            </div>

            <button 
              on:click={saveProgram}
              class="w-full py-3 bg-blue-600 text-white rounded-lg font-medium 
                     hover:bg-blue-700 transform hover:scale-105 active:scale-95 
                     transition-all duration-200 ease-in-out"
            >
              Save Program
            </button>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
