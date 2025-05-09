import { error } from "console";

const fs1 = require('node:fs');
const callback = function (err: any, data: Buffer) : Buffer | undefined
{
        if(err)
        {
                console.log("Can't read the file", err);
                //throw new Error();
        }
        else 
                console.log(data.toString());
        return data;
}
fs1.readFile('src/file1.txt', callback);
console.log("finish");
//npx ts-node 1_callback.ts
