export interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const Student1: Student = {
	firstName: "Lexie",
	lastName: "Callahan",
	age: 24,
	location: "South Sudan",
};

const Student2: Student = {
	firstName: "Kezia",
	lastName: "Wood",
	age: 23,
	location: "Tunisia",
};

const StudentList: Array<Student> = [
	Student1,
	Student2,
];

const table = document.createElement('StudentTable');
table.border = 1;

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

const headers = ['FirstName', 'lastName', 'Age', 'Location'];
headers.ForEach(headerText => {
	constt the = document.createElement('th');
	th.textContent = headerText;
	headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createelement('tbody');

StudentList.forEach(student => {
	const row = document.createElement('tr');

	const firstNameCell = document.createElement('td');
	firstNameCell.textContent = student.firstname;

	const lastNameCell = document.createElement('td');
	lastNameCell.textContent = student.lastname;

	const ageCell = document.createElement('td');
	ageCell.textContent = student.age.toString();

	const locationCell = document.createElement('td');
	locationCell.textContent = student.location;

	row.appendChild(firstNameCell);
	row.appendChild(lastNameCell);
	row.appendChild(ageCell);
	row.appendChild(locationCell);

	tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);
