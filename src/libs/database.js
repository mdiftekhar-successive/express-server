const mongoose = require('mongoose');

class Database {
  open (mongoUrl){
    let flag;
    flag = mongoose.connect(mongoUrl)
    .then(()=>{
      console.log("Database Connected Successfully..");
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