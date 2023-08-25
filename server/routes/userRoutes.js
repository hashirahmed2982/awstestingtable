let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let UserSchema = require("../models/user");

router.get("/users", (req, res , next) => {
    console.log("user");
UserSchema.find().then((result) => {
    res.json(result);
})
.catch((err)=>{
    next(err);
})
});



module.exports = router;