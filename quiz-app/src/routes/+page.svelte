<script>
  let searchQuery = '';
  let computer_science = false;
  let business_administration = false;
  let psychology = false;
  let biology = false;
  let law = false;
  let programs = [
    { id: 1, name: 'Computer Science', university: 'University of Victoria', location: 'Victoria, BC', degreeType: 'Bachelor', admissionRate: 25, deadline: '2024-12-01', url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg'},
{ id: 2, name: 'Business Administration', university: 'University of British Columbia', location: 'Vancouver, BC', degreeType: 'Bachelor', admissionRate: 35, deadline: '2024-11-15', url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg' },
{ id: 3, name: 'Environmental Science', university: 'Thompson Rivers University', location: 'Kamloops, BC', degreeType: 'Bachelor', admissionRate: 40, deadline: '2024-10-30', url: 'https://universitystudy.ca/wp-content/uploads/2013/08/Thompson-Rivers_banner_web-960x.jpg' },
{ id: 4, name: 'Mechanical Engineering', university: 'University of Calgary', location: 'Calgary, AB', degreeType: 'Bachelor', admissionRate: 30, deadline: '2024-12-05', url:'https://ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba' },
{ id: 5, name: 'Psychology', university: 'University of Alberta', location: 'Edmonton, AB', degreeType: 'Bachelor', admissionRate: 45, deadline: '2024-11-30', url:'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg' },
{ id: 6, name: 'Law', university: 'University of British Columbia', location: 'Vancouver, BC', degreeType: 'Master', admissionRate: 20, deadline: '2024-12-20', url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg' },
{ id: 7, name: 'Biology', university: 'Simon Fraser University', location: 'Burnaby, BC', degreeType: 'Bachelor', admissionRate: 50, deadline: '2024-11-25', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s' },
{ id: 8, name: 'Environmental Engineering', university: 'University of Calgary', location: 'Calgary, AB', degreeType: 'Bachelor', admissionRate: 35, deadline: '2024-12-10', url:'https://ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba' },
{ id: 9, name: 'Nursing', university: 'University of British Columbia', location: 'Vancouver, BC', degreeType: 'Bachelor', admissionRate: 20, deadline: '2024-12-15', url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg' },
{ id: 10, name: 'Finance', university: 'University of Alberta', location: 'Edmonton, AB', degreeType: 'Bachelor', admissionRate: 30, deadline: '2024-11-20', url:'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg' },
{ id: 11, name: 'Engineering Physics', university: 'University of Victoria', location: 'Victoria, BC', degreeType: 'Bachelor', admissionRate: 35, deadline: '2024-11-25', url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg' },
{ id: 12, name: 'Biochemistry', university: 'University of Calgary', location: 'Calgary, AB', degreeType: 'Bachelor', admissionRate: 40, deadline: '2024-12-10', url:'https://ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba'  },
{ id: 13, name: 'Arts and Sciences', university: 'University of British Columbia Okanagan', location: 'Kelowna, BC', degreeType: 'Bachelor', admissionRate: 50, deadline: '2024-11-30', url:'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg' },
{ id: 14, name: 'Computer Science', university: 'University of Alberta', location: 'Edmonton, AB', degreeType: 'Master', admissionRate: 30, deadline: '2024-12-15', url:'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg' },
{ id: 15, name: 'Environmental Studies', university: 'Simon Fraser University', location: 'Burnaby, BC', degreeType: 'Bachelor', admissionRate: 45, deadline: '2024-11-20' , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s' },
{ id: 16, name: 'Political Science', university: 'University of Victoria', location: 'Victoria, BC', degreeType: 'Bachelor', admissionRate: 45, deadline: '2024-12-15' , url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg'},
{ id: 17, name: 'Sociology', university: 'University of Calgary', location: 'Calgary, AB', degreeType: 'Bachelor', admissionRate: 25, deadline: '2024-11-20', url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba' },
{ id: 18, name: 'Mathematics', university: 'University of British Columbia Okanagan', location: 'Kelowna, BC', degreeType: 'Bachelor', admissionRate: 35, deadline: '2024-12-05', url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg' },
{ id: 19, name: 'Economics', university: 'University of Alberta', location: 'Edmonton, AB', degreeType: 'Bachelor', admissionRate: 40, deadline: '2024-11-25', url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg' },
{ id: 20, name: 'Environmental Engineering', university: 'University of British Columbia', location: 'Vancouver, BC', degreeType: 'Bachelor', admissionRate: 30, deadline: '2024-11-30', url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg' },
{ id: 21, name: 'Film Studies', university: 'Simon Fraser University', location: 'Burnaby, BC', degreeType: 'Bachelor', admissionRate: 45, deadline: '2024-12-15', url: 'https://www.sfu.ca/content/sfu/sfucommunity/woodwards/photo-gallery/jcr:content/main_content/image_0.img.960.auto.jpg/1634310628497.jpg' },
{ id: 22, name: 'History', university: 'University of Calgary', location: 'Calgary, AB', degreeType: 'Bachelor', admissionRate: 25, deadline: '2024-11-20', url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba' },
{ id: 23, name: 'Philosophy', university: 'University of British Columbia Okanagan', location: 'Kelowna, BC', degreeType: 'Bachelor', admissionRate: 35, deadline: '2024-12-05', url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg' },
{ id: 24, name: 'Education', university: 'University of Alberta', location: 'Edmonton, AB', degreeType: 'Bachelor', admissionRate: 40, deadline: '2024-11-25', url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg' },
{ id: 25, name: 'Geography', university: 'University of British Columbia', location: 'Vancouver, BC', degreeType: 'Bachelor', admissionRate: 30, deadline: '2024-11-30', url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg' },
{ id: 26, name: 'Indigenous Studies', university: 'University of Victoria', location: 'Victoria, BC', degreeType: 'Bachelor', admissionRate: 40, deadline: '2024-12-05', url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg' },
{ id: 27, name: 'Computer Science', university: 'University of Northern British Columbia', location: 'Prince George, BC', degreeType: 'Bachelor', admissionRate: 25, deadline: '2024-12-01', url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT' },
{ id: 28, name: 'Anthropology', university: 'University of British Columbia Okanagan', location: 'Kelowna, BC', degreeType: 'Bachelor', admissionRate: 35, deadline: '2024-12-05', url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg' },
{ id: 29, name: 'Sustainable Energy Engineering', university: 'Simon Fraser University', location: 'Burnaby, BC', degreeType: 'Bachelor', admissionRate: 30, deadline: '2024-12-01', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s' },
{ id: 30, name: 'Physics', university: 'University of Calgary', location: 'Calgary, AB', degreeType: 'Bachelor', admissionRate: 45, deadline: '2024-11-25', url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba' },
{ id: 31, name: 'Architecture', university: 'University of British Columbia', location: 'Vancouver, BC', degreeType: 'Master', admissionRate: 25, deadline: '2025-01-20', url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg' },
{ id: 32, name: 'Human Resource Management', university: 'University of Alberta', location: 'Edmonton, AB', degreeType: 'Bachelor', admissionRate: 40, deadline: '2024-12-05', url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg' },
{ id: 33, name: 'Environmental Science', university: 'University of Calgary', location: 'Calgary, AB', degreeType: 'Master', admissionRate: 30, deadline: '2025-01-10', url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba' },
{ id: 34, name: 'Political Economy', university: 'University of Victoria', location: 'Victoria, BC', degreeType: 'Master', admissionRate: 20, deadline: '2025-01-30', url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg' },
{ id: 35, name: 'Public Relations', university: 'Royal Roads University', location: 'Victoria, BC', degreeType: 'Bachelor', admissionRate: 50, deadline: '2024-11-30', url: 'https://cdn.prod.website-files.com/667c59abb9df9789d17407a6/667dd6863400fe779b562af4_UNIVERSITY-GUIDEBOOK-2022-ROYAL-ROADS-01-1.jpeg' },
{ id: 36, name: 'Data Science', university: 'University of British Columbia', location: 'Vancouver, BC', degreeType: 'Master', admissionRate: 15, deadline: '2025-02-15', url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg' },
{ id: 37, name: 'Sociology', university: 'University of Northern British Columbia', location: 'Prince George, BC', degreeType: 'Bachelor', admissionRate: 40, deadline: '2024-12-10', url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT' },
{ id: 38, name: 'Nursing', university: 'Mount Royal University', location: 'Calgary, AB', degreeType: 'Bachelor', admissionRate: 30, deadline: '2024-11-15', url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT' },
{ id: 39, name: 'Criminology', university: 'Simon Fraser University', location: 'Burnaby, BC', degreeType: 'Bachelor', admissionRate: 35, deadline: '2024-12-01', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s' },
{ id: 40, name: 'Environmental Design', university: 'University of Calgary', location: 'Calgary, AB', degreeType: 'Master', admissionRate: 20, deadline: '2025-01-25', url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba' },
{ id: 41, name: 'Agriculture', university: 'University of British Columbia', location: 'Vancouver, BC', degreeType: 'Bachelor', admissionRate: 25, deadline: '2024-11-20', url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg' },
{ id: 42, name: 'Graphic Design', university: 'Emily Carr University of Art + Design', location: 'Vancouver, BC', degreeType: 'Bachelor', admissionRate: 30, deadline: '2024-12-01', url: 'https://dsai.ca/wp-content/uploads/Emily-Carr-Hero.jpg' },
{ id: 43, name: 'Music Composition', university: 'University of Alberta', location: 'Edmonton, AB', degreeType: 'Bachelor', admissionRate: 40, deadline: '2024-11-30', url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg' },
{ id: 44, name: 'Linguistics', university: 'University of Victoria', location: 'Victoria, BC', degreeType: 'Bachelor', admissionRate: 35, deadline: '2024-12-10', url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg' }

];

  let filters = {
    location: '',
    degreeType: '',
  };

  let savedPrograms = [];
  let filteredPrograms = [];
  let selectedProgram = null;
  let email = '';
  let userInteracted = false;
  let reminderMessage = ''; // State for the reminder message

  $: if (userInteracted) {
    filteredPrograms = programs.filter(program =>
      program.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.location === '' || program.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.degreeType === '' || program.degreeType === filters.degreeType) && (
        (!computer_science && !business_administration && !psychology && !biology && !law) ||
        (computer_science && program.name.toLowerCase() == 'computer science') ||
        (business_administration && program.name.toLowerCase() == 'business administration') ||
        (psychology && program.name.toLowerCase() == 'psychology') ||
        (biology && program.name.toLowerCase()=="biology") ||
        (law && program.name.toLowerCase() == "law")
      )
    );
  }

  function handleInteraction() {
    userInteracted = true;
  }

  function scrollToSearch() {
    const searchSection = document.getElementById("search-section");
    searchSection.scrollIntoView({ behavior: "smooth" });
  }

  function selectProgram(program) {
    selectedProgram = program;
  }

  function saveProgram() {
    if (selectedProgram && !savedPrograms.some(p => p.id === selectedProgram.id)) {
      savedPrograms = [...savedPrograms, selectedProgram];
      sortSavedProgramsByDeadline(); // Sort programs after adding a new one
    }
  }

  function sortSavedProgramsByDeadline() {
    savedPrograms.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  function sendReminder() {
    if (email && selectedProgram) {
      reminderMessage = `Reminder set for ${selectedProgram.name}. An email will be sent to ${email}.`;
      setTimeout(() => {
        email = '';
        reminderMessage = ''; // Clear message after a few seconds
      }, 5000);
    }
  }

  function clearSavedPrograms() {
    savedPrograms = [];
  }
</script>

<main class="container mx-auto p-4">
  <div class="hero">
    <div class="hero-content">
      <!-- Left Column (Text) -->
      <div class="hero-text">
        <h1>Find Your Future Major</h1>
        <h2>Discover the Best Academic Path for You</h2>
        <button class="action-link" on:click={scrollToSearch}>Get Started</button>
      </div>
      <!-- Right Column (Image) -->
      <div class="hero-image">
        <img src="/hero-img.webp" alt="a green tree depicting educational growth" />
      </div>
    </div>
  </div>

  <!-- Adding id to search section for scroll targeting -->
  <section id="search-section" class="mt-20 h-screen">
    <h3 class="text-3xl font-bold mb-6 text-easypath-blue"> Personalized Program Planner</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Left Side: Search and Filters -->
      <div class="bg-gray-100 border-2 border-easypath-blue p-4 rounded-lg overflow-y-auto max-h-screen">
        <h2 class="text-xl font-semibold mb-4 text-easypath-blue">Search and Filter Programs</h2>
        <input
          type="text"
          bind:value={searchQuery}
          on:input={handleInteraction}
          placeholder="Search for programs..."
          class="w-full p-2 border border-easypath-blue rounded mb-4"
        />
        <input
          type="text"
          bind:value={filters.location}
          on:input={handleInteraction}
          placeholder="Filter by location..."
          class="w-full p-2 border border-easypath-blue rounded mb-4"
        />
        <div class="mb-4">
          <label for="degreeType">Degree Type:</label>
          <select bind:value={filters.degreeType} on:change={handleInteraction} class="w-full p-2 border rounded">
            <option value="">All</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
          </select>


            <label> <input type="checkbox" bind:checked={computer_science} /> <strong>Computer Science 🖥️</strong> </label>
            <br>
            <label> <input type="checkbox" bind:checked={business_administration} /> <strong>Business Administration 📈</strong></label>
            <br>
            <label> <input type="checkbox" bind:checked={psychology} /> <strong>Psychology 🧠</strong></label>
            <br>
            <label> <input type="checkbox" bind:checked={biology} /> <strong>Biology 🔬</strong></label>
            <br>
            <label> <input type="checkbox" bind:checked={law} /> <strong>Law ⚖️</strong></label>


          
        </div>

        {#if userInteracted}
          {#if filteredPrograms.length > 0}
            <ul>
              {#each filteredPrograms as program}
                <li class=" mb-2 cursor-pointer bg-white hover:bg-gray-200 p-2 rounded-lg" on:click={() => selectProgram(program)} tabindex="0">
                  <!-- <span style="color: #0ecf0e;">{program.name}</span>  -->
                  {program.name} at {program.university}
                  <!-- <span style="color: #19966e;">{program.university}</span> -->
                </li>
              {/each}
            </ul>
          {:else}
            <p>No programs to display. Please enter a search query or adjust the filters.</p>
          {/if}
        {/if}
      </div>

      <!-- Right Side: Show Selected Program -->
      <div class="bg-gray-100 border-2 border-easypath-blue p-4 rounded-lg h-fit sticky top-0">
        <h2 class="text-xl font-semibold mb-4 text-easypath-blue">Program Information</h2>
        {#if selectedProgram}
          <h3>{selectedProgram.name} at {selectedProgram.university}</h3>
          <p><strong>Location:</strong> {selectedProgram.location}</p>
          <p><strong>Degree Type:</strong> {selectedProgram.degreeType}</p>
          <p><strong>Application Deadline:</strong> {selectedProgram.deadline}</p>
          <br>

          <img style="width:200px, height:200px" src={selectedProgram.url}>
          <br>
          <button on:click={saveProgram} class="bg-blue-500 text-white mt-2 px-4 py-2 rounded hover:bg-blue-600">
            Save to My Programs
          </button>

          <!-- Send Reminder -->
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

          <!-- Display reminder message -->
          {#if reminderMessage}
            <p class="mt-2 text-green-600 font-semibold">{reminderMessage}</p>
          {/if}
        {:else}
          <p>Select a program to view details.</p>
        {/if}
      </div>
    </div>

    <!-- Saved Programs Section -->
    <div class="bg-gray-100 border-2 border-easypath-blue p-4 rounded-lg h-fit sticky top-0 mt-8">
      <h2 class="text-xl font-semibold mb-4 text-easypath-blue">Saved Programs</h2>
      {#if savedPrograms.length > 0}
        <ul>
          {#each savedPrograms as program}
            <li class="mb-2 bg-white hover:bg-gray-200 p-2 rounded-lg">
              {program.name} at {program.university} <br>
              <strong>Deadline:</strong> {program.deadline}
            </li>
          {/each}
        </ul>
        <button on:click={clearSavedPrograms} class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
          Clear Program List
        </button>
      {:else}
        <p>You haven't saved any programs yet.</p>
      {/if}
    </div>
  </section>
</main>

<style>

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
    padding: 2rem 0;
    background-color: #f0f8ff;
    /* margin-bottom: 2rem; Separation from the section below */
    height: 100%;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
    padding: 0 2rem;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
  }

  .hero-text h1 {
    margin-bottom: 1rem;
    font-size: 3.2rem;
    color: #1e3a8a;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    animation: fadeInDown 1s ease-out;
  }

  .hero-text h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: #3b82f6;
    font-weight: 500;
    animation: fadeInUp 1s ease-out 0.5s;
    animation-fill-mode: both;
  }

  .action-link {
    background-color: #1e3a8a;
    color: white;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .action-link:hover {
    background-color: #3b82f6;
  }

  .h2 {
    color: #007bff;
  }


  #search-section {
    margin-top: 200px;
    scroll-margin-top: 150px;

    color: #555;

    /*Allow overflow to fix display bug when result list and/or saved programs list is expanded dynamically*/
    /*Display bug: search-section is expanded but footer does not move, causing footer to not stay on screen bottom and to overlay contents*/
    overflow: auto;
  
    /*From W3School*/
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
	}

  /*From W3School*/
	/* Hide scrollbar for Chrome, Safari and Opera */
	#search-section::-webkit-scrollbar {
	  display: none;
	}


  .hero-image img {
    width: 80%; /* Adjust the size as per your preference */
    border-radius: 50%; /* Make the image rounded */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* Increased shadow */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Transition for both transform and shadow */
    animation: move 3s infinite alternate ease-in-out; /* Subtle moving animation */
  }

  .hero-image img:hover {
    transform: scale(1.05); /* Slightly enlarge the image on hover */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4); /* Add more shadow on hover */
  }

  /* Keyframes for moving animation */
  @keyframes move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px); /* Adjust the movement distance */
    }
  }


</style>