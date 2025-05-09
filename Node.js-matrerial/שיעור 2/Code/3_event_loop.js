
import {readFile} from 'node:fs'; 
  
//async int num =  func1()
//async func2(num);
console.log("Start"); 
 
let text = "";

setTimeout(() => { 
  console.log("Timer call 1"); 
  //num =40;
}, 2000);

readFile("file.txt", 'utf8',(err, txt) => { 
 
  if (err) {
      console.error(err);
      return;
    }
    text=txt;
  console.log(`Reading file ended \'${txt}\'`); 
  

}); 
setTimeout(() => { 
  console.log("Timer call 2"); 
}, 2); 
const num =7;
//for (let i = 0; i < 3000000000; i++) {} 
console.log("End");