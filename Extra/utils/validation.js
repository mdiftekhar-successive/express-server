let Users = ['trainee1@successive.tech','reviewer1@successive.tech','xyz1gmail.com','demo123gamil.co.in'];

let validEmail = [];
let validEmailcount = 0;

let invalidEmail = [];
let invalidEmailcount = 0;

function validationEmail(Users) {
    const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(REGEX.test(String(Users).toLowerCase())){
        validEmailcount++;
        validEmail.push(Users);
    }
    else { 
        invalidEmailcount++;
        invalidEmail.push(Users);
    }
}
Users.forEach((user) => {
    validationEmail(user);
 } )
 console.log("valid:",validEmail,"No of count validEmail:",validEmailcount);
 console.log("invalid:",invalidEmail,"No of count invalidEmail:",invalidEmailcount);