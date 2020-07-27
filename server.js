const express = require('express');
const app = express();


app.get("/", (req,res){
    res.send("app is ready");
})


let port = 5000;


app.listen(port, (err) => {
    if(err) throw err;
    console.log("express is running on port number "+port)
} )