const express = require('express');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;

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

app.get('/todos',(req,res) => {
    Todo.find().then((result) => {
        res.send({result});
    },(err)=>{
        res.status(400).send(err);
    })
});

app.get('/todos/:id',(req,res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send("not valid");
    }else{
        Todo.findById(id).then((todo)=>{
            if(todo == null){
                res.status(404).send('not found!');
            }else{
                res.status(200).send({todo});
            }
        }).catch((err) => {
            res.status(400).send(err);
        })
    }
   // res.send('hello there');
});

app.listen(3000,() => {
    console.log("Running on 3000");
})












