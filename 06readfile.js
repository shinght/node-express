// fs is the package needed for basic file interaction
let fs = require('fs')

fs.readFile("myfile.txt", (error, data)=>{
    if(error){
        throw error
    }
    console.log("file read is success...");
    console.log("By default, all data will be a hexadecimal code");
    console.log("contents of the file is as below: ");
    console.log(data);
    console.log("Convert hexadecimal content to readable format: ");
    console.log(data.toString());
})