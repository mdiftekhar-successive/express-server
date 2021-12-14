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
} 
export default new UserRepository;  