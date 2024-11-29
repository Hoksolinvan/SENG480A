<script>
  import { onMount } from 'svelte';

  let savedPrograms = [];
  let housingOptions = [
    { location: "4326 Vera Cruz Place, Victoria, BC", cost: "$850" },
    { location: "1718 Midgard Avenue, Victoria, BC", cost: "$900" },
    { location: "1741 Midgard Avenue, Victoria, BC", cost: "$900" }
  ];

  onMount(() => {
    // Load saved programs from localStorage
    savedPrograms = JSON.parse(localStorage.getItem('savedPrograms')) || [];
  });
</script>

<button 
  class="w-fit px-4 py-2 bg-darkgreen text-white rounded-lg shadow-sm 
  hover:bg-green-800 transform hover:scale-105 transition-all
  duration-300text-sm font-medium border border-gray-200"
  onclick="window.location.href = './dashboard';"
>
  Back
</button>

<div class="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-200 w-full">
  <h2 class="text-2xl font-semibold mb-6 text-darkgreen">Program Comparison</h2> 

  <div class="overflow-x-auto w-full">
    <table class="min-w-full divide-y divide-gray-200 table-auto border-collapse">
      <thead class="bg-gray-50">
        <tr>

          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">University Banner</th> 
          {#each savedPrograms as program}
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><img src={program.banner} style="width:400px; height:100px;"></th>
          {/each}
        </tr>
        
      </thead> 
      <tbody class="bg-white divide-y divide-gray-200">
        <!-- Criteria-->
        <tr class="bg-gray-50">

          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Criteria</td> 
          {#each savedPrograms as program}
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{program.name}</td>
          {/each}
        </tr>
        <!-- University -->
        <tr class="bg-gray-50">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">University</td> 
          {#each savedPrograms as program}
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{program.university}</td>
          {/each}
        </tr>
  
        <!-- Location -->
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Location</td> 
          {#each savedPrograms as program}
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{program.location}</td>
          {/each}
        </tr>
  
        <!-- Degree Type -->
        <tr class="bg-gray-50">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Degree</td> 
          {#each savedPrograms as program}
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{program.degreeType}</td>
          {/each}
        </tr>
  
        <!-- Admission Rate -->
        <!-- <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Admission Rate</td> 
          {#each savedPrograms as program}
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{program.admissionRate}%</td>
          {/each}
        </tr> -->
  
        <!-- Grade Requirement (new row) -->
        <!-- <tr class="bg-gray-50">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Grade Requirement</td> 
          {#each savedPrograms as program}
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{program.gradeRequirement || ''}</td>
          {/each}
        </tr> -->
  
        <!-- Application Deadline -->
        <tr>
          <td class="px-6 py-4 font-semibold text-gray-700 text-sm font-medium">Application Deadline</td>
          {#each savedPrograms as program}
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {program.deadline ? new Date(program.deadline).toLocaleDateString() : 'N/A'}
            </td>
          {/each}
        </tr>
  
        <!-- Cost -->
        <tr class="bg-gray-50">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cost</td> 
          {#each savedPrograms as program}
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${program.cost}</td>
          {/each}
        </tr>
  
        <!-- Campus View -->
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Campus View</td> 
          {#each savedPrograms as program}
            <td class="px-6 py-4 text-center">
              <img src={program.url} alt="Campus View" class="w-32 h-24 object-cover rounded-md mx-auto" />
            </td>
          {/each}
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- Housing Options Carousel -->
<!-- <div class="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
  <h2 class="text-2xl font-semibold mb-6 text-blue-900">Housing Options</h2>

  <div class="sc-carousel__carousel-container overflow-x-auto flex space-x-4">
    {#each housingOptions as option}
      <div class="p-4 min-w-[300px] max-w-[300px] bg-gray-50 rounded-lg shadow-md">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th> 
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
            </tr>
          </thead> 
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-500 cursor-pointer">{option.location}</td> 
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{option.cost}</td>
            </tr>
          </tbody>
        </table>
      </div>
    {/each}
  </div>
</div> -->

<style>
  .sc-carousel__carousel-container {
    display: flex;
    overflow-x: scroll;
  }
</style>
