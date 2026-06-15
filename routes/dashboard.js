const express = require(`express`);
const router = express.Router();

router.post("/", (req, res) => {

    if(req.body.Username==="admin" && req.body.password==="1234"){
        res.render("dashboard");
    }
    else{
         res.send("Invalid User");
    }
});



module.exports=router;