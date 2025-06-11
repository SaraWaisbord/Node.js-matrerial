import express, { Request, Response } from 'express'; 

const app = express();

//[get("index/{index}")]
app.get('/index/:index', (req : Request, res : Response) => {
    const routeParams = req.params;
    const index = routeParams.index; 

    res.send(`Hello from Express [${index}]!`);
});
//usersid/:id?name=name
app.get('/users/:userId/books/:bookId', (req: Request, res: 
    Response) => { 
        const routeParams = req.params; 
        const userId = routeParams.userId; 
        const bookId = routeParams.bookId; 
      
        console.log(`User: ${userId}, Book ${bookId}.`); 
        res.send({ "user" : userId, bookId}); 
    });
// מאזין לפורט 3000
app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});
