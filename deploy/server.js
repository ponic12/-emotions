var express = require("express");
var path = require("path");
var app = express();

const port = process.env.PORT;

app.set('port', port);
app.use(express.static(__dirname + '/www'));

// Body Parser
let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


// Morgan (Debugger)
let morgan = require("morgan");
app.use(morgan('dev'));


// Mongo Database
// var mongoose = require("mongoose");
// var x = mongoose.connect('mongodb://heroku_s02n5vkc:ir3b3le9l7ia04kbl4pejn4ula@ds145010.mlab.com:45010/heroku_s02n5vkc');
// console.log('mongo:',x);
// var UserSchema = new mongoose.Schema({
//     first_name: {type:String, require:true},
//     last_name: {type:String, require:true},
//     email: {type:String, require:true},
//     editable: {type:Boolean, require:true}
// });
// var User = mongoose.model('User', UserSchema);



// Routes

// Get all users
// app.get("/users",(req, res, next)=>{
//     console.log("Server > GET '/users' ");
//     User.find({}, (err, users)=>{
//         if (err) return res.json(err);
//         else return res.json(users);
//     });
// });

// Create User
// app.post("/users",(req, res, next)=>{
//     var x = req.body;
//     delete x._id;
//     console.log("Server > POST '/users' > user ", x);
//     //var x = {first_name:'Pablito',last_name:'Massad',email:'pmassad@yahoo.com', editable:true};
//     User.create(x, (err, user)=>{
//         if(err) return res.json(err)
//         else return res.json(user)
//     }); 
// });

// Delete User
// app.delete("/users/:id",(req, res, next)=>{
//     console.log("Server > DELETE '/users' > user ", req.body);
//     User.deleteOne({_id:req.params.id}, (err, data)=>{
//         if(err) return res.json(err)
//         else return res.json(true)
//     }); 
// });

app.all('*', (req, res, next) => {
    console.log('serving index.html.....');
    res.sendfile(path.resolve('./www/index.html'));
});

//app.get('/[^\.]+$', function(req, res){
//    res.set('Content-Type', 'text/html')
//        .sendFile(path.join(__dirname, '/www/index.html'));
//});


app.listen(app.get('port'), function(){
    console.log('Node app is running at localhost:'+app.get('port'));
});