//
const readDatabase = require(../utils);

class StudentController {
	static getAllStudents(request, response) {
		readDatabase('./database.csv')
		.then((studentGroups) => {
			res.status(200).send("this is the list of our students\n");
			const sortedFiels = Object.keys(studentGroups).sort((a, b) => a.toLowerCase().localCompare(b.toLowerCase())));

		sortedFields.forEach((field) => {
			const students = studentGroups[field];
			const studentNames = students.map((student) => student.firstname).join(',');
			res.write('Number of students im ${field}: ${students.length}. List: ${studentNames}\n');
		});
		res.end();
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send('Cannot load the database');
		});
	}

  static getAllStudentsByMajor(request, response) {
    const` field = request.params.major;
    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(field in students)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${students[field].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}


module.exports = StudentsController;
