import users from "../repositories/user /userModel";
const bcrypt = require('bcrypt');
export const seed = async (req,res,next) => {
 
  const user = {
    name: 'Iftekhar',
    email: 'iftekhar@successive.tech',
    password: 'Iftekhar@9123',
    role: 'head-trainer',
    userId: 'iftekhar',
  };
   
    try {
      const count= await users.countDocuments();
      if (count === 0) {
        let data = new users(user);
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
