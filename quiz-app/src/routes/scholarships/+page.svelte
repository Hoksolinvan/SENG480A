<script>
	import { onMount } from 'svelte';

	let searchQuery = '';
	let showUniversities = false;
	let savedPrograms = []; // Array to hold the loaded programs
	let selectedUniversity = null; // Track the currently selected university
	let availableScholarships = []; // Array to hold scholarships for the selected university
	let programs = []; // Define programs array
	let filters = { location: '' }; // Define filters object
	let filteredPrograms = '';
	let showPrograms = false;

	// Load saved programs from localStorage when the component mounts
	onMount(() => {
		const storedProgramsString = localStorage.getItem('myArray');
		const programsArray = storedProgramsString ? JSON.parse(storedProgramsString) : [];
		
		// Create a Set to ensure uniqueness based on university name
		const uniqueUniversities = new Set(programsArray.map(program => program.university));
		
		// Convert back to an array
		savedPrograms = Array.from(uniqueUniversities);
		console.log("Unique Universities:", savedPrograms); // Debugging output
	});

	// Sample scholarships data
	const scholarshipsData = [
		{
			university: 'University of Victoria',
			scholarships: [
				{ name: '50th Anniversary Education Entrance Scholarship', amount: '$1,000', description: 'For an academically outstanding student entering UVic’s Faculty of Education from a Canadian secondary school, college, or university.' },
				{ name: '50th Anniversary Engineering Entrance Scholarship', amount: '$1,000', description: 'For an outstanding student entering the Faculty of Engineering directly from a Canadian secondary school.' },
				{ name: '50th Anniversary Human and Social Development Entrance Scholarship', amount: '$5,000', description: 'For an outstanding student entering the Faculty of Social Science from a Canadian secondary school' },
				{ name: 'Clara Evelyn Wilson Scholarship', amount: 'Varies', description: 'For outstanding undergraduate students entering or continuing at UVic.' },
				{ name: 'Dr. Terence Gough Chemistry Scholarship', amount: 'Varies', description: 'For outstanding students entering, transferring, or continuing in the Department of Chemistry.' },
				{ name: "Faculty of Engineering and Computer Science: Dean's Entrance Scholarship", amount: 'Up to $2,500', description: 'For high-achieving students entering the Faculty of Engineering.' }
			]
		},
		{
			university: 'University of Alberta',
			scholarships: [
				{ name: 'Alberta Grant', amount: '$1,500', description: 'For an outstanding student entering the Faculty of Science directly from a Canadian secondary school.' }
			]
		},
	];

	// Update scholarships based on the search query
	$: {
		if (searchQuery.trim()) {
			const matchedUniversity = scholarshipsData.find(scholarship => 
				scholarship.university.toLowerCase().includes(searchQuery.toLowerCase())
			);
			availableScholarships = matchedUniversity ? matchedUniversity.scholarships : [];
		} else {
			availableScholarships = [];
		}
		
	}

	// Filter programs based on search query and location
	$: {
    filteredPrograms = scholarshipsData
        .filter(university =>
            // Filter by university name instead of scholarship name
            searchQuery.trim() === '' || university.university.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .flatMap(university =>
            university.scholarships.map(scholarship => ({
                ...scholarship,
                university: university.university
            }))
        );
}


	// Function to handle university selection
	function selectUniversity(university) {
		const selected = scholarshipsData.find(scholarship => scholarship.university === university);
		availableScholarships = selected ? selected.scholarships : [];
	}


	function toggleProgramList() {
    showPrograms = searchQuery.trim().length > 0 || filters.location.trim().length > 0;
  }

</script>



<main class="min-h-screen bg-gray-50">

 <div class="bg-gradient-to-br from-blue-900 to-blue-500 py-16">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-white text-center mb-8">
        Find Your Scholarship
      </h1>

      <!-- Main Search Bar -->
      <div class="max-w-4xl mx-auto space-y-6">
        <input
          type="text"
          on:input={toggleProgramList}
		  bind:value={searchQuery}
          placeholder="Search for Universities..."
          class="w-full px-6 py-4 text-lg rounded-2xl shadow-2xl focus:ring-4 
                 focus:ring-blue-300 focus:outline-none transition-all duration-300"
        />
        
		



        <!-- Filters Row -->
        <!-- <div class="grid  gap-4 w-900 mx-auto">
          <input
            type="text"
            placeholder="Location..."
            class="px-4 py-3 rounded-2xl shadow-lg focus:ring-4 focus:ring-blue-300 
                   focus:outline-none transition-all duration-300"
          />
          


          
        </div> -->
      </div>
    </div>
  </div>


  <div class="grid md:grid-cols-3 gap-8 mt-5 ml-3">
  <!-- Search Results -->
  {#if showPrograms}
    <div class="md:col-span-2">
      <h2 class="text-2xl font-semibold text-blue-900 mb-6">Search Results</h2>
      {#if filteredPrograms.length >= 0}
        <div class="grid gap-4 overflow-y-auto">
          {#each filteredPrograms as program}
            <div 
              class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all
                     cursor-pointer border-2 border-transparent hover:border-blue-200"
              on:click={() => selectProgram(program)}
            >
			<div>
              <h3 class="text-xl font-semibold text-blue-900">{program.name}</h3>
              <div class="text-gray-600 mt-2">{program.university}</div>
			</div>
			 <button 
        on:click={(event) => { event.stopPropagation(); saveProgram(program); }} 
        class="py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-900 transform hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out"
      >
        Save Program
      </button>

            </div> <!-- Closing tag for each program div -->
			
			
          {/each}
        </div>
      {:else}
        <div class="text-center py-12 bg-white rounded-xl">
          <p class="text-gray-500">No programs match your search criteria.</p>
        </div>
      {/if}
    </div>
  {/if} <!-- Closing tag for showPrograms if block -->
</div>



<main>
	<section id="search-section" class="mt-32 mb-20 max-w-7xl mx-auto">
		<h3 class="text-3xl font-bold mb-8 text-blue-900 text-center">Saved Scholarships</h3>
		
		<div class="grid md:grid-cols-2 gap-12">
			<!-- Selected Programs Panel -->
			<div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 w-full">
				<h2 class="text-2xl font-semibold mb-6 text-blue-900">Selected Universities</h2>
				{#if savedPrograms.length > 0}
					<ul class="space-y-2 max-h-96 overflow-y-auto">
						{#each savedPrograms as university}
							<li class="p-6 rounded-lg bg-gray-50 hover:bg-blue-50 cursor-pointer transition-colors duration-200 border border-gray-200" tabindex="0" on:click={() => selectUniversity(university)}>
								<p><strong>{university}</strong></p>
							</li>
						{/each}
					</ul>
				{:else}
					<p class="text-gray-500 text-center py-4">No programs match your criteria.</p>
				{/if}
			</div>

			<div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 w-full">
				<h2 class="text-2xl font-semibold mb-6 text-blue-900">Available Scholarships</h2>
				{#if availableScholarships.length > 0}
				<ul class="space-y-2 max-h-96 overflow-y-auto">
						{#each availableScholarships as scholarship}
							<li class="p-4 bg-gray-50 rounded-lg border border-gray-200">
								<div class="flex justify-between w-1000">
									<p><strong>{scholarship.name}</strong> ({scholarship.amount})</p>
									<!-- Add a button to toggle visibility of the description -->
									<button on:click={() => scholarship.showDescription = !scholarship.showDescription}>
										{scholarship.showDescription ? '↓' : '↑'} 
									</button>
								</div>
								{#if scholarship.showDescription}
									<br>
									<p class="text-sm text-gray-600">{scholarship.description}</p>
								{/if}
							</li>
						{/each}
					</ul>
				{:else}
					<p class="text-gray-500 text-center py-4">No scholarships available for this university.</p>
				{/if}
			</div>
		</div>
	</section>
</main>


<!-- Saved Programs Section -->
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


</main>