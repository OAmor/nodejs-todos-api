const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./mongoose/mongoose').mongoose;
const Todo = require('./models/todo').Todo;
const User = require('./models/user').User;

var app = express();
app.use(bodyParser.json());


app.post('/todos',(req,res) =>{
    var newTodo = new Todo({
        text:req.body.text
    });

    newTodo.save().then((result)=>{
        res.send(result);
    },(err)=>{
        res.status(400).send(err);
    });

   // res.send('hello');
});

app.get('/todos',(req,res)=>{
    Todo.find().then((result) => {
        res.send({result});
    },(err)=>{
        res.status(400).send(err);
    })
});

app.listen(3000,() => {
    console.log("Running on 3000");
})












