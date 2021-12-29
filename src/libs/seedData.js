import User from "../repositories/user /userModel";
export const seed = async (req,res,next) => {
 
  const user = {
    name: 'Iftekhar',
    email: 'iftekhar@successive.tech',
    password: 'Iftekhar@9123',
    role: 'head-trainer',
    userId: 'iftekhar',
    updatedBy:'Headtrainer',
    createdBy:'Headtrainer'
  };
   
    try {
      const count= await User.countDocuments();
      if (count === 0) {
        let data = new User(user);
        try {
           await data.save();
        }
        catch(err) {
            console.log('Data is not save');
        }
      }
    } catch (error) {
      console.log('error is created', error);
    }
};
