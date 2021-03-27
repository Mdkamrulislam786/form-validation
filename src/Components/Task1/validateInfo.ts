export default function validateInfo(values: any): {} {
    //all the errors stored/added here
    let errors: any = {};
    //to check if a password has 8 letter, with at least a symbol, upper and lower case letters and a number
    let regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
    //to check if email contains @
    let regexEmail = /\S+@\S+\.\S+/
    //to check if name has alphabet
    let regexName = /^[A-Za-z]+/

    //name validation
    if (!values.username.trim()) {
        errors.username = 'Username required';
    }
    else if (!regexName.test(values.username.trim())) {
        errors.username = 'Enter a valid name';
    }
    //email validation
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!regexEmail.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    //password validation
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more';
    } else if (!regexPassword.test(values.password)) {
        errors.password = 'Password must contain atleast one symbol, one small and one capital letter';
    }
    if (!values.password2) {
        errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
    }

    //returns all the erors
    return errors;
}