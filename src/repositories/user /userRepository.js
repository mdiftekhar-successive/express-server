import User from './userModel'; 
import bcrypt from "bcrypt";

class UserRepository {
    create = async (req , res) => {
        let users = req.body;
        let data = new User(users);
        try {
           await data.save();
           res.send (' Data is save successfully..')
        }
        catch(err) {
            res.send(err);
        }
    }
    get = async (req, res) => {
        const id = req.params.id;
        try{
             const users = await User.findById(id);
             res.json(users);
        }catch(err){
            res.send(err)
        }
    }
    update = async (req, res) => {
        let users = req.body;
        if(users.password){
           let temp = users.password;
           const salt = await bcrypt.genSalt(10);
           const hashPassword = await bcrypt.hash(temp,salt);
           users.password = hashPassword;
        }
        let updatUser = new User(users)
        try{
           const data =  await User.updateOne({_userId:req.params.userID},updatUser);
            res.send('Data is updated succefully');
        }
        catch(err) {
            res.send(err);
        }
    }
    delete = async (req, res) => {
        try{
            await User.deleteOne({_id:req.params.id});
            res.json('User Deleted Successfully..')
        }catch(err){
            res.send(err);
        }
    }
} 
export default new UserRepository; 
