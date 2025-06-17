const express = require("express");
const app = express();
const path = require("path");

const port =8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,'/public/cssFile')));
app.use(express.static(path.join(__dirname,'/public/js')));
// app.get("/", (req, res)=>{
//     res.render("home.ejs");
//     // res.send("this is home page");
// });
app.get("/rolldice", (req, res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{num:diceVal});
});

app.get("/hello",(req,res)=>{
    res.send("this is hello page");
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

// app.get("/ig/:username",(req,res)=>{
//     let {username}=req.params;
//     const followers=["tauhid","sanyam","mantu","Tausif"];
//     // console.log(username);
//     res.render("instagram.ejs",{username,followers});
// });


// project

app.get("/ig/:username",(req,res)=>{
    const {username}=req.params;
    const instaData=require("./data.json");
    const data = instaData[username];
    // console.log(data);
    if(data){
    res.render("instaData.ejs",{data});
    }else{
        res.render("error.ejs");
    }
    // console.log(instaData);
});
