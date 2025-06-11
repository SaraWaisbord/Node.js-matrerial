import express, { Request, Response,NextFunction,Errback} from 'express'; 
import { User } from '../Users/UserModule';
import{parseUserId} from '../middlewares/getUserId'

const app = express();

app.use((req :Request, res :Response, next: NextFunction) => { 
    console.log(`[${req.method}] ${req.url}`); 
    
    next(); 
    console.log(`respond`); 
    
}); 

app.use("/:id", parseUserId)


/*app.use((err:Error , req:Request, res:Response, next:NextFunction) => { 
    
    console.error(err.message); 
    res.status(500).send('Something broke in the middleware!'); 
});
*/

app.get('/:id', (req : Request, res : Response) => {
    throw new Error("i'm failed");
    res.send(`Hello ${req.params.id} from Express!  `);
});


app.use((err:Error , req:Request, res:Response, next:NextFunction) => { 
    if(err.name == "TypeError")
        res.status(505).send(`You gave me wrong type! ${err}`); 
    else
    {   
        console.error(err.name); 
        res.status(500).send(`Something broke in the action! ${err}`); 
    }
});


// מאזין לפורט 3000
app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});