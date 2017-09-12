var express = require('express');//takes code from express package and puts it in this file
//^eventually runs a function which return a function
var bodyParser = require('body-parser');


var app = express(); // this says we want a new express app

var movies =[
    {title: 'Dumb and Dumber', rating: 'PG-13'},
    {title: 'Intersteller', rating: 'PG-13'},
]

app.use(bodyParser.json());
// use tell us to run that code on every single request that comes in,
// now will take text from http message and turn it into js object, and 
//add it into the req object in the side of express
app.get('/movies', function(req,res,next){
 console.log('hit the endpoint /movies')
 res.status(200).json(movies);
});

app.post('/movies', function (req, res, next){  //app when we have a get message and it is to the path of '/movies' run this function
    console.log(req.body);
    movies.push(req.body);
    res.status(200).json(movies)
                    //^ add this tothe body of the response 'object' which is actually a json string;
    // express will also pass in a response object (res), almost like you are buidling up an empty object to send back;

   
var hi = 'hello';
    // req is an JS that has info about the request, to make it easy for us to get stuff off of it
});

app.listen(3001, function(){
    console.log('app listening now');
}); //this port is listening for requests, is a loop but is supposed to be and shouldn't stop

