const express = require("express");



const app = express();

app.use("/hello" ,(req,res)=>{
    res.send("hello from the homepage")
})
app.use("/sonu",(req,res)=>{
    res.send("this is from sonu")
})
app.use("/",(req,res)=>{
    res.send("this is home page")
})





app.listen(3000,()=>{
    console.log("server is started")
});