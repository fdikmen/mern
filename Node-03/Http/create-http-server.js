const http=require('http');

const server=http.createServer((request,response)=>{
    console.log("Request from user... RequestURL:", request.url);
    console.log("Request Headers:", request.headers);
      response.write("<p><a href='adres'>Hi!! Iam from response...</i></a>");
    /*response.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    response.write("Ç Ğ Ö İ Ü");*/
    response.end("Hiii!!!");
});

server.listen(3001);

//CTRL+C=> EXIT APP
//START AGAIN=> node fileName