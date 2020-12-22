const mongoose = require('mongoose');

const contactShema = new mongoose.Schema({
    name:{
            type: String,
            required : true
    }
    ,phoneNo:{
        type :  String,
        required :true
}
})

const Contact = mongoose.model('Contact', contactShema);
module.exports = Contact