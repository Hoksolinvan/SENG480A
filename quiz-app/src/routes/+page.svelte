<script>
  import DecisionSupport from '$lib/DecisionSupport.svelte';
  import ProgramComparison from '$lib/ProgramComparison.svelte';

  let searchQuery = '';
  let computer_science = false;
  let business_administration = false;
  let psychology = false;
  let biology = false;
  let law = false;
  let programs = [
    { 
        id: 1, 
        name: 'Computer Science', 
        university: 'University of Victoria', 
        location: 'Victoria, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 25, 
        deadline: '2024-12-01', 
        url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg', 
        cost: 22000 // Tuition + living costs for Victoria, BC (Bachelor's)
    },
    { 
        id: 2, 
        name: 'Business Administration', 
        university: 'University of British Columbia', 
        location: 'Vancouver, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 35, 
        deadline: '2024-11-15', 
        url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg', 
        cost: 25000 // Vancouver has higher living costs (Bachelor's)
    },
    { 
        id: 3, 
        name: 'Environmental Science', 
        university: 'Thompson Rivers University', 
        location: 'Kamloops, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 40, 
        deadline: '2024-10-30', 
        url: 'https://universitystudy.ca/wp-content/uploads/2013/08/Thompson-Rivers_banner_web-960x.jpg', 
        cost: 20000 // Lower living costs in Kamloops, BC (Bachelor's)
    },
    { 
        id: 4, 
        name: 'Mechanical Engineering', 
        university: 'University of Calgary', 
        location: 'Calgary, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 30, 
        deadline: '2024-12-05', 
        url: 'https://ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba', 
        cost: 23000 // Moderate costs for Calgary, AB (Bachelor's)
    },
    { 
        id: 5, 
        name: 'Psychology', 
        university: 'University of Alberta', 
        location: 'Edmonton, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 45, 
        deadline: '2024-11-30', 
        url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg', 
        cost: 22000 // Moderate costs for Edmonton, AB (Bachelor's)
    },
    { 
        id: 6, 
        name: 'Law', 
        university: 'University of British Columbia', 
        location: 'Vancouver, BC', 
        degreeType: 'Master', 
        admissionRate: 20, 
        deadline: '2024-12-20', 
        url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg', 
        cost: 30000 // Higher cost for Master's in Vancouver, BC
    },
    { 
        id: 7, 
        name: 'Biology', 
        university: 'Simon Fraser University', 
        location: 'Burnaby, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 50, 
        deadline: '2024-11-25', 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s', 
        cost: 24000 // Burnaby, BC, moderate cost (Bachelor's)
    },
    { 
        id: 8, 
        name: 'Environmental Engineering', 
        university: 'University of Calgary', 
        location: 'Calgary, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 35, 
        deadline: '2024-12-10', 
        url: 'https://ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba', 
        cost: 23000 // Calgary, AB (Bachelor's)
    },
    { 
        id: 9, 
        name: 'Nursing', 
        university: 'University of British Columbia', 
        location: 'Vancouver, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 20, 
        deadline: '2024-12-15', 
        url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg', 
        cost: 27000 // Nursing costs slightly higher in Vancouver, BC (Bachelor's)
    },
    { 
        id: 10, 
        name: 'Finance', 
        university: 'University of Alberta', 
        location: 'Edmonton, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 30, 
        deadline: '2024-11-20', 
        url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg', 
        cost: 22000 // Moderate costs for Edmonton, AB (Bachelor's)
    },
    { 
        id: 11, 
        name: 'Engineering Physics', 
        university: 'University of Victoria', 
        location: 'Victoria, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 35, 
        deadline: '2024-11-25', 
        url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg', 
        cost: 23000 // Higher for engineering program in Victoria, BC
    },
    { 
        id: 12, 
        name: 'Biochemistry', 
        university: 'University of Calgary', 
        location: 'Calgary, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 40, 
        deadline: '2024-12-10', 
        url: 'https://ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba', 
        cost: 23000 // Calgary, AB (Bachelor's)
    },
    { 
        id: 13, 
        name: 'Arts and Sciences', 
        university: 'University of British Columbia Okanagan', 
        location: 'Kelowna, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 50, 
        deadline: '2024-11-30', 
        url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg', 
        cost: 21000 // Kelowna is slightly cheaper (Bachelor's)
    },
    { 
        id: 14, 
        name: 'Computer Science', 
        university: 'University of Alberta', 
        location: 'Edmonton, AB', 
        degreeType: 'Master', 
        admissionRate: 30, 
        deadline: '2024-12-15', 
        url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg', 
        cost: 28000 // Higher cost for Master's program in Edmonton, AB
    },
    { 
        id: 15, 
        name: 'Environmental Studies', 
        university: 'Simon Fraser University', 
        location: 'Burnaby, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 45, 
        deadline: '2024-11-20', 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s', 
        cost: 24000 // Burnaby, BC, moderate cost
    },
    { 
        id: 16, 
        name: 'Political Science', 
        university: 'University of Victoria', 
        location: 'Victoria, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 45, 
        deadline: '2024-12-15', 
        url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg', 
        cost: 22000 // Victoria, BC, moderate cost
    },
    { 
        id: 17, 
        name: 'Sociology', 
        university: 'University of Calgary', 
        location: 'Calgary, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 25, 
        deadline: '2024-11-20', 
        url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba', 
        cost: 23000 // Calgary, AB, moderate cost
    },
    { 
        id: 18, 
        name: 'Mathematics', 
        university: 'University of British Columbia Okanagan', 
        location: 'Kelowna, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 35, 
        deadline: '2024-12-05', 
        url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg', 
        cost: 21000 // Kelowna, BC, slightly lower cost
    },
    { 
        id: 19, 
        name: 'Economics', 
        university: 'University of Alberta', 
        location: 'Edmonton, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 40, 
        deadline: '2024-11-25', 
        url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg', 
        cost: 22000 // Edmonton, AB, moderate cost
    },
    { 
        id: 20, 
        name: 'Environmental Engineering', 
        university: 'University of British Columbia', 
        location: 'Vancouver, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 30, 
        deadline: '2024-11-30', 
        url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg', 
        cost: 27000 // Vancouver, BC, higher cost
    },
    { 
        id: 21, 
        name: 'Film Studies', 
        university: 'Simon Fraser University', 
        location: 'Burnaby, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 45, 
        deadline: '2024-12-15', 
        url: 'https://www.sfu.ca/content/sfu/sfucommunity/woodwards/photo-gallery/jcr:content/main_content/image_0.img.960.auto.jpg/1634310628497.jpg', 
        cost: 24000 // Burnaby, BC, moderate cost
    },
    { 
        id: 22, 
        name: 'History', 
        university: 'University of Calgary', 
        location: 'Calgary, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 25, 
        deadline: '2024-11-20', 
        url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba', 
        cost: 23000 // Calgary, AB, moderate cost
    },
    { 
        id: 23, 
        name: 'Philosophy', 
        university: 'University of British Columbia Okanagan', 
        location: 'Kelowna, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 35, 
        deadline: '2024-12-05', 
        url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg', 
        cost: 21000 // Kelowna, BC, slightly lower cost
    },
    { 
        id: 24, 
        name: 'Education', 
        university: 'University of Alberta', 
        location: 'Edmonton, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 40, 
        deadline: '2024-11-25', 
        url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg', 
        cost: 22000 // Edmonton, AB, moderate cost
    },
    { 
        id: 25, 
        name: 'Geography', 
        university: 'University of British Columbia', 
        location: 'Vancouver, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 30, 
        deadline: '2024-11-30', 
        url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg', 
        cost: 27000 // Vancouver, BC, higher cost
    },
    { 
        id: 26, 
        name: 'Indigenous Studies', 
        university: 'University of Victoria', 
        location: 'Victoria, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 40, 
        deadline: '2024-12-05', 
        url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg', 
        cost: 22000 // Victoria, BC, moderate cost
    },
    { 
        id: 27, 
        name: 'Computer Science', 
        university: 'University of Northern British Columbia', 
        location: 'Prince George, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 25, 
        deadline: '2024-12-01', 
        url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT', 
        cost: 20000 // Prince George, BC, lower cost
    },
    { 
        id: 28, 
        name: 'Anthropology', 
        university: 'University of British Columbia Okanagan', 
        location: 'Kelowna, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 35, 
        deadline: '2024-12-05', 
        url: 'https://www.ubc.ca/_assets/img/our-campuses/ubco-aerials-our-campus_1920x700.jpg', 
        cost: 21000 // Kelowna, BC, slightly lower cost
    },
    { 
        id: 29, 
        name: 'Sustainable Energy Engineering', 
        university: 'Simon Fraser University', 
        location: 'Burnaby, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 30, 
        deadline: '2024-12-01', 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s', 
        cost: 24000 // Burnaby, BC, moderate cost
    },
    { 
        id: 30, 
        name: 'Physics', 
        university: 'University of Calgary', 
        location: 'Calgary, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 45, 
        deadline: '2024-11-25', 
        url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba', 
        cost: 23000 // Calgary, AB, moderate cost
    },
    { 
        id: 31, 
        name: 'Architecture', 
        university: 'University of British Columbia', 
        location: 'Vancouver, BC', 
        degreeType: 'Master', 
        admissionRate: 25, 
        deadline: '2025-01-20', 
        url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg', 
        cost: 32000 // Higher cost for Master's in Vancouver, BC
    },
    { 
        id: 32, 
        name: 'Human Resource Management', 
        university: 'University of Alberta', 
        location: 'Edmonton, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 40, 
        deadline: '2024-12-05', 
        url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg', 
        cost: 22000 // Moderate cost for Bachelor's in Edmonton, AB
    },
    { 
        id: 33, 
        name: 'Environmental Science', 
        university: 'University of Calgary', 
        location: 'Calgary, AB', 
        degreeType: 'Master', 
        admissionRate: 30, 
        deadline: '2025-01-10', 
        url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba', 
        cost: 30000 // Higher cost for Master's in Calgary, AB
    },
    { 
        id: 34, 
        name: 'Political Economy', 
        university: 'University of Victoria', 
        location: 'Victoria, BC', 
        degreeType: 'Master', 
        admissionRate: 20, 
        deadline: '2025-01-30', 
        url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg', 
        cost: 28000 // Higher cost for Master's in Victoria, BC
    },
    { 
        id: 35, 
        name: 'Public Relations', 
        university: 'Royal Roads University', 
        location: 'Victoria, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 50, 
        deadline: '2024-11-30', 
        url: 'https://cdn.prod.website-files.com/667c59abb9df9789d17407a6/667dd6863400fe779b562af4_UNIVERSITY-GUIDEBOOK-2022-ROYAL-ROADS-01-1.jpeg', 
        cost: 21000 // Lower cost for Bachelor's in Victoria, BC
    },
    { 
        id: 36, 
        name: 'Data Science', 
        university: 'University of British Columbia', 
        location: 'Vancouver, BC', 
        degreeType: 'Master', 
        admissionRate: 15, 
        deadline: '2025-02-15', 
        url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg', 
        cost: 33000 // High cost for Data Science Master's in Vancouver, BC
    },
    { 
        id: 37, 
        name: 'Sociology', 
        university: 'University of Northern British Columbia', 
        location: 'Prince George, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 40, 
        deadline: '2024-12-10', 
        url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT', 
        cost: 20000 // Lower cost for Bachelor's in Prince George, BC
    },
    { 
        id: 38, 
        name: 'Nursing', 
        university: 'Mount Royal University', 
        location: 'Calgary, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 30, 
        deadline: '2024-11-15', 
        url: 'https://www.unbc.ca/sites/default/files/styles/listed_image/public/featured-link/dsc2878crop.jpg.webp?itok=rzZEleNT', 
        cost: 23000 // Moderate cost for Nursing Bachelor's in Calgary, AB
    },
    { 
        id: 39, 
        name: 'Criminology', 
        university: 'Simon Fraser University', 
        location: 'Burnaby, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 35, 
        deadline: '2024-12-01', 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_rwTmM_uiGLg5DXBmRPXg72gqQ8FpEq8Ig&s', 
        cost: 24000 // Moderate cost for Bachelor's in Burnaby, BC
    },
    { 
        id: 40, 
        name: 'Environmental Design', 
        university: 'University of Calgary', 
        location: 'Calgary, AB', 
        degreeType: 'Master', 
        admissionRate: 20, 
        deadline: '2025-01-25', 
        url: 'https://www.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-10/mainCampus-hero_1.jpg?itok=NfR3C6Ba', 
        cost: 31000 // Higher cost for Environmental Design Master's in Calgary, AB
    },
    { 
        id: 41, 
        name: 'Agriculture', 
        university: 'University of British Columbia', 
        location: 'Vancouver, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 25, 
        deadline: '2024-11-20', 
        url: 'https://www.ubc.ca/_assets/img/aerial-main-mall-800x253.jpg', 
        cost: 27000 // Higher cost for Bachelor's in Vancouver, BC
    },
    { 
        id: 42, 
        name: 'Graphic Design', 
        university: 'Emily Carr University of Art + Design', 
        location: 'Vancouver, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 30, 
        deadline: '2024-12-01', 
        url: 'https://dsai.ca/wp-content/uploads/Emily-Carr-Hero.jpg', 
        cost: 26000 // Moderate cost for Bachelor's in Vancouver, BC
    },
    { 
        id: 43, 
        name: 'Music Composition', 
        university: 'University of Alberta', 
        location: 'Edmonton, AB', 
        degreeType: 'Bachelor', 
        admissionRate: 40, 
        deadline: '2024-11-30', 
        url: 'https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4.jpeg', 
        cost: 22000 // Moderate cost for Bachelor's in Edmonton, AB
    },
    { 
        id: 44, 
        name: 'Linguistics', 
        university: 'University of Victoria', 
        location: 'Victoria, BC', 
        degreeType: 'Bachelor', 
        admissionRate: 35, 
        deadline: '2024-12-10', 
        url: 'https://cms.macleans.ca/wp-content/uploads/2018/04/MACU01_BC_VICTORIA02.jpg', 
        cost: 22000 // Moderate cost for Bachelor's in Victoria, BC
    }
];
//console.log("Programs in +page.svelte:", programs);

  let filters = {
    location: '',
    degreeType: '',
  };

  let savedPrograms = [];
  //console.log("Saved Programs:", savedPrograms);
  let filteredPrograms = [];
  let selectedProgram = [];
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
  if (!selectedProgram.some(p => p.id === program.id)) {
    selectedProgram = [...selectedProgram, program];
  }
}

