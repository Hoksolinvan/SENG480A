<!-- Benchmark 1: Basic search with left/right layout 
    Things will change once we implement additional functionality -->

<script>
  let searchQuery = '';
  let programs = [
    { id: 1, name: 'Computer Science', university: 'University of Victoria' },
    { id: 2, name: 'Business Administration', university: 'University of British Columbia' },
    { id: 3, name: 'Environmental Science', university: 'McGill University' },
  ];

  let filteredPrograms = programs;

  $: filteredPrograms = programs.filter(program => 
    program.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
</script>

<main class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-6">College Program Search</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Left Side: Search and Results -->
    <div class="bg-gray-100 p-4 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Search Programs</h2>
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search for programs..."
        class="w-full p-2 border rounded mb-4"
      />

      <ul>
        {#each filteredPrograms as program}
          <li class="mb-2">
            {program.name} at {program.university}
          </li>
        {/each}
      </ul>
    </div>

    <!-- Right Side: Placeholder for future functionality -- Program related info-->
    <div class="bg-gray-100 p-4 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Program Information</h2>
      <p>Details will appear here once a program is selected (Not yet functional).</p>
    </div>
  </div>
</main>

<style>
  /* CSS styles */
</style>
