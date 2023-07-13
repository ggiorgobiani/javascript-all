"use strict";


const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#password2');
const ugc = document.querySelector('input[type="checkbox"]');
let btnReset = document.querySelector('.reset');


form.addEventListener('submit', event =>
{

    event.preventDefault();

    showError();
    
});


const setError = (target, message) => {
    let divError = document.createElement('div');
          divError.classList.add('errorInput');
          divError.innerText = message;
          target.parentNode.append(divError);

    const control = target.parentElement;
          control.classList.add('error');   
}


const success = e => {
    const divError = document.createElement('div');
          divError.classList.add('errorInput');
          e.parentNode.append(divError);
          divError.innerText = '';

    const control =  e.parentElement;
    control.classList.add('success');
    control.classList.remove('error');
}


function showError(){
    let usernameValue = username.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    let repPasswordValue = repeatPassword.value;
   

        removeError();


    if (usernameValue ===''){
       setError(username, 'champ is required');
    } else if ( usernameValue.length < 4){
        setError(username, 'username must be have 4 characters')
    } else{ success (username)}

    if (emailValue === ''){
        setError(email, 'champ is required');
    } else if (!/^[0-9a-zA-Z-._]+@[0-9a-zA-Z-]+.[0-9a-zA-Z-]+.[a-zA-Z]{2,5}$/i.test(emailValue)){
        setError(email, 'enter valid email')
    } else { success (email)}

    if (passwordValue === ''){
        setError(password,'champ is required')
    } else if (passwordValue.length < 8){
        setError(password, 'password must be at least 8 caracters')
    } else if (passwordValue.length > 16){
        setError(password, 'password mus be less than 16 characters')
    } else if ( (!passwordValue.match(/[A-Z]/) || !passwordValue.match(/[a-z]/) || !passwordValue.match(/[0-9]/) || !passwordValue.match(/[^A-Za-z0-9]/))){
        setError(password, 'password must be 1 little character, 1 big character, 1 number, 1 character special')
    }     else { success( password)}
    
    if(repPasswordValue === ''){
        setError(repeatPassword, 'champ is required')
    } else if( repPasswordValue !== passwordValue){
        setError(repeatPassword, 'password does not match')
    } else { success (repeatPassword)}
   
    if(!ugc.checked){
        setError(ugc,'accept terms')
    } 

};


function removeError()
{
    
    const removeIt = document.querySelectorAll('.errorInput');
    
    for (const item of removeIt)
    {
        item.remove('.errorInput');
    }
}
 
    
// btnReset.addEventListener("click", function(){
//     const removeIt = document.querySelectorAll('.errorInput');
    
//     for (const item of removeIt)
//     {
//         item.remove('.input-control[input]');   
//     }
    
// });

btnReset.addEventListener("click", function(){
    const removeIt = document.querySelectorAll('.errorInput');
    
    for (const item of removeIt)
    {
        item.remove('.input-control[input]');   
    }
    
    const inputControls = document.querySelectorAll('.input-control');
    inputControls.forEach(control => {
        control.classList.remove('error');
        control.classList.remove('success');
    });
});