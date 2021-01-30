const fs = require("fs");

fs.readFile('data.txt',(error,data)=>{
    if (error) {
        console.log(error);
    }
    console.log(data.toString());
})

/*readFile -> readFileSync if Sync */
/*const demo= fs.readFileSync('data.txt',(error,data)=>{
    if (error) {
        console.log(error);
    }
    console.log(data.toString());
})
console.log(demo.toString());*/
console.log("Readed....");

