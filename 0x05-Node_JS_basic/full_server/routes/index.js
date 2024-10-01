// Links the classes AppContoller and StudentController

const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentContoller');

const router = express.Router();

router.get('/students', Studentscontroller.getAllStudents);

router.get('/', AppController.getHomepage);

router.get('/students/:major', Studentscontroller.getAllStudentsByMajor);

module.exports = router;
