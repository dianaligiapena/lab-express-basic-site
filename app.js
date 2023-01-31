const express = require('express')
const app = express() // app is the server

app.use(express.static("public"));

//make a route
app.get('/home', (req,res) => {
    res.sendFile(__dirname + "/views/home.html");
} ); //string - the route + callback)

app.get('/about', (req,res) => {
    res.sendFile(__dirname + "/views/about.html");
} );

app.listen(3000, () => {
    console.log("now listening");
} ); // 3000 = port no, callback function