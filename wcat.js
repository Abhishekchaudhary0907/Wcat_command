#!/usr/bin/env node
const fs = require('fs');
const files = process.argv.slice(2);
const cd = files[0];

if(cd[0] !== "-"){
    files.forEach((file) => {
        let buffer = fs.readFileSync(file);
        console.log(buffer.toString())
   })
}else{
    switch(cd){
        case "-s":
            removeLineBreak(files[1]);
            break;

        case "-n":
            indexing(files[1]);
            break;

        case "-b":
            function3();
            break;

        default:
            console.log("enter valid command");
            break;

    }
    
}

function removeLineBreak(file){
    let buffer = fs.readFileSync(file);
    let str = buffer.toString();
    str = str.replace( /[\r\n]+/gm, "\n" ); // regular expression for replacing multiline in to single line
    console.log(str);
}

function indexing(file){
    let buffer = fs.readFileSync(file);
    let str = buffer.toString();
    let newStr = "";
    for(let i =0; i<str.length; i++){
       

    }

    console.log(newStr);

}