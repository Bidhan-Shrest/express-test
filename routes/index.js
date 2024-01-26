const express = require("express");
const router = express.Router();
const bookRouter = require("./book.route");

router.get("/", (req, res)=>{
    res.json({ msg: "Heello from Indexx"});
});

router.use("/books", bookRouter);
// Route 1
// router.get("/", (req, res) =>{
//     res.json({msg:"Hello World"});
// });

// //Route 2 
// router.get("/:routes", (req, res) => {
//     const first=req.params.fname;
//     const last=req.params.lname;

//     res.json({msg: `Hello ${first} ${last}`});
// });

module.exports=router;