const express = require("express");

const app = express();

//Printing Hello World
app.get("/",(req, res) => {
    res.json({msg: "Hello World"});
});

app.listen(8000, () => {
    console.log("Application is running");
});

