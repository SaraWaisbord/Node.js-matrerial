import express, { Request, Response,NextFunction} from 'express'; 
export function isAuthorized(req:Request, res:Response, next:NextFunction) { 
    if (req.body == "admin") { 
        next(); 
    } 
  
    res.status(403).end('User is not authorized to this resource'); 
} 