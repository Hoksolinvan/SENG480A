<script>
  import { savedPrograms } from '$lib/savedPrograms';

  // Automatically subscribe to the store
  $: programs = $savedPrograms;

  // Call the store's `updatePrerequisites` method once on mount
  savedPrograms.updatePrerequisites();

  // Toggle prerequisite completion
  function togglePrerequisite(programId, prereqId) {
    savedPrograms.update((currentPrograms) =>
      currentPrograms.map((program) => {
        if (program.id === programId) {
          const updatedPrerequisites = program.prerequisites.map((prereq) =>
            prereq.id === prereqId
              ? { ...prereq, completed: !prereq.completed }
              : prereq
          );
          return { ...program, prerequisites: updatedPrerequisites };
        }
        return program;
      })
    );
  }

  // Calculate total cost dynamically
  function getTotalCost(programs) {
    return programs.reduce((total, program) => {
      const applicationFee = program.applicationFee || 100;
      return total + (program.estimatedCost || 0) + applicationFee;
    }, 0);
  }

  // Check if all prerequisites are completed
  function allPrerequisitesCompleted(prerequisites) {
    return prerequisites?.every((prereq) => prereq.completed) || false;
  }
</script>

<button 
  class="w-fit px-4 py-2 bg-blue-900 text-white rounded-lg shadow-sm 
  hover:bg-blue-800 transform hover:scale-105 transition-all
  duration-300text-sm font-medium border border-gray-200"
  onclick="window.location.href = './dashboard';"
>
  Back
</button>

<div class="container mx-auto px-4 py-8 max-w-5xl">
  <div class="flex justify-between items-center mb-8">
    <h1 class="text-4xl font-extrabold text-gray-900">Application Checklist</h1>
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
          </div>

          <div class="p-6">
            <!-- Prerequisites Section -->
            <section>
              <h4 class="text-lg font-semibold text-gray-700 mb-4">Prerequisites</h4>
              {#if program.prerequisites?.length > 0}
                <div class="space-y-3">
                  {#each program.prerequisites as prereq (prereq.id)}
                    <label class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                      <input
                        type="checkbox"
                        bind:checked={prereq.completed}
                        on:change={() => togglePrerequisite(program.id, prereq.id)}
                        class="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span class="text-gray-700 flex-1">{prereq.name}</span>
                    </label>
                  {/each}
                </div>
                <p class="mt-4 text-sm font-medium" class:text-green-600={allPrerequisitesCompleted(program.prerequisites)} class:text-yellow-600={!allPrerequisitesCompleted(program.prerequisites)}>
                  {#if allPrerequisitesCompleted(program.prerequisites)}
                    Congratulations! You meet all the prerequisites for {program.name}.
                  {:else}
                    You still need to complete some prerequisites for {program.name}.
                  {/if}
                </p>
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
