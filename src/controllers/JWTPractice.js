let jwt = require('jsonwebtoken');

exports.CreateToken=(req,res)=>{

    let Payload={
        exp:Math.floor(Date.now()/1000) + (60*60),
        data:{Name:"Shaka", City:"Sylhet", admin:true}
    }
    let Token = jwt.sign(Payload, "SecretKey123");

    res.send(Token)
}

// DecodeToken

exports.DecodeToken=(req,res)=>{
    let Token=req.headers['token-key']
    jwt.verify(Token, "SecretKey123", function (err, decode){
        if(err){
            res.status(401).json({status: "invalid request", data:err})
        }
        else{
            res.status(200).json({status:"Success Token", data:decode})
        }
    })

    res.send(Token)
}