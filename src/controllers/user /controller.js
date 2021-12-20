import jwt from 'jsonwebtoken';
import User from '../../repositories/user /userModel';
export let token;
export var secretKey = require('dotenv').config().parsed.SECRET_KEY;
class UserController {
 login = async (req , res , next) => {
    let {email,password} = req.body;
    const authUser = await User.findOne({ email });
    if(authUser && (await authUser.matchPassword(password))) {
        token = jwt.sign(authUser.toJSON(),secretKey);
        next();
    }
    else {
        res.send('Invalid email or password')
    } 
 }
}
export default new UserController;
