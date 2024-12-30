const express = require("express");
const app = express();

// it will handle all request which is on port 3000 no matter what is the url
// app.use((req,res)=>{
//     res.send("hello from the server")
// }) if we comment this then the downside code will run
//it will only handle for /test
app.use("/test",(req,res)=>{
    res.send("this is testing")
})
app.listen(3000,()=>{
    console.log("server is listen at port 3000")
});
