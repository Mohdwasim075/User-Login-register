let fullName = document.getElementById('fullname-input')
let userEmail = document.getElementById('email-input')

let forms = document.getElementById('form')

forms.addEventListener('submit', (e) => {
    console.log('form see')
    e.preventDefault();
    if(fullName){
        const fullNameValid = isFullNameValid();
        const userEmailValid = isUserEmailValid();
        const userPasswordValid = isUserPasswordValid();
        const userRetypePasswordValid = isUserRetypePasswordValid();
        if( fullNameValid && userEmailValid && userPasswordValid && userRetypePasswordValid){
            
        }
    }
})

function isFullNameValid(){
    if (fullName.value.trim() == ""){
    console.log('A name is required')
    return false
    }else if(fullName.value.trim()){
        console.log('valid name')
    }
    else{
        console.log('user not identified');
        
    }
}

function isUserEmailValid(){
    

}

fullName.addEventListener(
    'input',
    isFullNameValid
)