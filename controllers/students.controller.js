const model = require('../models/students.model');

function postStudent(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing student name'
    });
  }

  const newStudent = {
    name: req.body.name,
    id: model.length,
  };
  /**
   * Adding our new student to our list of student by pushing it as a new element.
   * And as the response to our post requests, 
   * if the student was added successfully, 
   * let's return the JSON for that new student.
   */
  model.push(newStudent);
  res.json(newStudent);
}

function getStudents(req, res) {
  res.json(model);
}
/**
 * Informational responses (100-199)
 * Successful responses (200-299)
 * Redirects (300-399)
 * Client Errors (400-499)
 * Server Errors (500-599) 
 */
function getStudent(req, res) {
  const studentId = Number(req.params.studentId);
  const student = model[studentId];
  if (student) {
    // The requests return a successful response
    res.status(200).json(student);
  } else {
    // The requests return an error response
    res.status(404).json({
      error: 'Student does not exist !'
    });
  }
}

module.exports = {
  postStudent,
  getStudents,
  getStudent,
};