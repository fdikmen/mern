const http=require("http");
//HTTP METHODS => GET,POST,PUT,DELETE
const myserver= http.createServer((request,response)=>{

    if (request.method ===  "GET" ) {
        if (request.url === "/") {
            response.write("This is Homepage...");
        }
        else if (request.url === "/about") {
            response.write("This is About Page...");
        }
        else {
            response.write("This is 404 Page...");
        }
    }
    response.end();

});

myserver.listen(3005);