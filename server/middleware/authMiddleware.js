const jwt = require('jsonwebtoken');


const protect = async (req, res, next) => {
    try {
      const token = req.headers['authorization'].split(" ")[1]
      jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
        if(err){
            return res.status(200).send({
                message:'auth failed',
                success: false
            })
        }else{
            req.body.userId = decode.id;
            next()
        }
      })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Auth Error',
            success: false
        })
    }
}

module.exports = protect;