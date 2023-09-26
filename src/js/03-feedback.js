const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    message: document.querySelector('.feedback-form textarea'),
}
const localStorageKey = "feedback-form-state";

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const user = localStorage.getItem("feedback-form-state");
    
    const newUser = null ? undefined : JSON.parse(user);

    console.log(newUser);
    e.currentTarget.reset();
   
    localStorage.clear();
}

function onFormInput() {
      const userFeedback = {
        email: refs.form.elements.email.value,
        message: refs.message.value
      };
      
    localStorage.setItem(localStorageKey, JSON.stringify(userFeedback));
}


const onFormInputTrottled = throttle(onFormInput, 500);

refs.form.addEventListener('input', onFormInputTrottled);

function showFormData (){
   const localData = localStorage.getItem("feedback-form-state");

   if(localData){
    refs.form.email.value = JSON.parse(localData).email;
    refs.message.value = JSON.parse(localData).message;
   }
}

showFormData();