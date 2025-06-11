import express, { Request, Response as Resp } from 'express'; 

const app = express();

// נתיב ברירת מחדל
app.get('/', (req : Request, res : Resp) => {
    res.send('Hello from Express!');
});

// מאזין לפורט 3000
app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});
//npx ts-node src/8_Simple_server.ts

/*
npm install --save-dev @types/express
npm install express --save

*/
    