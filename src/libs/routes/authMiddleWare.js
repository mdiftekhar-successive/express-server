import { hasPermission } from "../../../Extra/utils";
import jwt from 'jsonwebtoken'


const AuthMiddleWare = (module, permissionType) =>{
    const token = req.header("Authorized")
    if(!token){
        next({message:"Token Not Found", status:404, erorr:"Unauthorized access"})
    }
    let users;



};
export default AuthMiddleWare;
