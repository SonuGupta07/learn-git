const express = require("express");



const app = express();
const {adminAuth,userAdmin}=require("./middlewares/auth");



//1st way of handling error 
app.use("/users",(req,res)=>{
    throw new error("there is an error occured")
    res.send("user is get logged");
})
app.use("/",(err,req,res,next)=>{// if you are using this always keep it to the last
    if(err){
        console.log(err.message)
        res.status(501).send("something went wrong")
    }
})
// if two is there  first one req and second one is res 
// if there is three first one is req , res and third one is next 
// if there is four firs one is err , res, req, and the last one is next
//2nd way of handling error using try and catch
app.use("/admin",(req,res)=>{
    try{
        throw new error ("there is an error");
        res.send("user is getting loged");

    }
    catch(err){
        res.send("second way of handling error");

    }

})





app.listen(3000,()=>{
    console.log("server is started")
});