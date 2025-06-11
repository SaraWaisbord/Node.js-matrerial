import express, { Request, Response } from 'express'; 

const app = express();
//books?category=history
app.get('/books', (req: Request, res: Response) => { 
    const category = req.query.category; 
    res.send({books: [], category}); 
}); 

// מאזין לפורט 3000
app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});
