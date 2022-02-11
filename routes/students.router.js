const express = require('express');

const studentsController = require('../controllers/students.controller');

const studentsRouter = express.Router();

studentsRouter.use((req, res, next) => {
  console.log('ip address:', req.ip);
  next();
});
studentsRouter.post('/', studentsController.postStudent);
studentsRouter.get('/', studentsController.getStudents);
studentsRouter.get('/:studentId', studentsController.getStudent);

module.exports = studentsRouter;