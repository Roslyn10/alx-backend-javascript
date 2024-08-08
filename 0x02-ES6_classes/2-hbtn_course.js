export default class HolbertonCourse {
	constructor(name, length, students) {

		if (typeof name !== 'string') {
			throw new TypeError(`Name must be a string`);
		}
		if (typeof length !== 'number') {
			throw new TypeError(`Length must be a number`);
		}
		if(!Array.isArray(students) || !students.every(item => typeof item === 'string')) {
			throw new TypeError('Students must be an array of strings');
		}

		this._name = name;
		this._length = length;
		this._students = students;
	}

	getName() {
		return this._name;
	}

	setName(newName) {
		if (typeof newName !== 'string') {
			throw new TypeError('Name must be a string');
		}
		this._name = newName;
	}

	getLength() {
		return this._length;
	}

	setLength(newLength) {
		if (typeof newLength !== 'number') {
			throw new TypeError('Length must be a number');
		}
		this._length = newLength;
	}

	getStudents() {
		return this._students;
	}

	setStudents(newStudents) {
		if (!Array.isArray(newStudents) || !newStudents.every(item => typeof item == 'string')) {
			throw new TypeError('Students must be an array of strings');
		}
		this._student = newStudents;
	}
}

