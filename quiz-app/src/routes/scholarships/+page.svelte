<script>
    let searchQuery = '';
    let DropDown = {};
    let programCollection = []; // Array to hold added scholarships
    let scholarshipsData = []; // All scholarships data fetched from the server
    let isOpen = false;
    let isLoading = true; // Loading state for scholarships
    let contentArray = {

		"High school" : false,
		"Continuing Undergraduate" : false,
		"Gender" : false,
		"Merit-based" : false,
		"EDI" : false,
		"All faculties" : false,
		"Engineering" : false,
		"Science" : false,
		"Art" : false,
		"Business" : false,
		"Health" : false,
		"Education" : false,
		"Humanities" : false,
		"Social Science" : false,
		"Sports Scholarship" : false,
		"Others" : false



	};




    // Toggle DropDown
    const handleDropDown = (id) => {
        DropDown = {
            ...DropDown,
            [id]: !DropDown[id]
        }
    };

    // Add selected scholarship to programCollection
    const ProgramCollectionHandler = (scholarship_param) => {
        if (!programCollection.includes(scholarship_param)) { 
            programCollection = [...programCollection, scholarship_param];
        }
    };

   

    // Fetch Scholarships Data
    async function get_scholarships() {
        try {
            const request = await fetch('https://seng480a-production.up.railway.app/scholarships', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (request.ok) {
                const result = await request.json();
                scholarshipsData = result; // Assign fetched data directly
                initializeDropdownStates(result);
            } else {
                console.error('Error Fetching Scholarships', request.statusText);
            }
        } catch (error) {
            console.log("Failed to fetch scholarships");
        } finally {
            isLoading = false; // Ensure UI knows loading is complete
        }
    }

    function initializeDropdownStates(data) {
        DropDown = data.reduce((acc, scholarship) => {
            acc[scholarship.id] = false; 
            return acc;
        }, {});
    }

   

    $: filteredScholarships = scholarshipsData.filter(scholarship => {
  const matchesQuery = searchQuery
    ? scholarship.university.toLowerCase().includes(searchQuery.toLowerCase())
    : true;

  const matchesClassification = Object.entries(contentArray).every(([key, value]) => {
    
    return !value || scholarship.classification.toLowerCase().includes(key.toLowerCase());
  });

  return matchesQuery && matchesClassification;
});


	
    function toggleMode() {
		isOpen = !isOpen;
    }

	function toggleSelections(key, event) {
    contentArray[key] = !contentArray[key]; // Update the object based on checkbox state
  }

    // Fetch scholarships on load
    get_scholarships();
</script>

<main class="min-h-screen bg-gray-50">
    <div class="bg-gradient-to-br from-blue-900 to-blue-500 py-16">
		<div class="max-w-7xl mx-auto px-4">
		  <div class="max-w-4xl mx-auto space-y-6">
			<h1 class="text-4xl font-bold text-white text-center mb-8">
			  Find your Scholarships
			</h1>
			<div class="flex items-center space-x-4 relative">
			  <!-- Search Input -->
			  <input
				type="text"
				bind:value={searchQuery}
				placeholder="Search for a university..."
				class="w-full px-6 py-4 text-lg rounded-2xl shadow-2xl focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300 transform hover:scale-[1.02]"
			  />
	  
			  <!-- Filter Icon -->
			  <img
				src="/filter.png"
				class="w-10 cursor-pointer hover:scale-[1.02]"
				on:click={toggleMode}
			  />
	  
			  <!-- Dropdown Menu -->
			  {#if isOpen}
				<div
				  class="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md border p-4 z-10"
				  style="width: 100%;"
				>
				  <h3 class="text-lg font-bold mb-2">Filter Options</h3>
				  <ul>
					{#each Object.entries(contentArray) as [key,value]}
					  <li>
						<label class="flex items-center space-x-2">
						  <input
							type="checkbox"
							on:change = {(event) => toggleSelections(key,event)}
							checked={value}
						  />
						  <span>{key}</span>
						</label>
					  </li>
					{/each}
				  </ul>
				</div>
			  {/if}
			</div>
		  </div>
		</div>
	  </div>
	  

    <!-- Display Scholarships -->
    <div class="p-4">
        {#if isLoading}
            <div>Loading scholarships...</div>
        {:else if filteredScholarships.length === 0}
            <div>No scholarships found.</div>
        {:else}
            <h2 class="text-2xl font-bold text-blue-900 mb-4">Available Scholarships</h2>
            <div
                class="max-h-[500px] overflow-y-auto bg-gray-100 p-4 rounded-lg shadow-inner border border-gray-300">
                {#each filteredScholarships as scholarship}
                    <div class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-blue-200 transform hover:scale-[1.02] mb-4">
                        <h3 class="text-xl font-semibold text-blue-900">{scholarship.scholarship_name}</h3>
                        <div class="mt-2 text-gray-600">{scholarship.university}</div>
                        <div class="mt-4">
                            <button
                                class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                                on:click={() => handleDropDown(scholarship.id)}>
                                {#if DropDown[scholarship.id]}
                                    Hide Details
                                {:else}
                                    Show More Details
                                {/if}
                            </button>
                        </div>
                        {#if DropDown[scholarship.id]}
                            <div class="mt-4 text-gray-600 max-h-40 overflow-y-auto p-2 border rounded-lg">
                                <p><b>Scholarship Description:</b> {scholarship.description}</p>
                                <p><b>Value:</b> {scholarship.value}</p>
                                <p><b>Classification:</b> {scholarship.classification}</p>
                                <p><b>University:</b> {scholarship.university}</p>
                                <div class="mt-2 text-blue-800 font-semibold underline cursor-pointer"
                                    on:click={() => ProgramCollectionHandler(scholarship)}>
                                    Add to Collection
                                </div>
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</main>
