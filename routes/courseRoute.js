const express = require('express');
const {
    listCourses,
    createForm,
    createCourse,
    editForm,
    updateCourse,
    deleteCourse
} = require('../controllers/courseController');
const { isAuthenticated } = require('../middleware/auth');

const courseRouter = express.Router();

courseRouter.get("/courses", isAuthenticated, listCourses);
courseRouter.get("/courses/create", isAuthenticated, createForm);
courseRouter.post("/courses/create", isAuthenticated, createCourse);
courseRouter.get("/courses/edit/:id", isAuthenticated, editForm);
courseRouter.post("/courses/edit/:id", isAuthenticated, updateCourse);
courseRouter.post("/courses/delete/:id", isAuthenticated, deleteCourse);

module.exports = courseRouter;