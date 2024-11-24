<script>
        import { onMount } from 'svelte';
    
        let profile = {
            firstName: "",
            lastName: "",
            email: "",
            education: {
                highSchool: "",
                graduationYear: "",
                academicInterests: []
            },
            location: "",
            bio: "",
            languages: [],
            joinDate: "",
            achievements: []
        };
    
        onMount(() => {
            // Simulated profile data
            profile = {
                firstName: "Avery",
                lastName: "Thompson",
                email: "demo@easypath.ca",
                education: {
                    highSchool: "Central High School",
                    graduationYear: "2024",
                    academicInterests: ["Computer Science", "Mathematics", "Physics"]
                },
                location: "Victoria, British Columbia",
                bio: "Dedicated high school senior with a strong foundation in STEM subjects.",
                languages: ["English", "French"],
                achievements: [
                    "National Math Competition Finalist 2023",
                    "Science Fair Gold Medalist",
                    "Computer Science Club President"
                ],
                joinDate: "January 2024"
            };
        });
    </script>
    
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100">
                <!-- Header Section -->
                <div class="px-8 pt-8 pb-6 border-b border-gray-100">
                    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <!-- Profile Picture -->
                        <img 
                            src="s2.png"
                            alt="Profile"
                            class="w-32 h-32 rounded-xl object-cover shadow-sm border-2 border-gray-50"
                        />
                        
                        <!-- Basic Info -->
                        <div class="flex-1 text-center sm:text-left">
                            <h1 class="text-2xl font-bold text-gray-900 mb-1">
                                {profile.firstName} {profile.lastName}
                            </h1>
                            <p class="text-gray-500 mb-3">{profile.email}</p>
                            <p class="text-gray-600 max-w-2xl text-sm">{profile.bio}</p>
                            
                            <!-- Quick Info Pills -->
                            <div class="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                                
                                <span class="py-1 bg-gray-50 text-gray-600 rounded-full text-sm">
                                   <span class="font-bold"> Location:   </span>  
                                    {profile.location}
                                </span>
                            </div>
                        </div>
                        
                        <!-- Edit Button -->
                        <button 
                            class="w-fit px-4 py-2 bg-blue-900 text-white rounded-lg shadow-lg 
                 hover:bg-blue-800 transform hover:scale-105 transition-all
                 duration-300text-sm font-medium border border-gray-200"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>
                
                <!-- Details Section -->
                <div class="p-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- Education Section -->
                        <div>
                            <h2 class="text-lg font-semibold text-gray-900 mb-4">Education</h2>
                            <div class="space-y-3">
                                <div>
                                    <h3 class="font-medium text-gray-900">{profile.education.highSchool}</h3>
                                    <p class="text-sm text-gray-500">Expected Graduation {profile.education.graduationYear}</p>
                                </div>
                                <div>
                                    <h4 class="text-sm font-medium text-gray-700 mb-2">Academic Interests</h4>
                                    <div class="flex flex-wrap gap-2">
                                        {#each profile.education.academicInterests as interest}
                                            <span class="px-2 py-1 bg-blue-50 text-blue-600 rounded text-sm">
                                                {interest}
                                            </span>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Achievements Section -->
                        <div>
                            <h2 class="text-lg font-semibold text-gray-900 mb-4">Achievements</h2>
                            <ul class="space-y-2">
                                {#each profile.achievements as achievement}
                                    <li class="flex items-start gap-2 text-gray-600">
                                        
                                        <span class="text-sm">- {achievement}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                        
                        <!-- Additional Info -->
                        <div class="space-y-6">
                            <div>
                                <h2 class="text-lg font-semibold text-gray-900 mb-2">Languages</h2>
                                <div class="flex gap-2">
                                    {#each profile.languages as language}
                                        <span class=" py-1 bg-gray-50 text-gray-600 rounded text-sm">
                                            {language}
                                        </span>
                                    {/each}
                                </div>
                            </div>
                        </div>
                        
                        <!-- Join Date -->
                        <div>
                            <h2 class="text-lg font-semibold text-gray-900 mb-2">Account Details</h2>
                            <p class="text-sm text-gray-600">
                                Member since {profile.joinDate}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <style>
        :global(body) {
            background-color: #f9fafb;
        }
    </style>