const express = require(`express`);
const router = express.Router();

const student = require("./student.js");

router.get("/:id", (req,res)=>{
   let id = parseInt(req.params.id);  
   let s = student.find(st=>st.id===id);

    if(!s){
        return res.send("Student not found");
    }

   
   res.render("update",{student:s});
});


router.post("/:id",(req,res)=>{

    let id = parseInt(req.params.id);
    let s = student.find(st=>st.id==id);

    s.stdname = req.body.stdname;
    s.age = req.body.age;
    s.department = req.body.department;
    s.year = req.body.year;
    s.mark = req.body.mark; 
    
    res.redirect("/views");
})


module.exports=router;