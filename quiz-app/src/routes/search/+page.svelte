<script>
  //import { onMount } from 'svelte';
  import DecisionSupport from '$lib/DecisionSupport.svelte';
  import Housing from '$lib/Housing.svelte';
  import ProgramComparison from '$lib/ProgramComparison.svelte';
  import ProgramList from '$lib/ProgramList.js';
  import "./search_css.css";
  
  // Flag to control program list visibility
  let showPrograms = false;

  // Function to toggle the visibility of the program list
  function toggleProgramList() {
    showPrograms = searchQuery.trim().length > 0 || filters.location.trim().length > 0;
  }

  //var items=[];
  //let newItem='';
  //onMount(() => {
        // Retrieve value from localStorage
        //const storedValue = localStorage.getItem('myArray');
        //items = storedItemsString ? JSON.parse(storedItemsString) : [];
    //});

    //function addItem() {
    

       // items = savedPrograms; // Add the new item to the array
        
       // localStorage.setItem('myArray', JSON.stringify(items));
        
      //  newItem = '';
  
//}


  let searchQuery = '';
  let computer_science = false;
  let business_administration = false;
  let psychology = false;
  let biology = false;
  let law = false;
  let programs = ProgramList;

  let filters = {
    // initialization for text-input based location search
    // location: '',

    // initialization for check-box based location search
    location: [],
    degreeType: '',
  };

  let savedPrograms = [];
  let filteredPrograms = [];
  let selectedProgram = [];
  let email = '';
  let reminderMessage = '';
  let showComparison = false;
  let showSavedPrograms = false;


  // Input parsing for text-input based location search
  // $: {
  //   filteredPrograms = programs.filter(program =>
  //     (searchQuery.trim() || filters.location.trim()) && // display if either field has content
  //     (searchQuery.trim() === '' || program.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
  //     (filters.location.trim() === '' || program.location.toLowerCase().includes(filters.location.toLowerCase()))
  //   );
  //   // Ensure program list visibility based on current filters
  //   showPrograms = filteredPrograms.length > 0;
  // }


  // Input parsing for check-box based location search
  $: {
    filteredPrograms = programs.filter(program =>
      (searchQuery.trim() || filters.location[0]) && // display if either field has content
      (searchQuery.trim() === '' || program.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filters.location[0] === '' || program.location.toLowerCase().includes(filters.location[0].toLowerCase()))
    );
    // Ensure program list visibility based on current filters
    showPrograms = filteredPrograms.length > 0;
  }

  /* $: {
    filteredPrograms = programs.filter(program =>
      program.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.location === '' || program.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.degreeType === '' || program.degreeType === filters.degreeType) && (
        (!computer_science && !business_administration && !psychology && !biology && !law) ||
        (computer_science && program.name.toLowerCase() === 'computer science') ||
        (business_administration && program.name.toLowerCase() === 'business administration') ||
        (psychology && program.name.toLowerCase() === 'psychology') ||
        (biology && program.name.toLowerCase() === "biology") ||
        (law && program.name.toLowerCase() === "law")
      )
    );
  } */

  function selectProgram(program) {
    // remove program from selectedProgram if it is already in there
    // will add it back again at index 0
    if (selectedProgram.some(p => p.id === program.id)) {
      let i = selectedProgram.indexOf(program);
      selectedProgram.splice(i, i+1);
    }
    // add program to index 0
    //selectedProgram.unshift(program);  does not work for some reason
    selectedProgram = [program].concat(selectedProgram);
  }

  function saveProgram() {
    if (selectedProgram.length > 0) {
      if (!savedPrograms.some(p => p.id === selectedProgram[0].id)) {
        savedPrograms = [...savedPrograms, selectedProgram[0]];
                //addItem();
      }
      sortSavedProgramsByDeadline();
    }
  }

  function sortSavedProgramsByDeadline() {
    savedPrograms.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  async function sendReminder() {
    try {
      const request = await fetch('https://seng480a-production.up.railway.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
        }),
      });

      if (request.ok) {
        reminderMessage = 'Reminder set successfully!';
        setTimeout(() => {
          reminderMessage = '';
        }, 3000);
      }
    } catch (error) {
      reminderMessage = 'Failed to set reminder. Please try again.';
    }
  }

  function clearSavedPrograms() {
    savedPrograms = [];
    selectedProgram = [];
    localStorage.clear();
  }

  function toggleComparison() {
    showComparison = !showComparison;
  }
