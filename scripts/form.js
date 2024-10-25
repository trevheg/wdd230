const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#password2");
const submit = document.querySelector("#submit");

submit.addEventListener("click", submitForm);

function submitForm() {
    if (pw1.value !== pw2.value) {
        console.log('no match')
    }else {
        console.log('match')
    }
}