<script>
  let searchQuery = '';
  let programs = [
    { id: 1, name: 'Computer Science', university: 'University of Victoria', location: 'Victoria, BC', tuition: 50000, duration: 4, admissionRate: 25, deadline: '2024-12-01' },
    { id: 2, name: 'Business Administration', university: 'University of British Columbia', location: 'Vancouver, BC', tuition: 45000, duration: 4, admissionRate: 35, deadline: '2024-11-15' },
    { id: 3, name: 'Environmental Science', university: 'McGill University', location: 'Montreal, QC', tuition: 40000, duration: 3, admissionRate: 40, deadline: '2024-10-30' },
    { id: 4, name: 'Mechanical Engineering', university: 'University of Waterloo', location: 'Waterloo, ON', tuition: 55000, duration: 4, admissionRate: 30, deadline: '2024-12-05' },
    { id: 5, name: 'Psychology', university: 'University of Alberta', location: 'Edmonton, AB', tuition: 35000, duration: 4, admissionRate: 45, deadline: '2024-11-30' },
    { id: 6, name: 'Law', university: 'University of Toronto', location: 'Toronto, ON', tuition: 60000, duration: 3, admissionRate: 20, deadline: '2024-12-20' },
    { id: 7, name: 'Biology', university: 'Simon Fraser University', location: 'Burnaby, BC', tuition: 32000, duration: 4, admissionRate: 50, deadline: '2024-11-25' },
    { id: 8, name: 'Environmental Engineering', university: 'University of Calgary', location: 'Calgary, AB', tuition: 52000, duration: 4, admissionRate: 35, deadline: '2024-12-10' },
    { id: 9, name: 'Political Science', university: 'University of British Columbia', location: 'Vancouver, BC', tuition: 38000, duration: 4, admissionRate: 30, deadline: '2024-11-20' },
    { id: 10, name: 'Sociology', university: 'University of Alberta', location: 'Edmonton, AB', tuition: 30000, duration: 4, admissionRate: 55, deadline: '2024-12-05' },
    { id: 11, name: 'Fine Arts', university: 'Emily Carr University of Art + Design', location: 'Vancouver, BC', tuition: 28000, duration: 4, admissionRate: 60, deadline: '2024-12-01' },
    { id: 12, name: 'Nursing', university: 'University of Calgary', location: 'Calgary, AB', tuition: 34000, duration: 4, admissionRate: 40, deadline: '2024-11-10' },
    { id: 13, name: 'Pharmacy', university: 'University of Alberta', location: 'Edmonton, AB', tuition: 46000, duration: 4, admissionRate: 25, deadline: '2024-12-15' },
    { id: 14, name: 'Architecture', university: 'University of British Columbia', location: 'Vancouver, BC', tuition: 58000, duration: 4, admissionRate: 15, deadline: '2024-12-25' },
    { id: 15, name: 'Data Science', university: 'Simon Fraser University', location: 'Burnaby, BC', tuition: 49000, duration: 4, admissionRate: 20, deadline: '2024-12-05' },
    { id: 16, name: 'Economics', university: 'University of Calgary', location: 'Calgary, AB', tuition: 40000, duration: 4, admissionRate: 40, deadline: '2024-12-10' },
    { id: 17, name: 'Physics', university: 'University of Victoria', location: 'Victoria, BC', tuition: 35000, duration: 4, admissionRate: 50, deadline: '2024-11-20' },
    { id: 18, name: 'Anthropology', university: 'University of Alberta', location: 'Edmonton, AB', tuition: 31000, duration: 4, admissionRate: 45, deadline: '2024-11-25' },
    { id: 19, name: 'Mathematics', university: 'Simon Fraser University', location: 'Burnaby, BC', tuition: 37000, duration: 4, admissionRate: 35, deadline: '2024-11-15' },
    { id: 20, name: 'International Relations', university: 'University of British Columbia', location: 'Vancouver, BC', tuition: 42000, duration: 4, admissionRate: 20, deadline: '2024-11-25' },
    { id: 21, name: 'Public Health', university: 'University of Calgary', location: 'Calgary, AB', tuition: 52000, duration: 4, admissionRate: 35, deadline: '2024-12-01' },
    { id: 22, name: 'Philosophy', university: 'University of Victoria', location: 'Victoria, BC', tuition: 31000, duration: 4, admissionRate: 50, deadline: '2024-12-10' },
    { id: 23, name: 'Chemistry', university: 'University of Alberta', location: 'Edmonton, AB', tuition: 39000, duration: 4, admissionRate: 40, deadline: '2024-12-20' },
    { id: 24, name: 'Electrical Engineering', university: 'University of British Columbia', location: 'Vancouver, BC', tuition: 57000, duration: 4, admissionRate: 25, deadline: '2024-11-30' },
    { id: 25, name: 'Marketing', university: 'University of Victoria', location: 'Victoria, BC', tuition: 44000, duration: 4, admissionRate: 30, deadline: '2024-11-25' }
  ];

  let filters = {
    location: '',
    maxTuition: 100000,
  };

  let savedPrograms = [];
  let filteredPrograms = programs;
  let selectedProgram = null;
  let email = '';

  $: filteredPrograms = programs.filter(program => 
    program.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filters.location === '' || program.location.toLowerCase().includes(filters.location.toLowerCase())) &&
    program.tuition <= filters.maxTuition
  );

  function selectProgram(program) {
    selectedProgram = program;
  }

  async function sendReminder() {
    if (email && selectedProgram) {
      const reminderData = {
        email: email,
        program: selectedProgram
      };

      try {
        const response = await fetch('https://example.com/api/reminders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(reminderData)
        });

        if (response.ok) {
          alert(`Reminder set for ${selectedProgram.name}. Email will be sent to ${email}.`);
        } else {
          const errorText = await response.text();
          console.error('Failed to set reminder:', errorText);
          alert('Failed to set reminder. Please try again later.');
        }
      } catch (error) {
        console.error('Error setting reminder:', error);
        alert('An error occurred while setting the reminder. Please try again.');
      }

      email = '';
    }
  }
