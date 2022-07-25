const router = require('express').Router();
const User = require("../models/User");
//signup
router.post("/register",  (req,res) => {
    
    res.send("yo it's the register route")
    
});

module.exports = router;