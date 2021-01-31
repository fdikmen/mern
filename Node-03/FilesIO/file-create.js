const fs = require("fs");

// fs.appendFile() -->Append
// fs.writeFile() -->New Data

/*fs.appendFile('dataNew.txt','Hello World!!',(error)=>{
    if (error) {
        throw error;
    }
    console.log("Added to file...");
});*/

fs.writeFile('dataXYZ.txt','Hello World!!',(error)=>{
    if (error) {
        throw error;
    }
    console.log("Added to file...");
});

fs.unlink("dataXYZ.txt",(error)=>{
    if (error) {
        console.log(error);
    }
    console.log("File deleted.");
})
