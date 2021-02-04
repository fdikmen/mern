const express=require("express");

const app=express();


app.get('/',(request,response)=>{
    response.send("Hello World with Express.JS");
});


app.listen(3000);