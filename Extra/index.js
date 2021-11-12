import { Diamond,EquilateralTriangle,Pyramid } from "./Pattern";

EquilateralTriangle(5);
Diamond(5);
Pyramid('FullPyramid', 5);

import { HasPermission } from "./Utils";

let Obj = HasPermission( 'getUsers','trainee','read' );
console.log("Ans:",Obj);

import { ValidateUser } from "./Utils";

const users = ['trainee1@successive.tech','reviewer1@successive.tech','mdiftekhar841@gmail.com','xyz1gmail.com','demo123gamil.co.in'];
ValidateUser(users);
