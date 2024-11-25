<script>
  import { fade, fly } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import { savedPrograms } from '$lib/savedPrograms';
  import ProgramList from '$lib/ProgramList.js';
  

  let showSaveMessage = false;
  let searchQuery = '';
  let universityQuery = '';
  let filters = {
    location: '',
    degreeType: ''
  };

  let filteredPrograms = [];
  let selectedProgram = null;
  
  $: {
    filteredPrograms = ProgramList.filter(program =>
      (searchQuery.trim() || filters.location.trim() || universityQuery.trim()) &&
      (searchQuery.trim() === '' || program.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (universityQuery.trim() === '' || program.university.toLowerCase().includes(universityQuery.toLowerCase())) &&
      (filters.location.trim() === '' || program.location.toLowerCase().includes(filters.location.toLowerCase()))
    );
  }
  
  function handleProgramSelect(program) {
    selectedProgram = program;
  }
  
  
  

  async function saveProgram() {
    if (selectedProgram) {
        savedPrograms.add(selectedProgram);
        showSaveMessage = true;
        setTimeout(() => {
            showSaveMessage = false;
        }, 3000); // Hide message after 3 seconds
    }
}

</script>

<div class="min-h-screen bg-gray-50" in:fade={{ duration: 300 }}>
  <!-- Hero Search Section -->
  <div class="bg-gradient-to-br from-blue-900 to-blue-500 py-16">
    <div class="max-w-7xl mx-auto px-4" in:fly={{ y: 20, duration: 600 }}>
      <h1 class="text-4xl font-bold text-white text-center mb-8">
        Search Programs
      </h1>
      
      <div class="max-w-4xl mx-auto space-y-6">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Search for programs..."
          class="w-full px-6 py-4 text-lg rounded-2xl shadow-2xl focus:ring-4 
                 focus:ring-blue-300 focus:outline-none transition-all duration-300
                 transform hover:scale-[1.02]"
        />

        <input
          type="text"
          bind:value={universityQuery}
          placeholder="Search for universities..."
          class="w-full px-6 py-4 text-lg rounded-2xl shadow-2xl focus:ring-4 
                 focus:ring-blue-300 focus:outline-none transition-all duration-300
                 transform hover:scale-[1.02]"
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
        
        <style>
          #mainInputContainer{
            position: relative;
            display: inline-block;
          }
          .autocomplete-items {
            /* position: absolute; */
            border: 1px solid #d4d4d4;
            border-bottom: none;
            border-top: none;
            z-index: 99;
            /*position the autocomplete items to be the same width as the container:*/
            top: 100%;
            left: 0;
            right: 0;
          }
          .autocomplete-items div {
            padding: 10px;
            cursor: pointer;
            background-color: #fff;
            border-bottom: 1px solid #d4d4d4;
          }
          .autocomplete-items div:hover {
            /*when hovering an item:*/
            background-color: #e9e9e9;
          }
          .autocomplete-active {
            /*when navigating through the items using the arrow keys:*/
            background-color: DodgerBlue !important;
            color: #ffffff;
          }
        </style>
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
      let autocomList = ["Computer Science", "Business", "University of Victoria"];
      autocomplete(document.getElementById("mainInput"), autocomList);
        </script>
 -->



        <!-- Location filter displayed as a text-input form -->
        <input
          type="text"
          bind:value={filters.location}
          placeholder="Location..."
          class="w-full px-6 py-4 text-lg rounded-2xl shadow-2xl focus:ring-4 
                 focus:ring-blue-300 focus:outline-none transition-all duration-300
                 transform hover:scale-[1.02]"
        />

        <!-- Uncomment to use below for check-box based location search  BUT need to remove the 
         text based filter-->
        <!--
        <div style="position: relative; display: inline-block;">
          <button onclick="myFunction()" id="dropbtn" class="bg-white px-4 py-3 rounded-2xl shadow-lg focus:ring-4 focus:ring-blue-300 
          focus:outline-none transition-all duration-300 w-full text-gray-400 text-lg">Location</button>
          <div id="myDropdown" class="locationList">
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
        -->

      </div>
    </div>
  </div>
  
  <!-- Results Section -->
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Search Results -->
      {#if filteredPrograms.length > 0}
        <div class="md:col-span-2">
          <div class="grid gap-4">
            {#each filteredPrograms as program (program.id)}
              <div 
                in:fly={{ y: 20, duration: 300 }}
                class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all
                       cursor-pointer border-2 border-transparent hover:border-blue-200
                       transform hover:scale-[1.02]"
                on:click={() => handleProgramSelect(program)}
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
        </div>
      {/if}
      
      <!-- Selected Program Details -->
      {#if selectedProgram}
        <div 
          class="bg-white rounded-xl shadow-md p-6 h-fit sticky top-4"
          in:fly={{ x: 20, duration: 300 }}
        >
          <h2 class="text-2xl font-semibold text-blue-900 mb-6">Program Details</h2>
          <img 
            src={selectedProgram.url}
            alt={selectedProgram.university}
            class="w-full h-48 object-cover rounded-lg shadow-md mb-4
                   transform hover:scale-[1.02] transition-transform duration-300"
          />
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-blue-800">
              {selectedProgram.name}
            </h3>
            <p class="text-gray-600">{selectedProgram.university}</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-3 bg-blue-50 rounded-lg">
                <div class="text-sm text-gray-600">Location</div>
                <div class="font-medium">{selectedProgram.location}</div>
              </div>
              <div class="p-3 bg-blue-50 rounded-lg">
                <div class="text-sm text-gray-600">Degree Type</div>
                <div class="font-medium">{selectedProgram.degreeType}</div>
              </div>
              <div class="p-3 bg-blue-50 rounded-lg col-span-2">
                <div class="text-sm text-gray-600">Application Deadline</div>
                <div class="font-medium">{selectedProgram.deadline}</div>
              </div>
            </div>

            <div class="relative">
              <button 
                  on:click={saveProgram}
                  class="w-full py-3 bg-blue-600 text-white rounded-lg font-medium 
                         hover:bg-blue-700 transform hover:scale-105 active:scale-95 
                         transition-all duration-200 ease-in-out
                         {showSaveMessage ? 'animate-bounce' : ''}"
              >
                  Save Program
              </button>
              
              {#if showSaveMessage}
                  <div 
                      class="absolute -top-12 left-0 right-0 text-center p-2 bg-green-100 
                             text-green-700 rounded-lg transform transition-all duration-300 
                             animate-fade-in-down"
                      in:fly={{ y: -20, duration: 300 }}
                      out:fade
                  >
                      Program saved successfully!
                  </div>
              {/if}
          </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  @keyframes fade-in-down {
      0% {
          opacity: 0;
          transform: translateY(-10px);
      }
      100% {
          opacity: 1;
          transform: translateY(0);
      }
  }

  :global(.animate-fade-in-down) {
      animation: fade-in-down 0.3s ease-out;
  }

  :global(.animate-bounce) {
      animation: bounce 0.5s ease-in-out;
  }

  @keyframes bounce {
      0%, 100% {
          transform: scale(1);
      }
      50% {
          transform: scale(1.1);
      }
  }
</style>