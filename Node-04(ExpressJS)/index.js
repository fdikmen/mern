const fs=require("fs");
const http=require("http");

const myServer=http.createServer((request,response)=>{
    console.log("There is a request from:", request.url);
    fs.readFile('demo.html',(err,data)=>{
        if (err) {
            throw err;
        }
        response.end(data);
    })
});

myServer.listen(3000);