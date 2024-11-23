import { writable, derived } from 'svelte/store';

// Unified mock data for courses and programs
const initialCourses = {
	english: {
		id: 'english',
		taken: false,
		grade: 0,
		name: 'English 12',
		required: true,
		description: 'Required for all programs'
	},
	precalc: {
		id: 'precalc',
		taken: false,
		grade: 0,
		name: 'Pre-Calculus 12',
		required: true,
		description: 'Required for both Computer Science and Business'
	},
	physics: {
		id: 'physics',
		taken: false,
		grade: 0,
		name: 'Physics 12',
		required: false,
		description: 'Recommended for Computer Science'
	},
	chemistry: {
		id: 'chemistry',
		taken: false,
		grade: 0,
		name: 'Chemistry 12',
		required: false,
		description: 'Optional but beneficial'
	}
};

export const programRequirements = {
	'Computer Science': {
		minGrade: 80,
		required: ['english', 'precalc'],
		recommended: ['physics'],
		scholarships: [
			{
				name: 'CS Excellence Scholarship',
				criteria: { minGrade: 90, amount: '$4,000' },
				deadline: 'March 15, 2025'
			},
			{
				name: 'Technology Innovation Award',
				criteria: { minGrade: 85, amount: '$2,500' },
				deadline: 'April 30, 2025'
			}
		]
	},
	Business: {
		minGrade: 75,
		required: ['english', 'precalc'],
		recommended: [],
		scholarships: [
			{
				name: 'Business Leadership Award',
				criteria: { minGrade: 85, amount: '$3,500' },
				deadline: 'March 31, 2025'
			},
			{
				name: 'Entrepreneurship Excellence',
				criteria: { minGrade: 80, amount: '$2,000' },
				deadline: 'May 15, 2025'
			}
		]
	}
};

const mockPrograms = [
	{
		id: 1,
		university: 'University of Victoria',
		name: 'Computer Science',
		prerequisites: [
			{ id: 1, name: 'English 12', required: true, completed: false },
			{ id: 2, name: 'Pre-Calculus 12', required: true, completed: false },
			{ id: 3, name: 'Physics 12', required: true, completed: false },
			{ id: 4, name: 'Chemistry 12', required: false, completed: false }
		],
		applicationSteps: [
			{ id: 1, name: 'Submit online application', completed: false },
			{ id: 2, name: 'Submit recommendation letters', completed: false },
			{ id: 3, name: 'Submit official transcripts', completed: false },
			{ id: 4, name: 'Submit English language proficiency (if applicable)', completed: false }
		],
		minimumGrade: '85% overall average',
		additionalRequirements: 'Programming experience recommended but not required'
	},
	{
		id: 2,
		university: 'University of Victoria',
		name: 'Business Administration',
		prerequisites: [
			{ id: 1, name: 'English 12', required: true, completed: false },
			{ id: 2, name: 'Pre-Calculus 12', required: true, completed: false },
			{ id: 3, name: 'Two other Grade 12 academic courses', required: true, completed: false }
		],
		applicationSteps: [
			{ id: 1, name: 'Submit online application', completed: false },
			{ id: 2, name: 'Submit recommendation letters', completed: false },
			{ id: 3, name: 'Submit official transcripts', completed: false },
			{ id: 4, name: 'Submit English language proficiency (if applicable)', completed: false }
		],
		minimumGrade: '80% overall average',
		additionalRequirements: 'Supplemental application may be required'
	}
];

// Store for saved programs
export const savedPrograms = writable(mockPrograms);

// Create course store with methods
function createCourseStore() {
	const { subscribe, update } = writable(initialCourses);

	return {
		subscribe,
		toggleCourse: (courseId) =>
			update((courses) => ({
				...courses,
				[courseId]: {
					...courses[courseId],
					taken: !courses[courseId].taken,
					grade: !courses[courseId].taken ? courses[courseId].grade : 0
				}
			})),
		updateGrade: (courseId, grade) =>
			update((courses) => ({
				...courses,
				[courseId]: { ...courses[courseId], grade: Number(grade) }
			})),
		reset: () => update(() => initialCourses)
	};
}

export const courses = createCourseStore();
export const selectedProgram = writable('Computer Science');

// Derived stores for calculations
export const averageGrade = derived(courses, ($courses) => {
	const takenCourses = Object.values($courses).filter((course) => course.taken);
	if (takenCourses.length === 0) return 0;

	const total = takenCourses.reduce((sum, course) => sum + (course.grade || 0), 0);
	return Math.round(total / takenCourses.length);
});

export const eligibility = derived(
	[courses, selectedProgram, averageGrade],
	([$courses, $selectedProgram, $averageGrade]) => {
		const requirements = programRequirements[$selectedProgram] || { required: [], minGrade: 0 };
		const requiredCoursesMet = requirements.required.every(
			(courseId) => $courses[courseId]?.taken && $courses[courseId].grade >= requirements.minGrade
		);

		const meetsMinAvg = $averageGrade >= requirements.minGrade;
		const missingCourses = requirements.required.filter(
			(courseId) => !$courses[courseId]?.taken || $courses[courseId].grade < requirements.minGrade
		);

		return {
			eligible: requiredCoursesMet && meetsMinAvg,
			avgGrade: $averageGrade,
			missingCourses
		};
	}
);

export const availableScholarships = derived(
	[selectedProgram, averageGrade],
	([$selectedProgram, $averageGrade]) => {
		const requirements = programRequirements[$selectedProgram];
		return requirements.scholarships.filter(
			(scholarship) => $averageGrade >= scholarship.criteria.minGrade
		);
	}
);
