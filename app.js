const express = require("express");
const app = express();

const login = require(`./routes/Login.js`);
const Dashboard = require('./routes/dashboard.js');
const addStudent = require(`./routes/add.js`);

app.use(express.static("public"));

app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));


app.use("/",login);
app.use("/dashboard",Dashboard);
app.use("/addStudent",addStudent);



app.listen(3000,()=>{
    console.log("Server running on the port 3000"); 
});