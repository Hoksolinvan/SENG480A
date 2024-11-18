<script>
        import profileDetailList from "./profileList";
        import { onMount } from 'svelte';

        let pf = "";
        let loginAcc = "";
        let savedPrograms = [];

        onMount(() => {
                // Load which account is logged in from localStorage
                // null if none is logged in
                pf = JSON.parse(localStorage.getItem('ezpathUsername'));
                savedPrograms = JSON.parse(localStorage.getItem('savedPrograms')) || [];
                loginAcc = profileDetailList.filter(profile => profile.email === pf)[0];
        });

        // Copy-paste from DecisionSupport.svelte because it's easier to do this than
        // trying to debug import-export between files at 1AM
        function getRemainingTime(deadline) {
                // Start of today in user's timezone
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                // Start of deadline day in user's timezone
                const deadlineDate = new Date(deadline);
                deadlineDate.setHours(0, 0, 0, 0);
                
                // Add one day if deadline has passed to show correct count
                const timeLeft = deadlineDate - today;
                let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                
                // If deadline has passed (negative days), adjust to 1
                if (daysLeft < 0) {
                        daysLeft = 1;
                }
                
                return daysLeft;
        }

        // Copy-paste from DecisionSupport.svelte because it's easier to do this than
        // trying to debug import-export between files at 1AM
        function getStatus(daysLeft) {
                if (daysLeft <= 0) {
                return { label: 'Deadline Passed', color: 'text-red-600' };
                } else if (daysLeft <= 7) {
                return { label: `Due Soon (${daysLeft} days left)`, color: 'text-yellow-600' };
                } else {
                return { label: `On Track (${daysLeft} days left)`, color: 'text-green-600' };
                }
        }
</script>

<main>
        {#if pf===null}
                <h1>
                        You aren't logged in at the moment. Please log in to continue to your destination!
                </h1>
        {:else if profileDetailList.filter(profile => profile.email === pf)}
                <div class="grid md:grid-cols-3 gap-8">
                        <div class="profile-container">
                                <h1 >Your Profile</h1>
                                <img 
                                        src={loginAcc.PFP} 
                                        alt={loginAcc.first_name}
                                        class="w-40 h-40 rounded-8 mb-4 object-cover m-auto"
                                />
                                <p>Name: {loginAcc.first_name + " " + loginAcc.last_name}</p>
                                <p>Email: {loginAcc.email}</p>
                        </div>
                        <div class="md:col-span-2">
                                <h1 >Deadlines</h1>


                                <!-- Copy-paste from DecisionSupport.svelte -->
                                {#each savedPrograms as program}
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div class="col-span-1 md:col-span-2 bg-gray-50 p-6 rounded-lg shadow-md">
                                          <h3 class="font-semibold text-lg text-blue-900 mb-4">
                                            {program.name} - {program.university} 
                                          </h3>
                                          <div class="grid grid-cols-1 gap-4 text-sm text-gray-600">
                                            <div class="bg-gray-100 p-3 rounded-lg flex items-center gap-2">
                                              <i class="fas fa-calendar-alt"></i>
                                              <span class="font-medium text-gray-800">
                                                Application Deadline: {new Date(program.deadline).toLocaleDateString()}
                                              </span>
                                            </div>
                                            <div class="bg-gray-100 p-3 rounded-lg flex items-center gap-2">
                                              <i class="fas fa-clock"></i>
                                              <span class="font-medium text-gray-800">Days Remaining:</span>
                                              <span class={getStatus(getRemainingTime(program.deadline)).color}>
                                                {getRemainingTime(program.deadline)}
                                              </span>
                                            </div>
                                            <div
                                              class="bg-gray-100 p-3 rounded-lg flex items-center gap-2 font-medium 
                                              {getStatus(getRemainingTime(program.deadline)).color}"
                                            >
                                              {getStatus(getRemainingTime(program.deadline)).label}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                     
                                {/each}
                        </div>
                </div>
        {/if}

<!-- 
        <div class="grid md:grid-cols-3 gap-8">
                <div class="profile-container">
                        <h1 >Your Profile</h1>
                        <img 
                                src={pf.PFP} 
                                alt={pf.first_name}
                                class="w-40 h-40 rounded-8 mb-4 object-cover m-auto"
                        />
                        <p>Name: {pf.first_name + " " + pf.last_name}</p>
                        <p>Email: {pf.email}</p>
                </div>
                <div class="md:col-span-2">
                        <h1 >Deadlines</h1>
                </div>
        </div> -->
</main>

<style>
        h1 {
		font-size: 1.5rem; /* Bigger h1 size */
		text-align: center;
		margin-bottom: 1rem;
		color: #007bff;
		font-family: 'Poppins', sans-serif;
	}

        .profile-container {
		border: 2px solid #007bff;
		padding: 1.5rem;
		border-radius: 10px;
		background-color: #f9f9f9;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	} 
</style>