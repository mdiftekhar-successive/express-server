const mongoose = require('mongoose');
import { seed } from './seedData';

class Database {
  open (mongoUrl) {
    let flag;
    flag = mongoose.connect(mongoUrl)
    .then(()=>{
      console.log("Database Connected Successfully..");
      seed();
      console.log("Seed Data is created Successfully in Database..");
      return true;
    })
    .catch( (err) => {
        console.log(err);
      return false;
    })
    return flag;
  }
     disconnect() {
      mongoose.connection.close();
     }
}
export default new Database;
