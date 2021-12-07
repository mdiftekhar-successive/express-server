const validation = {
    login : {
        email: {
            required: true,
            string: true, 
            regex: '', 
            in: ['body'], 
            errorMessage: 'Email is required'  
        },
        password: {
            required: true, 
            regex: '',  
            in: ['body'],
            errorMessage: 'Password is required', 
            custom: true
        },
    },
}
export default validation;