function saveProgram() {
  if (selectedProgram.length > 0) {
    selectedProgram.forEach(program => {
      if (!savedPrograms.some(p => p.id === program.id)) {
        savedPrograms = [...savedPrograms, program];
      }
    });
    sortSavedProgramsByDeadline();
  }
}

  function sortSavedProgramsByDeadline() {
    savedPrograms.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  // async function sendReminder() {
  //   if (email && selectedProgram) {
  //     reminderMessage = `Reminder set for ${selectedProgram.name}. An email will be sent to ${email}.`;
  //     setTimeout(() => {
  //       email = '';
  //       reminderMessage = ''; // Clear message after a few seconds
  //     }, 5000);
  //   }
  // }

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
				const result = await request.json();
				console.log('Form results were successfully posted: ', result);
			} else {
				console.error('Error Submitting Form', request.statusText);
        console.error(error);
			}
		} catch (error) {
			console.log("Failed to submit Form\n");
      
		}
	}

  function clearSavedPrograms() {
    savedPrograms = [];
    selectedProgram = [];
  }

  // comparison of programs
  let showComparison = false;

  function toggleComparison() {
    showComparison = !showComparison;
  }
</script>

<main class="container mx-auto px-4 py-8 min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <div class="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
    <div class="grid md:grid-cols-2 gap-12 max-w-7xl w-full px-6">
      <!-- Text Content -->
      <div class="flex flex-col justify-center space-y-6">
        <h1 class="text-5xl font-bold text-blue-900 leading-tight animate-fade-in">
          Find Your Future Major
        </h1>
        <h2 class="text-2xl text-blue-600 font-medium animate-fade-in-delayed">
          Discover the Best Academic Path for You
        </h2>
        <button 
          class="w-fit px-8 py-4 bg-blue-900 text-white rounded-lg shadow-lg 
                 hover:bg-blue-800 transform hover:scale-105 transition-all
                 duration-300 text-lg font-semibold"
          on:click={scrollToSearch}
        >
          Get Started
        </button>
      </div>
      <!-- Image -->
      <div class="flex items-center justify-center">
        <img 
          src="/hero-img.webp" 
          alt="Educational growth" 
          class="w-4/5 rounded-full shadow-2xl transform hover:scale-105 
                 transition-all duration-500 animate-float"
        />
      </div>
    </div>
  </div>

  <!-- Search Section -->
  <section id="search-section" class="mt-20 max-w-7xl mx-auto">
    <h3 class="text-3xl font-bold mb-8 text-blue-900 text-center">
      Personalized Program Planner
    </h3>
    
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Search and Filters Panel -->
      <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <h2 class="text-2xl font-semibold mb-6 text-blue-900">
          Search and Filter Programs
        </h2>
        
        <!-- Search Input -->
        <div class="space-y-4 mb-6">
          <input
            type="text"
            bind:value={searchQuery}
            on:input={handleInteraction}
            placeholder="Search for programs..."
            class="w-full px-4 py-3 rounded-lg border-2 border-blue-100 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                   transition-all duration-300"
          />
          
          <input
            type="text"
            bind:value={filters.location}
            on:input={handleInteraction}
            placeholder="Filter by location..."
            class="w-full px-4 py-3 rounded-lg border-2 border-blue-100 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                   transition-all duration-300"
          />
        </div>

        <!-- Degree Type Selection -->
        <div class="mb-6">
          <label class="block text-gray-700 font-medium mb-2">Degree Type:</label>
          <select 
            bind:value={filters.degreeType} 
            on:change={handleInteraction}
            class="w-full px-4 py-3 rounded-lg border-2 border-blue-100 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="">All Degrees</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <!-- Program Type Checkboxes -->
        <div class="space-y-3 mb-6">
          <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
            <input type="checkbox" bind:checked={computer_science} class="w-4 h-4 text-blue-600" />
            <span class="font-medium">Computer Science 🖥️</span>
          </div>
          <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
            <input type="checkbox" bind:checked={business_administration} class="w-4 h-4 text-blue-600" />
            <span class="font-medium">Business Administration 📈</span>
          </div>
          <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
            <input type="checkbox" bind:checked={psychology} class="w-4 h-4 text-blue-600" />
            <span class="font-medium">Psychology 🧠</span>
          </div>
          <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
            <input type="checkbox" bind:checked={biology} class="w-4 h-4 text-blue-600" />
            <span class="font-medium">Biology 🔬</span>
          </div>
          <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
            <input type="checkbox" bind:checked={law} class="w-4 h-4 text-blue-600" />
            <span class="font-medium">Law ⚖️</span>
          </div>
        </div>

        <!-- Search Results -->
        {#if userInteracted}
          {#if filteredPrograms.length > 0}
            <ul class="space-y-2 max-h-96 overflow-y-auto">
              {#each filteredPrograms as program}
                <li 
                  class="p-4 rounded-lg bg-gray-50 hover:bg-blue-50 cursor-pointer
                         transition-colors duration-200 border border-gray-200"
                  on:click={() => selectProgram(program)}
                  tabindex="0"
                >
                  <div class="font-semibold text-blue-900">{program.name}</div>
                  <div class="text-gray-600">{program.university}</div>
                </li>
              {/each}
            </ul>
          {:else}
            <p class="text-gray-500 text-center py-4">No programs match your criteria.</p>
          {/if}
        {/if}
      </div>

      <!-- Program Details Panel -->
      <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 h-fit sticky top-4">
        <h2 class="text-2xl font-semibold mb-6 text-blue-900">Program Information</h2>
        
        {#if selectedProgram && selectedProgram[0]}
  <div class="space-y-4">
    <h3 class="text-xl font-semibold text-blue-800">
      {selectedProgram[0].name} at {selectedProgram[0].university}
    </h3>
    
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

    <img 
    src={selectedProgram[0].url}
    alt={selectedProgram[0].university}
    class="w-full h-48 object-cover rounded-lg shadow-md"
  />

            <button 
              on:click={saveProgram}
              class="w-full py-3 bg-blue-600 text-white rounded-lg font-medium
                     hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
            >
              Save to My Programs
            </button>

            <!-- Reminder Section -->
            <div class="mt-6 space-y-3">
              <h4 class="font-semibold text-gray-700">Set Reminder</h4>
              <input
                type="email"
                bind:value={email}
                placeholder="Your email address"
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
              <div class="mt-3 p-3 bg-green-100 text-green-700 rounded-lg">
                {reminderMessage}
              </div>
            {/if}
          </div>
        {:else}
          <p class="text-gray-500 text-center py-4">Select a program to view details.</p>
        {/if}
      </div>
    </div>

    <!-- Saved Programs Section -->
    <div class="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h2 class="text-2xl font-semibold mb-6 text-blue-900">Saved Programs</h2>
      
      {#if savedPrograms.length > 0}
        <ul class="space-y-3">
          {#each savedPrograms as program}
            <li class="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div class="font-semibold text-blue-900">{program.name}</div>
              <div class="text-gray-600">{program.university}</div>
              <div class="text-sm text-gray-500 mt-1">
                <strong>Deadline:</strong> {program.deadline}
              </div>
            </li>
          {/each}
        </ul>
        
        <button 
          on:click={clearSavedPrograms}
          class="mt-6 w-full py-3 bg-red-600 text-white rounded-lg font-medium
                 hover:bg-red-700 transform hover:scale-105 transition-all duration-200"
        >
          Clear Program List
        </button>
      {:else}
        <p class="text-gray-500 text-center py-4">You haven't saved any programs yet.</p>
      {/if}
    </div>
  </section>

  <!-- Decision Support Section -->
  <section class="mt-8">
    {#if savedPrograms.length > 0}
      <DecisionSupport {savedPrograms} />
    {:else}
      <div class="text-center text-gray-500 py-8">
        Save some programs to start comparing them
      </div>
    {/if}
  </section>


  <!-- Program Comparison-->
   <section>
    <button class="toggle-button" on:click={toggleComparison}>
      {showComparison ? 'Hide Comparison' : 'Compare Selected Programs'}
  </button>
  
  {#if showComparison}
      <ProgramComparison {selectedProgram} />
  {/if}
</section>
</main>

<style>
  /* Keep only necessary custom styles */
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fade-in-delayed {
    0% { opacity: 0; transform: translateY(-20px); }
    50% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }

  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }

  .animate-fade-in-delayed {
    animation: fade-in-delayed 2s ease-out forwards;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .toggle-button {
        margin: 1rem 0;
        padding: 0.5rem;
        cursor: pointer;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
    }
</style>