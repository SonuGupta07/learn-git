const express = require("express");



const app = express();
const {adminAuth,userAdmin}=require("./middlewares/auth");



//third way of writing midllewares
app.get("/user",userAdmin,(req,res)=>{
    res.send("User data is send ");
})





app.listen(3000,()=>{
    console.log("server is started")
});