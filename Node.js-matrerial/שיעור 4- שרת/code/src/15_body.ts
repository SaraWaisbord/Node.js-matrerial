import express, { Request, Response,NextFunction} from 'express'; 
import { User } from '../Users/UserModule';
const app = express();

app.use(express.json()); 
  
app.post('/addUser', (req, res) => { 
    const user = req.body as User; 
    console.log(user.id);
    res.send(user.name);
}); 

// מאזין לפורט 3000
app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});