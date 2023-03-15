var pass = document.getElementById('pass1');
var login = document.getElementById('login1');
document.addEventListener('keyup', function(event) { 
    if(event.keyCode === 13){
        onClickButton();
    }});


function onClickButton(el) {
    if(login.value == "admin") {   
        if(pass.value == "admin_8") {
            window.location.href = 'accept.html';
        } else {
            window.location.href = 'wrong.html';
        }
    } else {
        alert("Такого пользователя не существует!");
    }    
};