const express = require(`express`);
const router = express.Router();

const student = require("./student.js");


router.get("/", (req,res)=>{
    res.render("views",{student});
});


router.post("/",(req,res)=>{

    let newStudent ={
        id:student.length + 1,
        stdname : req.body.stdname,
        age : req.body.age,
        department : req.body.department,
        year : req.body.year,
        mark : req.body.mark
    };
    student.push(newStudent);
    //  console.log(student);

    res.render("views",{student});
});

module.exports=router;
