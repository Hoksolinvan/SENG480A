import { writable } from 'svelte/store';

function createSavedScholarshipsStore() {
	const isBrowser = typeof window !== 'undefined'; // Check if running in the browser

	// Initialize the store with data from localStorage or an empty array
	const initialScholarships = isBrowser
		? JSON.parse(localStorage.getItem('savedScholarships') || '[]')
		: [];

	// Create the writable store
	const { subscribe, set, update } = writable(initialScholarships);

	// Sync changes to localStorage (only in the browser)
	if (isBrowser) {
		subscribe((scholarships) => {
			localStorage.setItem('savedScholarships', JSON.stringify(scholarships));
		});
	}

	

	return {
		subscribe,
		add: (scholarship) => {
			update((scholarships) => {
				if (!scholarships.some((p) => p.id === scholarship.id)) {
					const updatedScholarships = [...scholarships, scholarship];
					if (isBrowser) {
						localStorage.setItem('savedScholarships', JSON.stringify(updatedScholarships));
					}
					return updatedScholarships;
				}
				return scholarships;
			});
		},
		remove: (scholarshipId) => {
			update((scholarships) => {
				const updatedScholarships = scholarships.filter((p) => p.id !== scholarshipId);
				if (isBrowser) {
					localStorage.setItem('savedScholarships', JSON.stringify(updatedScholarships));
				}
				return updatedScholarships;
			});
		},
		clear: () => {
			if (isBrowser) {
				localStorage.removeItem('savedScholarships');
			}
			set([]);
		},
		
	};
}

export const savedPrograms = createSavedScholarshipsStore();
