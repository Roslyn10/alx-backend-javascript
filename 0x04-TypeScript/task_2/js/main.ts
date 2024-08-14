export interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

export interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

export class Director Implements DirectorInterface {
	workFromHome() {
		return `Working from home`;
	}

	getToWork() {
		return `Getting a coffee break`;
	}

	workDirectorTasks() {
		return `Getting to director tasks`;
	}
}

export class Teacher Implements TeacherInterface {
	workFromHome() {
		return `Cannot work from home`;
	}

	getCoffeeBreak() {
		return `Getting to work`;
	}

	workTeacherTasks() {
		return `Getting to work`;
	}
}

export function CreateEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	}
	return new Director();
}
