const authService = require('../../Backend/login')


async function login(req, res) {
    try{
    const{email , password} = req.body;
    const token = await authService.login(email , password)
    res.json({token:token});
    }catch(error){
   res.status(401).json({message:"invalid credentials"})
    }
}

module.exports={
    login
}