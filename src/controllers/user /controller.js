import jwt from 'jsonwebtoken';
const secretKey = 'qwertyuiopasdfghjklzxcvbnm123456';
class UserController {
    
 login = async (req , res) => {
    let users = req.body
    let token =  jwt.sign(users,secretKey)
    return res.status(200).send({message:'login successfully',status:200,token:token,})
    }
}
export default new UserController;
