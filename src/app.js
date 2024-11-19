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
    console.log("handling first route");// the function you put in the middle  is known as middlware
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
/*
Middleware-> Middleware is a function in web frameworks (like Express.js) that sits 
between the client request and the server response. It processes requests, performs specific 
tasks, and decides whether to pass control to the next middleware function or send a response.
*/
// 1st way of writing middleware 
app.use("/admin",(req,res,next)=>{
    console.log("admin is getting checked");
    const token = "xyz";
    const isAdminAuthorizedUser = (token==="xyz");
    if(isAdminAuthorizedUser){
        console.log("user is authorized")
        next();
        


    }
    else{
        res.status(401).send("Unaauthorized User");
    }
});
app.get("/admin/getData",(req,res,next)=>{
    res.send("User data send");
});







app.listen(3000,()=>{
    console.log("server is started")
});