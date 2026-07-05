const { courseModel } = require('../models/courseModel');

const listCourses = async (req, resp) => {
    try {
        const courses = await courseModel.find();
        resp.render("courses", { courses, fullname: req.session.fullname });
    } catch (error) {
        console.log(error);
        resp.redirect("/dashboard");
    }
};

const createForm = (req, resp) => {
    resp.render("create-course", { fullname: req.session.fullname, error: null });
};

const createCourse = async (req, resp) => {
    try {
        const { courseName, trainerName, duration, fees } = req.body;
        if (!courseName || !trainerName || !duration || !fees) {
            return resp.render("create-course", { fullname: req.session.fullname, error: "All fields are required." });
        }
        await courseModel.create({ courseName, trainerName, duration, fees });
        resp.redirect("/courses");
    } catch (error) {
        console.log(error);
        resp.render("create-course", { fullname: req.session.fullname, error: "Something went wrong." });
    }
};

const editForm = async (req, resp) => {
    try {
        const course = await courseModel.findById(req.params.id);
        if (!course) return resp.redirect("/courses");
        resp.render("edit-course", { course, fullname: req.session.fullname, error: null });
    } catch (error) {
        console.log(error);
        resp.redirect("/courses");
    }
};

const updateCourse = async (req, resp) => {
    try {
        const { courseName, trainerName, duration, fees } = req.body;
        await courseModel.findByIdAndUpdate(
            req.params.id,
            { courseName, trainerName, duration, fees },
            { new: true }
        );
        resp.redirect("/courses");
    } catch (error) {
        console.log(error);
        resp.redirect("/courses");
    }
};

const deleteCourse = async (req, resp) => {
    try {
        await courseModel.findByIdAndDelete(req.params.id);
        resp.redirect("/courses");
    } catch (error) {
        console.log(error);
        resp.redirect("/courses");
    }
};

module.exports = { listCourses, createForm, createCourse, editForm, updateCourse, deleteCourse };