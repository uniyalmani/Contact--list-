const mongoose = require("mongoose"); 
mongoose.connect("mongodb://localhost/contact-list_db");
const db = mongoose.connection;
db.on('error',console.error.bind(console, "error connecting to db"));
db.once('open', function(){
        console.log("succesfully connected to data base");
})