// DecisionSuport 
let newPro = '';
let newCon = '';

function addPro() {
  if (newPro.trim() && currentProgram) {
    currentProgram.pros = [...(currentProgram.pros || []), newPro];
    newPro = '';
  }
}

function addCon() {
  if (newCon.trim() && currentProgram) {
    currentProgram.cons = [...(currentProgram.cons || []), newCon];
    newCon = '';
  }
}

function updateNotes(event) {
  if (currentProgram) {
    currentProgram.notes = event.target.value;
  }
}


function removeItem(array, index) {
  if (currentProgram) {
    array.splice(index, 1);
    trackedPrograms = [...trackedPrograms];
  }
}

<!-- Pros
        <div class="bg-green-50 p-4 rounded-lg shadow-sm">
          <h3 class="font-semibold mb-2 text-green-700">Pros</h3>
          <ul class="space-y-2 text-sm">
            {#each currentProgram.pros || [] as pro, i}
              <li class="flex items-center gap-2">
                <span>{pro}</span>
                <button class="text-red-500" on:click={() => removeItem(currentProgram.pros, i)}>×</button>
              </li>
            {/each}
          </ul>
          <div class="mt-3 flex gap-2">
            <input
              type="text"
              bind:value={newPro}
              placeholder="Add a pro..."
              class="flex-grow p-2 border rounded-md"
            />
            <button
              on:click={addPro}
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>

         // Cons Column
        <div class="bg-red-50 p-4 rounded-lg shadow-sm">
          <h3 class="font-semibold mb-2 text-red-700">Cons</h3>
          <ul class="space-y-2 text-sm">
            {#each currentProgram.cons || [] as con, i}
              <li class="flex items-center gap-2">
                <span>{con}</span>
                <button class="text-red-500" on:click={() => removeItem(currentProgram.cons, i)}>×</button>
              </li>
            {/each}
          </ul>
          <div class="mt-3 flex gap-2">
            <input
              type="text"
              bind:value={newCon}
              placeholder="Add a con..."
              class="flex-grow p-2 border rounded-md"
            />
            <button
              on:click={addCon}
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>

        // Notes Section 
        <div class="col-span-1 md:col-span-2 bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 class="font-semibold mb-2 text-gray-700">Notes</h3>
          <textarea
            bind:value={currentProgram.notes}
            on:input={updateNotes}
            class="w-full h-32 p-2 border rounded-md"
            placeholder="Add any additional notes about this program..."
          />
        </div>
      </div>
    {/if}
  {:else}
    <div class="text-center py-8 text-gray-600">
      Select programs to compare by clicking the "Track" button above
    </div>
  {/if}
</div>
      -->
      // end DecisionSuport 