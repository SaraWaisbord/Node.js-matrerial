//const fs = require('node:fs');
import {readFile} from 'node:fs'; 
  
//async int num =  func1()
//async func2(num);
console.log("Start"); 
setTimeout(() => { 
  console.log("Timer call 1"); 
  //num =40;
}, 3000); 

readFile("file.txt", 'utf8',(err, txt) => { 
  if (err) {
      console.error(err);
      return;
    }

  console.log(`Reading file ended \'${txt}\'`); 
}); 
setTimeout(() => { 
  console.log("Timer call 2"); 
}, 3); 
const num =7;
for (let i = 0; i < 3000000000; i++) {} 
console.log("End");