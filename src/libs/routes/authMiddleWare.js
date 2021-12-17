import { hasPermission } from "../../../Extra/utils";
import jwt from 'jsonwebtoken'
import { secretKey } from "../../controllers/user /controller";

const authMiddleWare = (module, permissionType) =>(req,res,next) => {
   console.log('inside authmiddleware');
    const token = req.header("Authorization")

    if(!token){
        console.log('hey');
      return  next({message:"Token Not Found", status:403, erorr:"Unauthorized access"})
    }
    const userInfo = jwt.verify(token,secretKey)
    console.log("🚀 ~ file: authMiddleWare.js ~ line 14 ~ AuthMiddleWare ~ userInfo", userInfo)
};
export default authMiddleWare;// export default authMiddleWare;

