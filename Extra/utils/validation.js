import {ValidateEmail} from './helpers';
export default function validateuser(users) {
    let ValidEmail =[];
    let ValidEmailcount = 0;
    let InvalidEmail =[];
    let InvalidEmailcount = 0;
    for(let i = 0; i < users.length; i++) {
        if (ValidateEmail(users[i])) {
            ValidEmailcount++;
            ValidEmail.push(users[i]);
        } 
        else {
            InvalidEmailcount++;
            InvalidEmail.push(users[i]);
        }
    }
    console.log('Valid Email :', ValidEmail);
    console.log('Invalid Email :',InvalidEmail);
    console.log('Valid Email count :',ValidEmailcount);
    console.log('Invalid Email count :',InvalidEmailcount);
}
