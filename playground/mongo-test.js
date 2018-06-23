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

    /* Create */
    // db.collection('Todos').insertOne({
    //     title : "fourth todo title",
    //     body : "fourth todo body",
    //     num : 16
    // },(err, result) => {
    //     if(err){
    //         return console.log('Can\'t insert this todo',err);
    //     }
    //     console.log('Inserted with success ! ');
    // })

    /* Count */
    //var id = new ObjectID('5b2e23a089ab3e19bd229f4a');
    // db.collection('Todos').count().then((count) => {
    //     console.log('All Todos number');
    //     console.log(count)
    // },(err)=>{
    //     console.log('Cant fetching data',err);
    // });

    /* Delete */
     var id = new ObjectID('5b2e79a52d52540bd2fd49c8');
    // db.collection('Todos').findOneAndDelete({_id : id}).then((result) => {
    //     console.log("Deleted !");
    //     console.log(result.ok);
    // },(err) => {
    //     cons   ole.log('Cant delete that');
    //     console.log(err);
    // });


    /* Update */
    db.collection('Todos').findOneAndUpdate(
        {_id : id},
        {
            $set:{
                title : "updated"
            },
            $inc:{
                num : 2
            }
        }
    ).then((result) => {
        console.log("Updated with success !");
        console.log(result);
    },(err) => {
        console.log(err);
    });
    client.close();
});