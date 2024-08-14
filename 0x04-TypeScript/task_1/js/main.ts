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
