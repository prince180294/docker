const mongoose = require('mongoose');

mongoose.connect('mongodb://mongoserver:27017/princelist', {useNewUrlParser: true,
useUnifiedTopology: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
     //we are connected
     console.log("we are connected")
});

//schema and model defination
const todolistschema = new mongoose.Schema({
  name: String
});
const todolistmodel = mongoose.model('todolistmodel', todolistschema);

//data to be entered and saved into db
const listitem1 = new todolistmodel({ name: 'complete homework ' });
//console.log(listitem1.name); 
listitem1.save();

const listitem2 = new todolistmodel({ name: 'read emails ' });
//console.log(listitem2.name); 
listitem2.save();

const listitem3 = new todolistmodel({ name: 'complete app.js code ' });
//console.log(listitem3.name); 
listitem3.save();

//show all data
todolistmodel.find( function (err, todolistmodels) {
  if (err) return console.error(err);
  console.log(todolistmodels);
})

