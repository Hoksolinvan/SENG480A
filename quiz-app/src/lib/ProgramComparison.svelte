
<script>
  export let selectedProgram = []; // Array of tracked program objects to display
</script>

<div class="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
  <h2 class="text-2xl font-semibold mb-6 text-blue-900">Program Comparison</h2>

  {#if selectedProgram && selectedProgram.length > 0}
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Criteria</th>
            {#each selectedProgram as program}
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {program.name}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <!-- University Row -->
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">University</td>
            {#each selectedProgram as program}
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {program.university}
              </td>
            {/each}
          </tr>
          <!-- Location Row -->
          <tr class="bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Location</td>
            {#each selectedProgram as program}
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {program.location}
              </td>
            {/each}
          </tr>
          
          <!-- Degree Type Row -->
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Degree Type</td>
            {#each selectedProgram as program}
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {program.degreeType}
              </td>
            {/each}
          </tr>
          <!-- Admission Rate Row -->
          <tr class="bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Admission Rate</td>
            {#each selectedProgram as program}
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {program.admissionRate}%
              </td>
            {/each}
          </tr>
          <!-- Grade Requirement -->
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Grade Requirement </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                69%
            </td>
          </tr>
          <!-- Deadline Row -->
          <tr class="bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Application Deadline</td>
            {#each selectedProgram as program}
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {program.deadline}
              </td>
            {/each}
          </tr>
          <!-- Cost Row -->
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cost</td>
            {#each selectedProgram as program}
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {program.cost}$
              </td>
            {/each}
          </tr>
          <!-- University Image Row -->
          <tr class="bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Campus View</td>
            {#each selectedProgram as program}
              <td class="px-6 py-4">
                <img 
                  src={program.url} 
                  alt={program.university} 
                  class="h-32 w-48 object-cover rounded-lg shadow-sm"
                />
              </td>
            {/each}
          </tr>
        </tbody>
      </table>

    </div>

  {:else}
    <div class="text-center py-8 text-gray-500">
      <p>Select programs to compare them side by side.</p>
      <p class="text-sm mt-2">You can select multiple programs from the search results to compare their details.</p>
    </div>
  {/if}
</div>