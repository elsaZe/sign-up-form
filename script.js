let button = document.getElementById('submit-button');
button.addEventListener('click', checkPassword)



function checkPassword() {
    let password = document.getElementById('password').value
    let confirm = document.getElementById('conf-password').value
    if (password !== confirm) {
        document.getElementById('password-alert').className = "alert"
        document.getElementById('password').className = "show"
        document.getElementById('conf-password').className = "show"
    }
    
}

let check = document.getElementById('left');
check.addEventListener('click', checkPassword)


