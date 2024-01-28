const express = require("express");
const indexRouter = require("./express-exercise");


const app = express();

app.use("/", indexRouter);

//Printing Hello World
// app.get("/",(req, res) => {
//     res.json({msg: "Hello World"});
// });

app.listen(8000, () => {
    console.log("Application is running");
});

