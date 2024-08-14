export interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

export interface Director extends Teacher {
	numberOfReports: number;
}

export interface printTeacher = {
	(firstName: string, lastName: string): string,
};

export function printTeacher(firstName: string, lastName: string) : string = {
	return = `${firstName[0]}`.`${lastName},
};

export interface StudentClassConstructor {
	new (firstname: string, lastName: string): StudentCLassInterface;
}

export interface StduentClassInterface {
	firstName: string;
	lastName: string;
	WorkOnHomework(): string;
	displayName(): string;
}


export class StudentClass = {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	WorkOnHomework(): string {
		return `Currently working`;
	}

	displayName(): string {
		return this.firstName;
	}
}
