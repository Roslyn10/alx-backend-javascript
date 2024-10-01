// A small HTTP server
// Listen on port 1245 and return plain text
// / should display 'Hello Holberton School!'
// /students should display 'This is the list of our students

const http = require('http');
const fs = require('fs').promises;

const countStudents = (dataPath) => {
  return fs.stat(dataPath)
    .then((stats) => {
      if (!stats.isFile()) {
        throw new Error('Cannot load the database');
      }
      return fs.readFile(dataPath, 'utf-8');
    })
    .then((data) => {
      const fileLines = data.trim().split('\n');
      if (fileLines.length === 0) {
        throw new Error('Cannot load the database');
      }

      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        if (studentRecord.length === 1 && studentRecord[0] === '') {
          continue;
        }
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      let output = `Number of students: ${Object.values(studentGroups).reduce((pre, cur) => pre + cur.length, 0)}\n`;
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        output += `Number of students in ${field}: ${group.length}. List: ${studentNames}\n`;
      }
      return output.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
};

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents('database.csv')
      .then((studentInfo) => {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${studentInfo}`);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server running on http://localhost:1245');
});

module.exports = app;
