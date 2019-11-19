
const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const bodyParser = require("body-parser");
const mongoose =  require ("mongoose");

const mongoDB = 'mongodb+srv://DBLFE:luis@cluster0-47zs3.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const driverSchema = new Schema ({
    name: String,
    team: String, 
    carnum: String 
});

const DriverModel = mongoose.model('drivers',driverSchema);


const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

    
app.get('/', (req, res) => res.send('Hello Driver!'))

app.get('/hello/:name',(req, res) => {
    console.log(req.params.name);
    res.send('GoodMorning! '  +  req.params.name)
})

    app.put('/api/driver/:id',(req,res)=>{
        console.log("edit" +req.params.id);
        DriverModel.findByIdAndUpdate(req,params.id,req,body,{new:true},(error,data)=>{
            res.send(data);
        })
    })



app.get('/name', (req, res) => {
    console.log('route calling');
    console.log(req.query.firstname);

    res.send('hello ' + req.query.lastname + ' ' + req.query.firstname)
})

app.get('/whatever', (req, res) => res.send('GoodBye!'))

app.get ('/test', (req, res) =>{
res.sendFile(path.join(__dirname + '/index.html'))
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/driver', (req, res,next) => {
 
    console.log ("get request") 
    DriverModel.find((err,data) =>{
        res.json({drivers:data});
    })   
    })

    app.delete('/api/drivers/:id', (req,res) =>{
console.log(req.params.id);

DriverModel.deleteOne({_id:req.params.id},(error,data)=>{
    if(error)
    res.json(error);
        res.json(data);
})
})

app.post('/api/drivers', (req,res) =>{
    console.log('post Sucessfull');
    console.log(req.body)
    console.log(req.body.name);
    console.log(req.body.team);
    console.log(req.body.carnum);


    DriverModel.create({
        name:req.body.name,
        team:req.body.team,
        carnum:req.body.carnum
    });

        res.json('data uploaded');

    })
 

app.post('/name', (req, res) => {
    console.log("post method");
    console.log(req.body.firstname);
    res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
    })
    
app.get('/api/drivers/:id',(req,res)=>{
    console.log(req.params.id);

    DriverModel.findById(req.params.id ,(err,data)=>{
  res.json(data);
    })
})

app.listen(PORT, () => 
console.log(`Example app listening on port ${PORT}!`))

/*
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://DBLFE:<password>@cluster0-47zs3.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const driverSchema = new Schema({
  name:String,
  team:String,
  carnum:String
});

const DriverModel = mongoose.model('driver',driverSchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/api/driver', (req,res,next) => {
  // const movies = [
  //   {
  //     "Title": "Avengers: Infinity War",
  //     "Year": "2018",
  //     "imdbID": "tt4154756",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  //   },
  //   {
  //     "Title": "Charlie Wilson's War",
  //     "Year": "2007",
  //     "imdbID": "tt0472062",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
  //   }];
  console.log("get request")
  DriverModel.find((err,data)=>{
    res.json({drivers:data});
  })
  
  // res.json({
  //   message: 'Posts fetched succesfully!',
  //   movies: movies
  // });
})

app.post('/api/drivers', (req,res) =>{
console.log('post Sucessfull');
console.log(req.body)
console.log(req.body.name);
console.log(req.body.team);
console.log(req.body.carnum);

DriverModel.create({
  name: req.body.name,
  team: req.body.team,
  carnum: req.body.carnum
});
res.json('data uploaded')


})

app.get('/api/drivers/:id',(req,res)=>{
  console.log(req.params.id);

  DriverModel.findById(req.params.id, (err, data)=>{
    res.json(data);
  })
})

app.listen(PORT, function () {
  console.log('Server is running on Port: ', PORT);
});
*/