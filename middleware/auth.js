const jwt=require('jsonwebtoken')

const auth = (req,res,next)=>{

const token=req.headers.authorization
try {
    jwt.verify(token, 'masai', function(err, decoded) {
     if(decoded){
         console.log(decoded) 
      next()
     }else{
        res.send("Login again")
     }
     
      });
      
} catch (error) {
    console.log(error);
}

}
module.exports={auth}