</script>

<main class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-6">College Program Planner</h1>

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

      {#if filteredPrograms.length > 0}
        <ul>
          {#each filteredPrograms as program}
            {#if searchQuery || filters.location || filters.maxTuition < 100000}
              <li class="mb-2 cursor-pointer hover:bg-gray-200 p-2 rounded" on:click={() => selectProgram(program)}>
                {program.name} at {program.university}
              </li>
            {/if}
          {/each}
        </ul>
      {:else}
        <p>No programs to display. Please enter a search query or adjust the filters.</p>
      {/if}
    </div>

    <!-- Right Side: Show Selected Program -->
    <div class="bg-gray-100 p-4 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Program Information</h2>
      {#if selectedProgram}
        <h3>{selectedProgram.name} at {selectedProgram.university}</h3>
        <p>Location: {selectedProgram.location}</p>
        <p>Tuition: ${selectedProgram.tuition}</p>
        <p><strong>Application Deadline:</strong> {selectedProgram.deadline}</p>

        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save to My Programs
        </button>

        <!-- Set Reminder Section -->
        <h4 class="mt-4">Set Reminder</h4>
        <input
          type="email"
          bind:value={email}
          placeholder="Your email address"
          class="w-full p-2 border rounded mb-2"
        />
        <button on:click={sendReminder} class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Set Reminder
        </button>
      {:else}
        <p>Select a program to view details.</p>
      {/if}
    </div>
  </div>

  <!-- Saved Programs Section -->
  <div class="mt-8">
    <h2 class="text-xl font-semibold mb-4">My Saved Programs</h2>
    {#if savedPrograms.length > 0}
      <ul>
        {#each savedPrograms as program}
          <li class="mb-2">{program.name} at {program.university}</li>
        {/each}
      </ul>
    {:else}
      <p>You haven't saved any programs yet.</p>
    {/if}
  </div>
</main>

<style>
  /* Add styles here */
</style>
