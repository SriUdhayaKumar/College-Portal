const express=require(`express`);
const router = express.Router();

const student = require("./student.js");
router.get("/",(req,res)=>{
    res.render("search");
});

router.post("/",(req,res)=>{
    
    let name = req.body.stdname;

    let s = student.find(st =>
        st.stdname.toLowerCase() === name.toLowerCase()
    );

    res.render("searchResult",{student:s});
});

module.exports = router;