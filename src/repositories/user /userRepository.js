import user from './userModel'; 
class UserRepository {
    create = async (req , res) => {
        let users = req.body;
        let data = new user(users);
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
             const users = await user.findById(id);
             res.json(users);
        }catch(err){
            res.send(err)
        }
    }
    update = async (req, res) => {
        let users = req.body;
        let updatUser = new user(users)
        try{
           const data =  await user.updateOne({_id:req.params.id},updatUser);
            res.send('Data is updated succefully');
        }
        catch(err) {
            res.send(err);
        }
    }
    delete = async (req, res) => {
        try{
            await user.deleteOne({_id:req.params.id});
            res.json('User Deleted Successfully..')
        }catch(err){
            res.send(err);
        }
    }
} 
export default new UserRepository; 
