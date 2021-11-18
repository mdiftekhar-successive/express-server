import { diamond,equilateralTriangle,pyramid } from "./pattern";

equilateralTriangle(5);
diamond(7);
pyramid('halfPyramid', 5);

import { hasPermission } from  "./utils";

let Obj = hasPermission( 'getUsers','trainee','read' );
console.log("Ans:",Obj);

import { validateUser } from "./utils";

const users = ['trainee1@successive.tech','reviewer1@successive.tech','mdiftekhar841@gmail.com','xyz1gmail.com','demo123gamil.co.in'];
validateUser(users);
