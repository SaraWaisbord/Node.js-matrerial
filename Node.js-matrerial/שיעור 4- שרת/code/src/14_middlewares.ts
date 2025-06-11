import express, { Request, Response,NextFunction} from 'express'; 
import {logRequest} from "../middlewares/writeToLog"
import {router as usersRouter} from '../Users/Controller';

const app = express();

app.use((req :Request, res :Response, next: NextFunction) => { 
    console.log(`[${req.method}] ${req.url}`); 
    next(); 
    console.log(`respond`); 

}); 

app.use('/users', usersRouter);

app.get('/login', logRequest, (req: Request, res: Response) => { 
    if (req.query.password == "abcd") { 
        res.send("Success"); 
    } else { 
        res.send("Denied") 
    } 
}); 

app.get('/', 
    (req : Request, res : Response) => {
    console.log("Hello");
    res.send("hello");
});

// מאזין לפורט 3000
app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});