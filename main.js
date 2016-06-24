#!/usr/bin/env node

var fs = require("fs");

var child_process = require("child_process");
var cwd = process.cwd();
var fname = process.argv[2];

var isEmpty = function (val) {
    return val === undefined || val === null;
}

if (isEmpty(fname)) {
    console.log("Provide Directory to delete");
    return;
}

if(fname == "-v"){
    console.log(require('./package.json').version);
    return;
}

const spwn = child_process.spawn("cmd.exe",['/c', __dirname + '\\scripts\\bot.bat', fname]);

spwn.stdout.on("data", (data)=>{
 console.log('File deleted successfully');    
});

spwn.stderr.on("data", (data)=>{
 console.log(data);    
});

spwn.on('exit', (code) => {
    if(code == 0 )
        console.log('Directory deleted successfully...');
    else
        console.log(`Child exited with code ${code}`);
});
