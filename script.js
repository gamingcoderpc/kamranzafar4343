
/* selecting html elements */

let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');

let submitButton = document.querySelector('#submit-button');

/* attaching event listener */

submitButton.addEventListener('click', function(e) {
    e.preventDefault();


/* getting user enetered values */

let emailValue= emailElement.value;
let messageValue= messageElement.value; 

/* javascript validation */


if(emailValue.includes('@')){
    alert('thank you for message');   
}
else{
    alert('try again with a valid email address');
}
})


