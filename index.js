const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1250;

let data = {
    username: "admin",
    password: "pw",
    email: "email@email.com",
    courses: {
        course: {
            classId: "CMSC2204",
            courseName: "Mobile",
            startDate: "8/30/2023",
            endDate: "12/21/2023"
        },
        course1: {
            classId: "CMSC1255",
            courseName: "Server Side",
            startDate: "8/22/2021",
            endDate: "2/2/2022"
    },
        course2: {
            classId: "CMSC2203",
            courseName: "C#",
            startDate: "8/29/2021",
            endDate: "3/8/2022"
        }
    }
}

app.get('/getUser', (req, res) => {
    try{
        return res.status(200).json(data);
    }
    catch{
        return res.status(500);
    }
});

app.post('/addUser', (req,res) =>{
    try {
        let userVar = req.body.user.username;

        console.log(userVar);
        return res.status(200).json("Added user" + userVar + "successfully");
    }
    catch{
        return res.status(500);
    }
});

app.listen(PORT, () =>{
    console.log(`Server Started on port ${PORT}`);
});