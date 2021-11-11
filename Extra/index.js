import { diamond,equilateraltriangle,pyramid } from "./Pattern";

equilateraltriangle(5);
diamond(5);
pyramid('fullpyramid',5);

import { haspermission} from "./utils";

let obj = haspermission('getUsers','trainee','read');
console.log(obj);

import { validateuser } from "./utils";

const users = ['trainee1@successive.tech','reviewer1@successive.tech','mdiftekhar841@gmail.com','xyz1gmail.com','demo123gamil.co.in'];
validateuser(users);
