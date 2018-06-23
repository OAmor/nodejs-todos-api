const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var id = new ObjectID;

console.log(id)

MongoClient.connect('mongodb://localhost:27017/TodosApp',(err , client) => {
    if(err){
        return console.log('Failed To Connect To The DB');
    }

    console.log('Connection with success ! ');

    //Chose the database
    const db = client.db('TodosApp');


    // db.collection('Todos').insertOne({
    //     title : "fourth todo title",
    //     body : "fourth todo body"
    // },(err, result) => {
    //     if(err){
    //         return console.log('Can\'t insert this todo',err);
    //     }
    //     console.log('Inserted with success ! ');
    // })
    var id = new ObjectID('5b2e23a089ab3e19bd229f4a');
    db.collection('Todos').count().then((count) => {
        console.log('All Todos number');
        console.log(count)
    },(err)=>{
        console.log('Cant fetching data',err);
    });
    client.close();
});