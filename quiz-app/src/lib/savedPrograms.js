import { writable } from 'svelte/store';

function createSavedProgramsStore() {
	const isBrowser = typeof window !== 'undefined'; // Check if running in the browser

	// Initialize the store with data from localStorage or an empty array
	const initialPrograms = isBrowser
		? JSON.parse(localStorage.getItem('savedPrograms') || '[]')
		: [];

	// Create the writable store
	const { subscribe, set, update } = writable(initialPrograms);

	// Sync changes to localStorage (only in the browser)
	if (isBrowser) {
		subscribe((programs) => {
			localStorage.setItem('savedPrograms', JSON.stringify(programs));
		});
	}

	return {
		subscribe,
		add: (program) => {
			update((programs) => {
				if (!programs.some((p) => p.id === program.id)) {
					const updatedPrograms = [...programs, program];
					if (isBrowser) {
						localStorage.setItem('savedPrograms', JSON.stringify(updatedPrograms));
					}
					return updatedPrograms;
				}
				return programs;
			});
		},
		remove: (programId) => {
			update((programs) => {
				const updatedPrograms = programs.filter((p) => p.id !== programId);
				if (isBrowser) {
					localStorage.setItem('savedPrograms', JSON.stringify(updatedPrograms));
				}
				return updatedPrograms;
			});
		},
		clear: () => {
			if (isBrowser) {
				localStorage.removeItem('savedPrograms');
			}
			set([]);
		}
	};
}

export const savedPrograms = createSavedProgramsStore();
