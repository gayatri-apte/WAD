const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Student = require('./models/student');

const app = express();

app.use(bodyParser.json());
app.use(cors());

/* MongoDB Connection */

mongoose.connect('mongodb://127.0.0.1:27017/collegeDB')

.then(() => {
    console.log("MongoDB Connected");
})

.catch((err) => {
    console.log(err);
});

/* HOME ROUTE */

app.get('/', (req, res) => {

    res.send("College Admission API Running");

});

/* CREATE API (POST) */

app.post('/addStudent', async (req, res) => {

    try {

        const student = new Student(req.body);

        await student.save();

        res.status(201).json(student);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

/* GET API */

app.get('/students', async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

/* PUT API */

app.put('/updateStudent/:id', async (req, res) => {

    try {

        const updatedStudent = await Student.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        res.json(updatedStudent);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

/* DELETE API */

app.delete('/deleteStudent/:id', async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id);

        res.json({
            message: "Student Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

/* SERVER */

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Server Running on Port ${PORT}`);

});