const express = require("express");
const app = express();

const login = require(`./routes/Login.js`);
const Dashboard = require('./routes/dashboard.js');
const addStudent = require(`./routes/add.js`);
const viewStudent = require(`./routes/view.js`);
const deleteStudent = require(`./routes/delete.js`);

const student = require("./routes/student.js");


app.use(express.static("public"));

app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));


app.use("/",login);
app.use("/dashboard",Dashboard);
app.use("/addStudent",addStudent);

app.use("/views",viewStudent);
app.use("/delete",deleteStudent);

app.listen(3000,()=>{
    console.log("Server running on the port 3000"); 
});