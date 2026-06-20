const express = require("express");
const router = express.Router();

const student = require("./student.js");

router.get("/:id", (req,res) => {

    let id = parseInt(req.params.id);

    let index = student.findIndex(s => s.id === id);

    if(index !== -1){
        student.splice(index,1);
    }

    res.redirect("/views");
});

module.exports = router;