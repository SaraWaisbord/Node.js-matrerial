const fs1 = require('node:fs');
const callback = function (err: any, data: Buffer) 
{
        if(err)
                console.log("Can't read the file", err);
        else console.log(data.toString());
}
fs1.readFile('src/file1.txt', callback);

console.log("finish");
//npx ts-node 1_callback.ts
