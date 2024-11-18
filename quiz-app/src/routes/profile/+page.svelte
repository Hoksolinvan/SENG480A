<script>
        import profileDetailList from "./profileList";
        import { onMount } from 'svelte';

        let pf = "";
        let loginAcc = "";

        onMount(() => {
                // Load which account is logged in from localStorage
                // null if none is logged in
                pf = JSON.parse(localStorage.getItem('ezpathUsername'));
                loginAcc = profileDetailList.filter(profile => profile.email === pf)[0];
        });
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