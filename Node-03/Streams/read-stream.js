const fs = require("fs");

const file="video.mp4";

const readStream=fs.createReadStream(file);
let progress = 0;

//fs.stat => File Informations
fs.stat(file,(err,data)=>{
    const total = data.size;
    console.log("Total File Byte:", total);

    readStream.on('data',(chunk)=>{
        /*console.log("This Size:",chunk.length);
        console.log("A chunk came in...");*/
        progress +=chunk.length;
        console.log(Math.round((progress*100)/total)+"%");
    });
    
    readStream.on('end',()=>{
        console.log("Data reading finished.");
        // console.log(progress);
    });

});

