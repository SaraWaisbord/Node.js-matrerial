let count = 0; 
console.log("Start"); 
const interval = setInterval(() => { 
    console.log(`Count: ${count}`); 
    count++; 
    if (count > 5) clearInterval(interval); 
}, 1000);
const inter = setTimeout(() => { 
    console.log("Executed after 2 seconds"); 
}, 5000); 
for (let i = 0; i < 3000000000; i++) {} 
//count = 66; 
console.log("End"); 