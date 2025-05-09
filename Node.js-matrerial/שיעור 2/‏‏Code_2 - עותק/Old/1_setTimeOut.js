console.log("Start"); 
  
const inter = setTimeout(() => { 
    console.log("Executed after 2 seconds"); 
}, 0.0001); 
for (let i = 0; i < 3000000000; i++) {} 
console.log("End"); 
//clearTimeout(inter);//?
