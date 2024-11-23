<script>
  import { savedPrograms } from '$lib/savedPrograms';

  // Reactive variable for saved programs
  let programs = [];

  // Subscribe to the savedPrograms store
  //Van's Notes (Commented out because savedPrograms.subscribe is not a function which is causing the deployment error)
  // savedPrograms.subscribe((value) => {
  //   programs = value;
  // });

  // Updated dynamic prerequisites dictionary
  const prerequisiteDictionary = {
    STEM: ['Math 12', 'Physics 12', 'English 12', 'Computer Science 11'],
    Engineering: ['Math 12', 'Physics 12', 'Chemistry 12'],
    Science: ['Math 12', 'Biology 12', 'Chemistry 12'],
    Business: ['Economics 12', 'English 12', 'Math 11'],
    Arts: ['History 12', 'English 12', 'Art 11'],
    default: ['English 12', 'Math 11', 'Social Studies 12'],
  };

  // Match program names to categories dynamically
  function getDynamicPrerequisites(program) {
    let category = 'default';

    // Simple keyword matching to determine category
    if (program.name.includes('Engineering')) category = 'Engineering';
    else if (program.name.includes('Science')) category = 'Science';
    else if (program.name.includes('Business')) category = 'Business';
    else if (program.name.includes('Arts')) category = 'Arts';
    else if (program.category) category = program.category;

    const prerequisites = prerequisiteDictionary[category] || prerequisiteDictionary.default;

    return prerequisites.map((name, index) => ({
      id: index + 1,
      name,
      completed: false,
      required: true,
    }));
  }

  // Ensure programs have prerequisites dynamically assigned
  $: programs.forEach((program) => {
    if (!program.prerequisites || program.prerequisites.length === 0) {
      program.prerequisites = getDynamicPrerequisites(program);
    }
  });

  // Toggle prerequisite completion
  function togglePrerequisite(programId, prereqId) {
    savedPrograms.update((programs) =>
      programs.map((program) => {
        if (program.id === programId) {
          return {
            ...program,
            prerequisites: program.prerequisites.map((prereq) =>
              prereq.id === prereqId ? { ...prereq, completed: !prereq.completed } : prereq
            ),
          };
        }
        return program;
      })
    );
  }

  // Calculate total cost dynamically
  function getTotalCost(programs) {
    return programs.reduce((total, program) => {
      const applicationFee = program.applicationFee || 100; // Default application fee
      return total + (program.estimatedCost || 0) + applicationFee;
    }, 0);
  }

  // Check if all prerequisites are completed
  function allPrerequisitesCompleted(prerequisites) {
    return prerequisites.every((prereq) => prereq.completed);
  }

  // Eligibility message for prerequisites
  function getEligibilityMessage(program) {
    if (allPrerequisitesCompleted(program.prerequisites)) {
      return `Congratulations! You meet all the prerequisites for ${program.name}.`;
    }
    return `You still need to complete some prerequisites for ${program.name}.`;
  }
</script>

<div class="container mx-auto px-4 py-8 max-w-5xl">
  <div class="flex justify-between items-center mb-8">
    <h1 class="text-4xl font-extrabold text-gray-900">Your Application Path</h1>
    <div class="text-sm text-gray-500 flex flex-col items-end">
      <div>Total Programs: {programs.length}</div>
      <div class="font-bold text-green-600">
        Total Estimated Cost: ${getTotalCost(programs).toLocaleString()}
      </div>
    </div>
  </div>

  {#if programs.length === 0}
    <div class="text-center bg-gray-100 rounded-lg p-12">
      <p class="text-xl text-gray-600">No programs tracked. Start adding your academic journey!</p>
    </div>
  {:else}
    <div class="space-y-6">
      {#each programs as program (program.id)}
        <div class="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 transition-all hover:shadow-2xl">
          <div class="p-6 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h2 class="text-2xl font-bold text-gray-800">{program.name}</h2>
              <p 
                class="text-sm text-white px-2 py-1 rounded inline-block" 
                style="background-color: hsl({(program.id * 40) % 360}, 70%, 50%)"
              >
                {program.university}
              </p>
            </div>
            <!-- Commented Out Remove Button -->
            <!-- {
            <button 
              on:click={() => removeProgram(program.id)}
              class="text-red-500 hover:text-red-700 transition-colors p-2 rounded-full hover:bg-red-50 focus:outline-none"
              aria-label="Remove Program"
            >
              Remove
            </button>
            } -->
          </div>

          <div class="p-6">
            <!-- Prerequisites Section -->
            <section>
              <h4 class="text-lg font-semibold text-gray-700 mb-4">Prerequisites</h4>
              {#if program.prerequisites && program.prerequisites.length > 0}
                <div class="space-y-3">
                  {#each program.prerequisites as prereq}
                    <label class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                      <input
                        type="checkbox"
                        checked={prereq.completed}
                        on:change={() => togglePrerequisite(program.id, prereq.id)}
                        class="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span class="text-gray-700 flex-1">{prereq.name}</span>
                    </label>
                  {/each}
                </div>
                <p class="mt-4 text-sm text-gray-700 font-medium">{getEligibilityMessage(program)}</p>
              {:else}
                <p class="text-sm text-gray-500">No prerequisites listed for this program.</p>
              {/if}
            </section>

            <!-- Application Steps Section -->
            <section class="mt-6">
              <h4 class="text-lg font-semibold text-gray-700 mb-4">Application Steps</h4>
              <ul class="list-disc pl-6 text-sm text-gray-700">
                <li>Submit application form</li>
                <li>Submit recommendation letters</li>
                <li>Pay application fee</li>
                <li>Upload transcripts</li>
              </ul>
            </section>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .container {
    max-width: 900px;
  }
</style>
