const express = require('express')

const app = express();

const port = 3000;

app.get('/', function (req,res){
    res.send("Hello Boys!");
})

app.get('/home', function (req,res){
    res.sendFile(__dirname + '/pages/home.html');
})

app.get('/about', function (req,res){
    res.sendFile(__dirname + '/pages/about.html');
})

app.get('/contact', function (req,res){
    res.sendFile(__dirname + '/pages/contact.html');
})


app.post('/home', function(req,res){
    res.send("Wassup Bro")
})

app.listen(port,function(){
    console.log('Listening at port:' + port)
});