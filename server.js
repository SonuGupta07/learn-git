const http = require("node:http");
const server = http.createServer(function(req,res){
    if(req.url === "/getSecretData"){
        res.end("There is no secrete data")
    }
    res.end("hello world")
});
server.listen(3333);