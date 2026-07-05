const express = require('express');
const path = require('path');
const session = require('express-session');
const { connectDB } = require('./db');
const userRouter = require('./routes/userRoute');
const courseRouter = require('./routes/courseRoute');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: "coursesecret",
    resave: false,
    saveUninitialized: false
}));

app.use("/", userRouter);
app.use("/", courseRouter);

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});