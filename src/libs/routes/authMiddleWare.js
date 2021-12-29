import { hasPermission } from "../../../Extra/utils";
import jwt from 'jsonwebtoken'
import { secretKey } from "../../controllers/user /controller";
import { token } from "../../controllers/user /controller";
const authMiddleWare = (module,permissionType) =>(req,res,next) => {
   
   const userInfo = jwt.verify(token,secretKey)
  let result = hasPermission('getUsers',userInfo.role,'all');
  console.log(result);
    if(result) {
      res.send({message:'login successfully Authorize token',status:200,token:token})
    }
    else {
      res.json({message:"login succefully", status:403, erorr:"Unauthorized access"})
    }
   if(!token){
        console.log('not valid token');
      return  next({message:"Token Not Found", status:403, erorr:"Unauthorized access"})
    }
  };
export default authMiddleWare;
