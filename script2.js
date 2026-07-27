const form = document.getElementById('form')
const fullName_input = document.getElementById('fullname-input') 
const email_input = document.getElementById('email-input') 
const password_input = document.getElementById('password-input') 
const retypePassword_input = document.getElementById('retypePassword-input') 

form.addEventListener('submit', (e) => {

    e.preventDefault();

    // const isFullNameValid =
    // validateFullName();

    const isEmailValid = validateEmail();

    const isPasswordValid = validatePassword();


    if(
        isEmailValid  && isPasswordValid
    ){

        alert('Form submitted');

        form.submit();
        window.location.href = URL();
    }
});

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

if(email_input){

    email_input.addEventListener(
        'input',
        validateEmail
    );
}
if(password_input){

    password_input.addEventListener(
        'input',
        validatePassword
    );
}