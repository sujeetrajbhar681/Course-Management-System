# 📚 Online Course Management System

## 📖 Overview
The **Online Course Management System** is a session-based web application built using **Node.js, Express.js, MongoDB, Mongoose, and EJS** following the **MVC Architecture**. It allows users to register, log in securely, and manage courses with complete CRUD (Create, Read, Update, Delete) functionality.

---

## 🚀 Features

- 👤 User Registration
- 🔐 Secure Login with bcrypt Password Hashing
- 🛡️ Session-based Authentication using express-session
- 🚪 Logout Functionality
- ➕ Add New Courses
- 📋 View All Courses
- ✏️ Update Existing Courses
- 🗑️ Delete Courses
- 🔒 Protected Routes (Only authenticated users can access)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Bootstrap 5
- Express Session
- bcrypt

---

## 📂 Project Structure

```
CourseManagementSystem/
│
├── app.js
├── db.js
├── package.json
│
├── models/
│   ├── userModel.js
│   └── courseModel.js
│
├── controllers/
│   ├── userController.js
│   └── courseController.js
│
├── middleware/
│   └── auth.js
│
├── routes/
│   ├── userRoute.js
│   └── courseRoute.js
│
├── public/
│   └── css/
│       └── style.css
│
├── views/
│   ├── partials/
│   ├── register.ejs
│   ├── login.ejs
│   ├── dashboard.ejs
│   ├── courses.ejs
│   ├── create-course.ejs
│   └── edit-course.ejs
│
└── Screenshots/
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/sujeetrajbhar681/Course-Management-System.git
```

Move into the project directory

```bash
cd Course-Management-System
```

Install dependencies

```bash
npm install
```

---

## ▶️ Run the Application

```bash
node app.js
```

or (if using nodemon)

```bash
nodemon app.js
```

Open your browser and visit

```
http://localhost:4000
```

---

## 📸 Screenshots

### Register Page

![Register Page](Screenshots/register.png)

---

### Login Page

![Login Page](Screenshots/login.png)

---

### Dashboard

![Dashboard](Screenshots/dashboard.png)

---

### Add Course

![Add Course](Screenshots/add-course.png)

---

### Display Courses

![Courses List](Screenshots/courses-list.png)

---

### Update Course

![Update Course](Screenshots/update-course.png)

---

### Delete Course (Before)

![Delete Before](Screenshots/delete-before.png)

---

### Delete Course (After)

![Delete After](Screenshots/delete-after.png)

---

### MongoDB Collections

![MongoDB Collections](Screenshots/mongodb-collections.png)

---

## 📦 Dependencies

- express
- mongoose
- ejs
- express-session
- bcrypt
- dotenv *(optional)*
- nodemon *(development)*

---
