import users from "../repositories/user /userModel";
const bcrypt = require('bcrypt');
export const seed = async (req,res,next) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash('Training@123', salt);

  const user = {
    name: 'Iftekhar',
    email: 'iftekhar@successive.tech',
    password: hash,
    role: 'head-trainer',
    userId: 'iftekhar',
  };
   
    try {
      const count= await users.countDocuments();
      if (count === 0) {
        let data = new users(user);
        try {
           await data.save();
           res.send (' seedData is save successfully..')
        }
        catch(err) {
            res.send(err);
        }
      }
      else {
          next();
      }
    } catch (error) {
      console.log('error is created', error);
    }
};
