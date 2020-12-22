const express = require('express');
const path = require('path');
const port = 8000;
const db = require("./confi/mongoose");
const Contact =     require('./modles/contact')
const app = express();
app.use(express.urlencoded());
app.use(express.static('assets'));
app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'view'));
var contact = [{
    name: "Ashutosh",
    phoneNo: "9354618038"
},
{
    name: "nitin",
    phoneNo: "8755091229"
}
];
app.get('/', function (req, res) {
    Contact.find({},function (err,contacts){
        if (err){
            console.log('error in feching contact from daata base');
            return
        }
        return res.render('index', {
            title: "Contacts",
            contact_list: contacts
    
        })
    });
  
});

app.get('/home', function (req, res) {
    return res.render('home');
})
app.get('/delete-contact/:id', function (req, res) {
    let id =  req.params.id;
    console.log(id);
    Contact.findByIdAndDelete(id,function (err){
        if (err){
            console.log('error in deleting obj');
            return;
        }
        return res.redirect('back');
    });
    

});
app.post('/create-contact', function (req, res) {
    // return res.redirect("home");
    // contact.push({
    //     name:req.body.name,
    //     phoneNo:req.body.phoneNo
    // });
    Contact.create({
        name: req.body.name,
        phoneNo:req.body.phoneNo
    }, function(err, newContact){
        if(err){
            console.log('error in creating contact');
            return;
        }
        console.log('*****', newContact);
        return res.redirect('back');
    })

});

app.listen(port, function (err) {
    if (err) {
        console.log("Error in running server", err);
    }
    console.log("server is running fine");
});