export const requireFilds=(fields)=>(req,res,next)=>{
    for (const field of fields){
        if (! req.body [field]){
            return res.status(400).json({error:'${filed}is required'});
        }
    }
    next();
}