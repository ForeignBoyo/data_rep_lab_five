const express = require('express');
const app = express();
//localhost:3000
const port = 3000 
//including the package 
const path = require('path');
//include body parser
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//creating the roots
//listening for HTTP get request
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying');
})

//accessing the hello page 
//arrow function 
//app.get - web server is listening for a get request 
app.get('/hello/:name', (req, res) => {
    //this will log to the console 
    console.log(req.params.name);
    //sending back name chosen by you 
    res.send('Hello ' + req.params.name);
})

//listen for HTTP get request 
app.get('/api/movies', (req, res) => {
    //Json list which has 2 objects 
    const mymovies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    //sending JSON with res
    //send some JSON back 
    res.json({movies:mymovies});
});

//listening for get request for /test
//res.send for sending text
//res.json for sending JSON  
app.get('/test', (req, res) => {
    //determine what directory using package path
    res.sendFile(__dirname + '/index.html');
})

//listening for get request for /name 
app.get('/name', (req, res) => {
    //send back text
    res.send('Hello ' + req.query.fname + ' '+ req.query.lname);
})

//root point listening to post
app.post('/name' , (req, res) => {
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

//setting up the web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})