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

	// Function to get prerequisites dynamically
	function getDynamicPrerequisites(program) {
		const prerequisiteDictionary = {
			STEM: ['Math 12', 'Physics 12', 'English 12', 'Computer Science 11'],
			Engineering: ['Math 12', 'Physics 12', 'Chemistry 12'],
			Science: [
				'Approved English 11',
				'Pre-calculus 11',
				'Approved science 11',
				'Approved social studies 11/12',
				'English Studies 12 or English First Peoples 12 (minimum 67%)',
				'Pre‑calculus 12 (minimum 73%)',
				'Approved science 12',
				'Approved academic 12'
			], //Original: 'Math 12', 'Biology 12', 'Chemistry 12'
			'Business Administration': [
				'Approved English 11',
				'Pre-calculus 11',
				'Approved science 11',
				'Approved social studies 11/12',
				'English Studies 12 or English First Peoples 12 (minimum 67%)',
				'Pre‑calculus 12 (minimum 73%)'
			],

			Commerce: [
				'Approved English 11',
				'Pre-calculus 11',
				'Approved science 11',
				'Approved social studies 11/12',
				'English Studies 12 or English First Peoples 12 (minimum 67%)',
				'Pre‑calculus 12 (minimum 73%)'
			], //Original: 'Economics 12', 'English 12', 'Math 11'
			Arts: ['History 12', 'English 12', 'Art 11'],
			default: ['English 12', 'Math 11', 'Social Studies 12']
		};

		let category = 'default';
		if (program.name.includes('Engineering')) category = 'Engineering';
		else if (program.name.includes('Science')) category = 'Science';
		else if (program.name.includes('Business')) category = 'Business';
		else if (program.name.includes('Arts')) category = 'Arts';
		// ad-hoc bug fix for demo
		else if (program.name.includes('Commerce')) category = 'Commerce';
		else if (program.category) category = program.category;

		const prerequisites = prerequisiteDictionary[category] || prerequisiteDictionary.default;

		return prerequisites.map((name, index) => ({
			id: index + 1,
			name,
			completed: false,
			required: true
		}));
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
		},
		updatePrerequisites: () => {
			update((programs) =>
				programs.map((program) => ({
					...program,
					prerequisites: program.prerequisites?.length
						? program.prerequisites
						: getDynamicPrerequisites(program)
				}))
			);
		}
	};
}

export const savedPrograms = createSavedProgramsStore();
