import express, { Request, Response } from 'express'; 

const app = express();

app.get('/', (req : Request, res : Response) => {

    res.send('Hello from Express!');
});

app.get('/json', (req : Request, res : Response) => {
     
    const Name= "Sara";
    res.send({"the name" :Name, "Address": "Shmuel Hnavi"});//["Name": "Sara"]
});

app.get('/status', (req : Request, res : Response) => {
     
    res.status(500).send({ error: 'something blew up' }); 
});

app.get('/download', (req : Request, res : Response) => { 
    res.download('download.txt');
});

app.get('/redirect', (req : Request, res : Response) => {   
    res.redirect('https://www.google.com/'); 
});

app.get('/redirect2', (req : Request, res : Response) => {   
    res.redirect('http://localhost:3000/json'); 
});

app.get('/end', (req : Request, res : Response) => {
    res.end()
});

// מאזין לפורט 3000
app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});

//npx ts-node src/12_response.ts
