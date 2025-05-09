const fs3 = require('fs');
import {promises} from 'fs';

const readFilePromise = new Promise((resolve, reject) => {
    fs3.readFile('src/file1.txt', 'utf8', (err: any, content: String) => {
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
    return promises.writeFile('output.txt', data );
}
readFilePromise.then(callback3)
.catch((err) => {
    console.log("ERROR:", err);
})
.then(() => {
    console.log("finish write");})
.catch((err) => {
    console.log("ERROR writing:", err);
})
.finally(() => {
    console.log("The promise has completed");
});

//npx ts-node src/3_promise.ts