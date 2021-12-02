export const notFound = (req,res)=>{
    res.status(404);
    res.send({
        error:'NOT FOUND'
    });

}
