<script>
        import profileList from "./profileList";
</script>

<main>
        <!-- {#if sessionStorage.getItem("username")===null}
                <h1>
                        You aren't logged in at the moment. Please log in to continue to your destination!
                </h1>
        {:else if profileList.filter(profile => profile.email === (sessionStorage.getItem("username")))}
                <div class="grid md:grid-cols-3 gap-8">
                        <div class="profile-container">
                                <h1 >Your Profile</h1>
                                <img 
                                        src={profileList.PFP} 
                                        alt={profileList.first_name}
                                        class="w-20 h-20 rounded-full mb-4 object-cover float-left mr-4"
                                />
                        </div>
                        <div class="md:col-span-2">
                        </div>
                </div>
        {/if} -->
        <div class="grid md:grid-cols-3 gap-8">
                <div class="profile-container">
                        <h1 >Your Profile</h1>
                        <img 
                                src={profileList[0].PFP} 
                                alt={profileList[0].first_name}
                                class="w-20 h-20 rounded-8 mb-4 object-cover mr-4"
                        />
                        <p>Name: {profileList[0].first_name + " " + profileList[0].last_name}</p>
                        <p>Email: {profileList[0].email}</p>
                </div>
                <div class="md:col-span-2">
                        <h1 >Deadlines</h1>
                </div>
        </div>
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