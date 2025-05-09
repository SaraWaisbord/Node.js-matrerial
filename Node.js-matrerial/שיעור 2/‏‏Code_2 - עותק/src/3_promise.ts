const fs3 = require('fs');
import {promises} from 'fs';

const readFilePromise = new Promise((resolve, reject) => {
    fs3.readFile('src/file.txt', 'utf8', (err: any, content: String) => {
        if (err) {
            reject(err);
        }
        if(content == "")
            reject("no date");

        resolve(content);
    });
});

const callback3 = function (data: any) 
{
    console.log(data);        
}


readFilePromise.then(callback3)
.catch((err) => {
    console.log("ERROR:", err);
})
.finally(() => console.log("I finish"));



//npx ts-node src/3_promise.ts