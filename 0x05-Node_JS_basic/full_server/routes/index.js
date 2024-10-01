// Links the classes AppContoller and StudentController

const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('./controllers/StudentContoller');

const router = express.Router();

router.get('/students', Studentcontroller.getAllStudents);

router.get('/', AppController.getHomepage);

router.get('/students/:major', Studentcontroller.getAllStudents);

module.exports = router;
