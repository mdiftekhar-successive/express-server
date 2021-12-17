import jwt from 'jsonwebtoken';
import { nextTick } from 'process';
import User from '../../repositories/user /userModel';
export const secretKey = 'qwertyuiopasdfghjklzxcvbnm123456';
class UserController {
    
 login = async (req , res) => {
    let users = req.body
    let {email,password} = req.body;
    const authUser = await User.findOne({ email });
    if(authUser && (await authUser.matchPassword(password))) {
    let token =  jwt.sign(users,secretKey)
    return res.send({message:'login successfully',status:200,token:token})
    }
    else {
        res.send('Invalid email or password')
    }
    
 }
}
export default new UserController;
