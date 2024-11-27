<script>
  import { savedPrograms } from '$lib/savedPrograms';
  import { goto } from '$app/navigation';
  
  // User profile data
  let user = {
      name: "Avery Thompson",
      email: "demo@easypath.ca",
      profilePic: "/static/default-profile-pic.png",
  };

  //scholarship data
  let scholarshipsData=[];
  
  // Subscribe to saved programs
  
   let programs;
   savedPrograms.subscribe((value) => {
    programs = value;
    });
  
  function navigateTo(route) {
      goto(route);
  }
  
  function removeProgram(programId) {
      savedPrograms.remove(programId);
  }
  
  // Optional: Format date function
  function formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
      });
  }


  async function get_scholarships() {
        try {
            const request = await fetch('https://seng480a-production.up.railway.app/temp_scholarships', {
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


    get_scholarships();
  </script>
  
  <div class="col-span-2 rounded-lg p-6 w-[75%] max-w-4xl mx-auto">



      <!-- Profile Section -->
      <!-- <div class="col-span-1 bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 mb-4">
              <img
                  src="https://ui-avatars.com/api/?name=Avery+Thompson&background=random"
                  alt="Profile Picture"
                  class="w-32 h-32 rounded-full object-cover"
              />
          </div>
          <h2 class="text-xl font-semibold text-gray-800">{user.name}</h2>
            
          commented out for now
          <button
              class="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              on:click={() => navigateTo('#')}
          >
              Edit Profile
          </button> 
      </div> -->
  
      <!-- Interactive Elements -->
      <div class="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div class="grid grid-cols-2 gap-4 mb-8">
              <button
                  class="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                  on:click={() => navigateTo('compare')}
              >
                  Compare Programs
              </button>
              <button
                  class="bg-green-500 text-white py-3 px-6 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
                  on:click={() => navigateTo('deadlines')}
              >
                  Check Deadlines
              </button>
              <button
                  class="bg-purple-500 text-white py-3 px-6 rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
                  on:click={() => navigateTo('checklist')}
              >
                  Check Eligibility
              </button>
              <button
                  class="bg-yellow-500 text-white py-3 px-6 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300"
                  on:click={() => navigateTo('documents')}
              >
                  Manage Documents
              </button>
          </div>
  
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Saved Programs</h2>
          <div class="space-y-4">
              {#if programs && programs.length > 0}
                  {#each programs as program (program.id)}
                      <div class="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
                          <div class="flex justify-between items-center">
                              <div class="flex gap-4">
                                  <img
                                      src={program.url}
                                      alt={program.university}
                                      class="w-16 h-16 object-cover rounded"
                                  />
                                  <div>
                                      <h3 class="text-lg font-semibold text-gray-800">{program.name}</h3>
                                      <p class="text-sm text-gray-600">{program.university}</p>
                                      <p class="text-sm text-gray-600">
                                          Deadline: {formatDate(program.deadline)}
                                      </p>

                                      <!-- no need for these for now
                                      <p class="text-sm text-gray-600">
                                          {program.degreeType} • ${program.cost.toLocaleString()} /year
                                      </p> -->
                                  </div>
                              </div>
                              <div class="flex flex-col gap-2">
                                  <button
                                      class="text-red-500 hover:text-red-700 text-sm"
                                      on:click={() => removeProgram(program.id)}
                                  >
                                      Remove
                                  </button>
                                  <!-- we can implement a separate route for rendering university/program info
                                  <button
                                      class="text-blue-500 hover:text-blue-700 text-sm"
                                      on:click={() => navigateTo(`/programs/${program.id}`)}
                                  >
                                      View Details
                                  </button> -->
                              </div>
                          </div>
                      </div>
                  {/each}
              {:else}
                  <div class="text-center py-8 text-gray-500">
                      No saved programs yet. Start by searching for <a class="text-blue-500 underline hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" href="/search"> programs!</a>
                  </div>
              {/if}
          </div>



          <h2 class="text-2xl font-bold text-gray-800 mb-4">Saved Scholarship</h2>
          <div class="space-y-4">
            {#if programs && programs.length > 0}
                {#each programs as program (program.id)}
                    <div class="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
                        <div class="flex justify-between items-center">
                            <div class="flex gap-4">
                                
                            </div>
                            <div class="flex flex-col gap-2">
                                <button
                                    class="text-red-500 hover:text-red-700 text-sm"
                                    on:click={() => removeProgram(program.id)}
                                >
                                    Remove
                                </button>
                                <!-- we can implement a separate route for rendering university/program info
                                <button
                                    class="text-blue-500 hover:text-blue-700 text-sm"
                                    on:click={() => navigateTo(`/programs/${program.id}`)}
                                >
                                    View Details
                                </button> -->
                            </div>
                        </div>
                    </div>
                {/each}
            {:else}
                <div class="text-center py-8 text-gray-500">
                    No saved scholarships yet. Start by searching for <a class="text-blue-500 underline hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" href="/scholarships"> scholarships!</a>
                </div>
            {/if}
        </div>
      </div>
  </div>
  
  <style>
  .container {
      max-width: 1200px;
  }
  </style>