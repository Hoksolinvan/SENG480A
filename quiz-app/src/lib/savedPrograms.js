import { writable } from 'svelte/store';

function createSavedProgramsStore() {
	// Initialize from localStorage or empty array
	const storedPrograms = localStorage.getItem('savedPrograms');
	const initialPrograms = storedPrograms ? JSON.parse(storedPrograms) : [];
	const { subscribe, set, update } = writable(initialPrograms);

	return {
		subscribe,
		add: (program) => {
			update((programs) => {
				if (!programs.some((p) => p.id === program.id)) {
					const newPrograms = [...programs, program];
					localStorage.setItem('savedPrograms', JSON.stringify(newPrograms));
					return newPrograms;
				}
				return programs;
			});
		},
		remove: (programId) => {
			update((programs) => {
				const newPrograms = programs.filter((p) => p.id !== programId);
				localStorage.setItem('savedPrograms', JSON.stringify(newPrograms));
				return newPrograms;
			});
		},
		clear: () => {
			localStorage.removeItem('savedPrograms');
			set([]);
		}
	};
}

export const savedPrograms = createSavedProgramsStore();