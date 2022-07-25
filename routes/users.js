const router = require('express').Router();

router.get("/", (req,res)=>{
    res.send("yo it's the user route")
});

module.exports = router;