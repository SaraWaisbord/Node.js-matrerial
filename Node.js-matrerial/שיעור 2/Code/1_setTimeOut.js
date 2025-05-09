console.log("Start"); 
function f()
{
    return "hello"
}
const timer = setTimeout(() => { 
    console.log("Executed after 2 seconds"); 
    console.log("End2"); 
}, 2000); 
console.log(f());
for (let i = 0; i < 3000000000; i++) {} 
console.log("End"); 
clearTimeout(timer);//?
