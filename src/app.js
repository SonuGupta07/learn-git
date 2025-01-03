const express = require("express");
const app = express();

// it will handle all request which is on port 3000 no matter what is the url
// app.use((req,res)=>{
//     res.send("hello from the server")
// }) if we comment this then the downside code will run
//it will only handle for /test
//playing with route 
app.use("/ab?c",(req,res)=>{
    res.send("Playing with route 1");
})


app.use("/ab+c",(req,res)=>{
    res.send("playing with route 2");
})
app.use("/ab*cd",(req,res)=>{
    res.send("playing with route 3");
})
app.use("/a(bc)?d",(req,res)=>{
    res.send("playing with route 4");
})
app.get("/hello",(req,res)=>{
    res.send("this is get request ")
})

app.use((req,res)=>{
    res.send("this is dashboard")
})

app.listen(3000,()=>{
    console.log("server is listen at port 3000")
});
