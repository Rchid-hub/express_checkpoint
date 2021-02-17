const express = require("express");
const app = express();

//creating server 

const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is listening on port http://localhost:${port}`);
});


const myLogger=function(req,res,next){
    let date = new Date();
    if((6>date.getDay()>0)||(20>date.getHours()>9)){
    console.log("Welcome")
        next();
    }
        else{
            res.send("Sorry,we Are Closed!!");
        }
}

app.use(myLogger);

//applying routes

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/webpages/home.html");
    res.sendFile(__dirname + "/webpages/service.html");
    res.sendFile(__dirname + "/webpages/contact.html");
});

app.use(express.static(__dirname + "/webpages"));

// creating middlewear


