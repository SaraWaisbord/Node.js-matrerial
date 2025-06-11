import express, { Request, Response,NextFunction} from 'express'; 

export function logContext(context: string) { 
    return function (req: Request, res: Response, next: NextFunction) { 
        console.log(`New request on context: ${context}`); 
        next(); 
    } 
} 

export function logRequest(req:Request , res:Response, next:NextFunction) { 
    console.log(`[${req.method}] ${req.url}`); 
    next(); 
} 