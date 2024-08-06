

const errHandler = (err,req,res,next)=>{
    
    res.status(500).json({message:err})
}

module.exports=errHandler