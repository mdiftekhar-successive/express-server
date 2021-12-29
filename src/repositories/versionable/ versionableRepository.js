// import userRepository from "../user /userRepository";
import User from "../user /userModel";
class VersionableRepository {
    create = async (users) => {
        users.updatedBy = users.name;
        users.createdBy = users.name; 
      let data = new User(users) 
      try {
        await data.save();
        return 'Data is save successfully..';
     }
     catch(err) {
         return (err);
        }
    }
    get = async (id) => { 
        try{
            const users = await User.findById(id);
            return users;
        }
        catch(err) {
           return (err);
       }
    } 
    update = async (userId,users) => {
        
        if(users.password){
            let temp = users.password;
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(temp,salt);
            users.password = hashPassword;
            users.updatedBy = users.name;
         }
        //  let updateUser = new User(userId,users)
         try{
            await User.findOneAndUpdate({userId:userId},users)
             return 'Data is updated succefully';
         }
         catch(err) {
             return (err);
         }
    }
    delete = async(id) => {
        try{
            await User.deleteOne({_id:req.params.id},id);
            return 'User Deleted Successfully..';
        }catch(err){
            return (err);
        }
    }

}

export default new VersionableRepository;