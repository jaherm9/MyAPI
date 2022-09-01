const HelloController= require("../controllers/HelloController")

const express = require('express');
const StudentsController = require("../controllers/StudentsController");
const JWTPractice = require("../controllers/JWTPractice");
const router = express.Router();

// This is my first get routing
router.get("/hello-get", HelloController.HelloGet)
router.post("/hello-post", HelloController.HelloPost)


// Mongoose CRUD Operation
router.post("/InsertStudents", StudentsController.InsertStudents)
router.get("/ReadStudents", StudentsController.ReadStudents)
router.post("/UpdateStudent/:id", StudentsController.UpdateStudent)
router.post("/DeleteStudent/:id", StudentsController.DeleteStudent)

module.exports = router;

// Create JWT Token

router.get("/CreateToken", JWTPractice.CreateToken)

router.get("/DecodeToken", JWTPractice.DecodeToken)