const express = require("express");



const app = express();






//note app.use is used for all call on the same route means any call can i make on that route 
//to seperate the call on the same route we use get post etc;

app.get("/hello/:userId",(req,res)=>{
    console.log(req.params)//for parameters
    console.log(req.query);// for query paramenter
    res.send({firstname:"sonu",lastname:"Gupta"})
});
//handling multiple route
app.use("/user",(req,res,next)=>{
    console.log("handling first route");
    next();
},(req,res)=>{
    console.log("handling second route");
    res.send("the route is handling")

})
//second way to handle the route 
app.use("/users",(req,res,next)=>{
    console.log("handling first route ");
    next();
})
app.use("/users",(req,res,next)=>{
    console.log("handling second route");
    res.send("the route is handling without error")
})







app.listen(3000,()=>{
    console.log("server is started")
});