<!-- Added working filters and simple selection functionality -->

<script>
  let searchQuery = '';
  let programs = [
    { id: 1, name: 'Computer Science', university: 'University of Victoria', location: 'Victoria', tuition: 50000 },
    { id: 2, name: 'Business Administration', university: 'University of British Columbia', location: 'Vancouver', tuition: 45000 },
    { id: 3, name: 'Environmental Science', university: 'McGill University', location: 'Montreal', tuition: 40000 },
  ];

  let filters = {
    location: '',
    maxTuition: 100000,
  };

  let filteredPrograms = programs;
  let selectedProgram = null;

  $: filteredPrograms = programs.filter(program => 
    program.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filters.location === '' || program.location.toLowerCase().includes(filters.location.toLowerCase())) &&
    program.tuition <= filters.maxTuition
  );

  function selectProgram(program) {
    selectedProgram = program;
  }
</script>

<main class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-6">College Program Search</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Left Side: Search and Filters -->
    <div class="bg-gray-100 p-4 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Search and Filter Programs</h2>
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search for programs..."
        class="w-full p-2 border rounded mb-4"
      />
      <input
        type="text"
        bind:value={filters.location}
        placeholder="Filter by location..."
        class="w-full p-2 border rounded mb-4"
      />
      <div>
        <label for="maxTuition">Max Tuition: ${filters.maxTuition}</label>
        <input
          type="range"
          bind:value={filters.maxTuition}
          min="0"
          max="100000"
          step="1000"
          class="w-full"
        />
      </div>

      <ul>
        {#each filteredPrograms as program}
          <li class="mb-2 cursor-pointer hover:bg-gray-200 p-2 rounded" on:click={() => selectProgram(program)}>
            {program.name} at {program.university}
          </li>
        {/each}
      </ul>
    </div>

    <!-- Right Side: Show Selected Program -->
    <div class="bg-gray-100 p-4 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Program Information</h2>
      {#if selectedProgram}
        <h3>{selectedProgram.name} at {selectedProgram.university}</h3>
        <p>Location: {selectedProgram.location}</p>
        <p>Tuition: ${selectedProgram.tuition}</p>
      {:else}
        <p>Select a program to view details.</p>
      {/if}
    </div>
  </div>
</main>

<style>
  /* Harry, you can add some styles */
</style>