</script>

<main class="min-h-screen bg-gray-50">
  <!-- Hero Search Section -->
  <div class="bg-gradient-to-br from-blue-900 to-blue-500 py-16">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-white text-center mb-8">
        Find Your Perfect Program
      </h1>
      
      <!-- Main Search Bar -->
      <div class="max-w-4xl mx-auto space-y-6">


        <input
          type="text"
          bind:value={searchQuery}  
          on:input={toggleProgramList}
          placeholder="Search for programs..."
          class="w-full px-6 py-4 text-lg rounded-2xl shadow-2xl focus:ring-4 
                 focus:ring-blue-300 focus:outline-none transition-all duration-300"
        />


        <!-- <div  id="mainInputContainer">
          <input
          type="text"
          bind:value={searchQuery}  
          on:input={toggleProgramList}
          placeholder="Search for programs..."
          class="w-full px-6 py-4 text-lg rounded-2xl shadow-2xl focus:ring-4 
                 focus:ring-blue-300 focus:outline-none transition-all duration-300"
          id="mainInput"
        />
        </div>
        
        <script>
          function autocomplete(inp, arr) {
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
              /*check if the item starts with the same letters as the text field value:*/
              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
              }
            }
        });
        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
              /*If the arrow DOWN key is pressed,
              increase the currentFocus variable:*/
              currentFocus++;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode == 38) { //up
              /*If the arrow UP key is pressed,
              decrease the currentFocus variable:*/
              currentFocus--;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode == 13) {
              /*If the ENTER key is pressed, prevent the form from being submitted,*/
              e.preventDefault();
              if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
              }
            }
        });
        function addActive(x) {
          /*a function to classify an item as "active":*/
          if (!x) return false;
          /*start by removing the "active" class on all items:*/
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
          /*add class "autocomplete-active":*/
          x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
          /*a function to remove the "active" class from all autocomplete items:*/
          for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
          }
        }
        function closeAllLists(elmnt) {
          /*close all autocomplete lists in the document,
          except the one passed as an argument:*/
          var x = document.getElementsByClassName("autocomplete-items");
          for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      /*execute a function when someone clicks in the document:*/
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });
      } 

      let autocomList = ["Computer Science", "Economics", "Business"];
      autocomplete(document.getElementById("mainInput"), autocomList);

        </script> -->


        
        <!-- Filters Row -->
        <div class="grid md:grid-cols-2 gap-4">

          <!-- Location filter displayed in text-input form -->

          <!-- <input
            type="text"
            bind:value={filters.location}
            placeholder="Location..."
            class="px-4 py-3 rounded-2xl shadow-lg focus:ring-4 focus:ring-blue-300 
                   focus:outline-none transition-all duration-300"
          /> -->

          <!-- Location filter displayed in list checkbox form -->

          <div style="position: relative; display: inline-block;">
            <button onclick="myFunction()" id="dropbtn" class="bg-white px-4 py-3 rounded-2xl shadow-lg focus:ring-4 focus:ring-blue-300 
            focus:outline-none transition-all duration-300 w-full text-gray-400 text-lg">Location</button>
            <div id="myDropdown" class="locationList">
              <!-- To-do: update full location list and move to upper script section, or more ideally to a separate file -->
              {#each [["BC", ['Vancouver, BC', 'Victoria, BC', "Kelowna, BC"]], ["AB", ["Calgary, AB", "Edmonton, AB"]]] as location}
               <label class="locationBox">
                <input type="checkbox" value={location[0]} bind:group={filters.location} class="locBoxinput"> {location[0]}
                  {#each location[1] as city}
                    <label class="locationBox">
                      <input type="checkbox" value={city} bind:group={filters.location} class="locBoxinput"> {city}
                    </label>
                  {/each}
               </label>
              {/each}
            </div>
          </div> 

          <script>
            /* When the user clicks on the button,
            toggle between hiding and showing the dropdown content */
            function myFunction() {
              document.getElementById("myDropdown").classList.toggle("show");
            }

            // Close the dropdown menu if the user clicks outside of it
            window.onclick = function(event) {
              if (!event.target.matches('.locBoxinput, .locationBox, #dropbtn')) {
                var dropdowns = document.getElementsByClassName("locationList");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                  }
                }
              }
            } 
          </script>

          <!-- End of list checkbox location field code -->

          <!-- <select 
            bind:value={filters.degreeType}
            class="px-4 py-3 rounded-2xl shadow-lg focus:ring-4 focus:ring-blue-300 
                   focus:outline-none transition-all duration-300 bg-white"
          >
            <option value="">All Degree Types</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
          </select> -->
        </div>
      </div>
    </div>
  </div>
  
  
  <!-- Program Type Filters -->
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- <div class="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 class="text-lg font-semibold text-blue-900 mb-4">Program Types</h3>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <label class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
          <input type="checkbox" bind:checked={computer_science} class="w-4 h-4 text-blue-600" />
          <span class="font-medium">Computer Science 🖥️</span>
        </label>
        <label class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
          <input type="checkbox" bind:checked={business_administration} class="w-4 h-4 text-blue-600" />
          <span class="font-medium">Business 📈</span>
        </label>
        <label class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
          <input type="checkbox" bind:checked={psychology} class="w-4 h-4 text-blue-600" />
          <span class="font-medium">Psychology 🧠</span>
        </label>
        <label class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
          <input type="checkbox" bind:checked={biology} class="w-4 h-4 text-blue-600" />
          <span class="font-medium">Biology 🔬</span>
        </label>
        <label class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
          <input type="checkbox" bind:checked={law} class="w-4 h-4 text-blue-600" />
          <span class="font-medium">Law ⚖️</span>
        </label>
      </div>
    </div> -->

    <!-- Results Section -->
    
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Search Results -->
      {#if showPrograms}
      <div class="md:col-span-2">
        <h2 class="text-2xl font-semibold text-blue-900 mb-6">Search Results</h2>
        {#if filteredPrograms.length > 0}
          <div class="grid gap-4">
            {#each filteredPrograms as program}
              <div 
                class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all
                       cursor-pointer border-2 border-transparent hover:border-blue-200"
                on:click={() => selectProgram(program)}
              >
                <h3 class="text-xl font-semibold text-blue-900">{program.name}</h3>
                <div class="text-gray-600 mt-2">{program.university}</div>
                <div class="mt-2 flex items-center gap-4">
                  <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {program.location}
                  </span>
                  <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {program.degreeType}
                  </span>
                </div>
              </div>
            {/each}
          </div>
        {:else}
          <div class="text-center py-12 bg-white rounded-xl">
            <p class="text-gray-500">No programs match your search criteria.</p>
          </div>
        {/if}
      </div>
    {/if}
      <!-- Selected Program Details -->
      {#if selectedProgram.length > 0}
        <div class="bg-white rounded-xl shadow-md p-6 h-fit sticky top-4">
          <h2 class="text-2xl font-semibold text-blue-900 mb-6">Program Details</h2>
          <div class="space-y-4">
            <img 
              src={selectedProgram[0].url}
              alt={selectedProgram[0].university}
              class="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 class="text-xl font-semibold text-blue-800">
              {selectedProgram[0].name}
            </h3>
            <p class="text-gray-600">{selectedProgram[0].university}</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-3 bg-blue-50 rounded-lg">
                <div class="text-sm text-gray-600">Location</div>
                <div class="font-medium">{selectedProgram[0].location}</div>
              </div>
              <div class="p-3 bg-blue-50 rounded-lg">
                <div class="text-sm text-gray-600">Degree Type</div>
                <div class="font-medium">{selectedProgram[0].degreeType}</div>
              </div>
              <div class="p-3 bg-blue-50 rounded-lg col-span-2">
                <div class="text-sm text-gray-600">Application Deadline</div>
                <div class="font-medium">{selectedProgram[0].deadline}</div>
              </div>
            </div>

            <button 
                on:click={saveProgram}
                class="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-900 transform hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out"
            >
              Save Program
            </button>

            <!-- Reminder Section -->
            <div class="space-y-3">
              <input
                type="email"
                bind:value={email}
                placeholder="Your email for deadline reminder"
                class="w-full px-4 py-3 rounded-lg border-2 border-blue-100 
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <button 
                on:click={sendReminder}
                class="w-full py-3 bg-green-600 text-white rounded-lg font-medium
                       hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
              >
                Set Reminder
              </button>
            </div>

            {#if reminderMessage}
              <div class="p-3 bg-green-100 text-green-700 rounded-lg text-center">
                {reminderMessage}
              </div>
            {/if}
          </div>
        </div>
      {/if}
    </div>

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
            <Housing />
          </div>
        {/if}
      </div>
    {/if}
  </div>
</main>
