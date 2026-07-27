const form = document.getElementById('form')
const fullName_input = document.getElementById('fullname-input') 
const email_input = document.getElementById('email-input') 
const password_input = document.getElementById('password-input') 
const retypePassword_input = document.getElementById('retypePassword-input') 
const resentEmail_input = document.getElementById('resentEmail-input')



form.addEventListener('submit', (e) => {

    e.preventDefault()
    if (resentEmail_input){
    const isResentEmailValid = validateResentEmail();
    console.log(isResentEmailValid);
    if (isResentEmailValid){
       
            alert('Reset Password link sent to  Inbox');
            window.location.href = 'user_login.html';

        
    }
}


    if (fullName_input){
        // we are in the signupPage
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isRetypePasswordValid = validateRetypePassword();


    if(
        isFullNameValid && isEmailValid && isPasswordValid && isRetypePasswordValid
    ){

        alert('Form submitted');

        // form.submit();
        window.location.href = 'user_login.html';
        
        // errors = getSignInFormErrors( email_input.value, password_input.value)
    }
    }
    else{
        // we are in the SignInPage
        const isEmailValid = validateEmail();

    const isPasswordValid = validatePassword();


    if(
        isEmailValid  && isPasswordValid
    ){

        alert('Form submitted');

        window.location.href = 'https://getbootstrap.com/docs/5.3/examples/dashboard/'
        
        // errors = getSignInFormErrors( email_input.value, password_input.value)
    }
    
    

}
    
})

if(fullName_input){

    fullName_input.addEventListener(
        'input',
        validateFullName
    );
}

if(email_input){

    email_input.addEventListener(
        'input',
        validateEmail
    );
}

if(resentEmail_input){

    resentEmail_input.addEventListener(
        'input',
        validateResentEmail
    );
}
if(password_input){

    password_input.addEventListener(
        'input',
        validatePassword
    );
}

if(retypePassword_input){

    retypePassword_input.addEventListener(
        'input',
        validateRetypePassword
    );
}

if(password_input){

    password_input.addEventListener(
        'input',
        validatePassword
    );
}


function setError(input, feedbackId, message){

    const feedback =
    document.getElementById(feedbackId);

    input.classList.remove('is-valid');

    input.classList.add('is-invalid');

    feedback.classList.remove('valid-feedback');

    feedback.classList.add('invalid-feedback');

    feedback.innerText = message;
}


function setSuccess(input, feedbackId){

    const feedback =
    document.getElementById(feedbackId);

    input.classList.remove('is-invalid');

    input.classList.add('is-valid');

    feedback.classList.remove('invalid-feedback');

    feedback.classList.add('valid-feedback');

    feedback.innerText = "Looks good";
}

function validateFullName(){

    const value = fullName_input.value.trim();

    if(value === ""){

        setError(
            fullName_input,
            'validate-fullname',
            'Name is required'
        );

        return false;
    }

    setSuccess(
        fullName_input,
        'validate-fullname'
    );

    return true;
}
function validateEmail(){

    const value = email_input.value.trim();

    const regex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(value === ""){

        setError(
            email_input,
            'validate-email',
            'Email is required'
        );

        return false;
    }

    if(!regex.test(value)){

        setError(
            email_input,
            'validate-email',
            'Enter valid email'
        );

        return false;
    }

    setSuccess(
        email_input,
        'validate-email'
    );

    return true;
}


function validateResentEmail(){
 const value = resentEmail_input.value.trim();

    const regex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(value === ""){

        setError(
            resentEmail_input,
            'validate-resentEmail-input',
            'Email is required'
        );

        return false;
    }

    if(!regex.test(value)){

        setError(
            resentEmail_input,
            'validate-resentEmail-input',
            'Enter valid email'
        );

        return false;
    }

    setSuccess(
        resentEmail_input,
        'validate-resentEmail-input'
    );

    return true;
}   

function validatePassword(){

    const value = password_input.value.trim();

    if(value === ""){

        setError(
            password_input,
            'validate-password',
            'Password is required'
        );

        return false;
    }

    if(value.length < 6){

        setError(
            password_input,
            'validate-password',
            'Password must be at least 6 characters'
        );

        return false;
    }

    setSuccess(
        password_input,
        'validate-password'
    );

    return true;
}

function validateRetypePassword(){

    const password =
    password_input.value;

    const retypePassword =
    retypePassword_input.value;

    if(retypePassword === ""){

        setError(
            retypePassword_input,
            'validate-retypepassword',
            'Retype password'
        );

        return false;
    }

    if(password !== retypePassword){

        setError(
            retypePassword_input,
            'validate-retypepassword',
            'Passwords do not match'
        );

        return false;
    }

    setSuccess(
        retypePassword_input,
        'validate-retypepassword'
    );

    return true;
}