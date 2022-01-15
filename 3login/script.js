
var forms = document.forms;
var myForm = forms.myForm;

let rememberMe = document.getElementById('remember');
var loginName;
var pass;

function regexpTest(loginName, pass) {
    const regexpLogin = /^[a-z0-9_-]{3,16}$/
    const regexpPass = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/
    var resultLogin = regexpLogin.test(loginName);
    var resultPass = regexpPass.test(pass);
    if ((resultLogin == false) || (resultPass == false)) {
        if (resultLogin == false) {
            alert('Login is not safety, it recomended to be chandge');
        } else {
            alert('Password is not safety, it recomended to be chandge');
        }
    }
    
}

function submiting() {
    if (rememberMe.checked) {
        loginName = myForm.login.value;
        alert(`Hi, ${loginName}`);
    } else {
        alert('You are not remembered iser, try again');
    }
}

function remindPass() {
    pass = myForm.password.value;
    alert(`Password for login ${loginName} is ${pass}`);
}
