import './src/css/style.css';
import './src/js/footer';
import './src/js/theme';
import './src/js/tab';
import './src/js/nav';
import { emailValidator } from "./src/js/validator";

const form = document.getElementById('form-subscription');
const inputField = document.getElementById('input-field');
const inputBtn = document.getElementById('btn-submit');
const operationTitle = document.getElementById('subscription-title');
const operationMsg = document.getElementById('subscription-description');


const validation = (userMail) => {
    let mail = userMail.value.trim();
    let mailValidate = emailValidator(mail);
    if (mail===``) {
        operationTitle.classList.add('text-red-400');
        operationTitle.innerText=`fatal error !`
        operationMsg.classList.add(`text-red-900`);
        operationMsg.innerText= `empty data !`;
        return;
    }
    if (!(mailValidate.isValid)) {
        operationTitle.classList.add('text-red-400');
        operationTitle.innerText=`fatal error !`
        operationMsg.classList.add(`text-red-500`);
        operationMsg.innerText= ``;
        operationMsg.innerText= mailValidate.errors;
        inputBtn.disabled = true;
        inputBtn.classList.add('cursor-not-allowed');
    } else{
        operationTitle.classList.remove('text-red-400');
        operationTitle.classList.add('text-green-400');
        operationTitle.innerText=`operation Successful !`
        operationMsg.classList.remove(`text-red-500`);
        operationMsg.classList.add(`text-green-500`);
        operationMsg.innerText= `Your Subscription Completed!`
        userMail.value = "";
        setTimeout(() => {
            operationTitle.innerText = "";
            operationMsg.innerText = "";
            operationTitle.classList.remove('text-green-400');
            operationMsg.classList.remove('text-green-500');
        }, 2000);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validation(inputField);
    inputField.addEventListener('click', () => {
        inputBtn.disabled = false;
        inputBtn.classList.remove('cursor-not-allowed');
        inputBtn.classList.add('cursor-pointer');
        operationTitle.classList.remove('text-red-400');
        operationMsg.classList.remove(`text-red-500`);
        operationTitle.innerText=``
        operationMsg.innerText= ``
    })
})
