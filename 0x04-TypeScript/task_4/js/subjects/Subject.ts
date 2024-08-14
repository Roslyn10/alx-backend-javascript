namespace Subjects {
	export interface Subject {
		teacher: Subject.Teacher;

		const setTeacher(teacher: Subject.Teacher) {
			this.teacher = teacher;
		}
	}
}
