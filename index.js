const express = require("express");
const app     = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
app.get('/a', (req, res) => {
    res.sendFile(__dirname + "/a.html");
})
app.get('/qb', (req, res) => {
    res.sendFile(__dirname + "/qb.html");
})
app.get('/movies', (req, res) => {
    res.sendFile(__dirname + "/movies.html");
})
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + "/style.css");
})
app.listen(3000, ()=>{console.log("...")});