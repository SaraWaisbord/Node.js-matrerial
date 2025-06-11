import { Router, Request, Response } from 'express';
import {UsersList} from "./UsersService"
import {logContext} from "../middlewares/writeToLog"
import {parseUserId} from "../middlewares/getUserId"
import {isAuthorized} from '../middlewares/autarization'

export const router = Router();

router.use(logContext('usersController')); 
router.use("/:id",parseUserId); 


router.put('/:id', logContext("put"), isAuthorized, (req, res) => 
    { 
        //...
        res.end(); 
    }); 

router.get('/', (req:Request, res:Response) => {
    res.send({'All users:': UsersList.getAllUsers()});
});

router.get('/:id', (req:Request, res:Response) => {
    res.send(UsersList.findUser(Number(req.params.id)));
});

router.post('/:id', (req:Request, res:Response) => {
    let name = req.query.name;
    if (typeof name === 'string') {       
        UsersList.addUser(Number(req.params.id), name );
        res.send("User succesfully added");
    }
    else res.status(505).send("no valid name sent");
});

//export default router;