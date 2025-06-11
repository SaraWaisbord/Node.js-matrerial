import express, { Request, Response,NextFunction} from 'express'; 

export function parseUserId(req : Request, res: Response, next: NextFunction) { 
    const userId = Number(req.params.id); 
    console.log(userId);
    if (!userId) { 
        throw new TypeError("Parameter is not a number!");
        //res.status(400).end(`User id must be a number`); 
        //return; 
    } 
  
    next(); 
}