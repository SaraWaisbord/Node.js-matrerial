import express, { Request, Response } from 'express'; 

const app = express();

// נתיב ברירת מחדל
app.get('/', (req : Request, res : Response) => {
    res.send('Hello from Express!');
});

app.post('/', (req: Request, res: Response) => { 
    res.send('Got a POST request'); 
}); 

//[get("user")]
app.put('/user', (req: Request, res: Response) => { 
    res.send('Got a PUT request at /user'); 
}); 

// מאזין לפורט 3000
app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});
