'use strict';

/* form elements */
const form = document.forms.form;
const fullname = form.fullname;
const email = form.email;
const phone = form.phone;
const message = form.message;

/* RegExp Patterns */
const nameRegex = /^[a-z ,.-]+\s[a-z ,.-]+$/i;
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;
const phoneRegex = /(\d{3,5})\s?(\d{5,7})$/;

/*errors*/

const fullnameError = document.getElementById('fullname-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const messageError = document.getElementById('message-error');
const formError = document.getElementById('form-error');

fullname.onblur = () => {
    if (!nameRegex.test(fullname.value.trim()) && fullname.value.trim() !== ""){
        fullnameError.innerText = "Συμπληρώστε το όνομά σας στα λατινικά";
    } else {
        fullnameError.innerText = " ";

    }
   
}

fullname.onfocus = () => {
    fullnameError.innerText = ""
}


email.onblur = () => {
    if (!emailRegex.test(email.value.trim()) && email.value.trim() !== ""){
       emailError.innerText = "Συμπληρώστε έγκυρη διεύθυνση e-mail";
    }else {
        emailError.innerText = "";
    }

}

email.onfocus = () => {
    emailError.innerText = "";
}


phone.onblur = () => {
    if (!phoneRegex.test(phone.value.trim()) && phone.value.trim() !== ""){
        phoneError.innerText = "Συμπληρώστε έγκυρο αριθμό τηλεφώνου";
    } else {
        phoneError.innerText = "";

    }
}

phone.onfocus = () => {
       phoneError.innerText = "";
}


message.onblur = () => {
    if (message.value.length >= 500){
        messageError.innerText = "Το μήνυμά σας υπερβαίνει τους 500 χαρακτήρες";
    } else {
        messageError.innerText = "";

    }
}

// Ελέγχει κατά το submit εάν τα πεδία είναι valid σύμφωνα με τα regex. Εάν δεν είναι valid δεν προχωράει στο submit και εμφανίζει error message
form.onsubmit = (ev) => {   if(
        nameRegex.test(fullname.value.trim()) == false ||
        emailRegex.test(email.value.trim()) == false ||
        phoneRegex.test(phone.value.trim()) == false ||
        fullname.value.trim() == "" ||
        email.value.trim() == "" ||
        phone.value.trim() == "" ||
        message.value.trim() == ""){
            ev.preventDefault();
            formError.innerText = "Συμπληρώστε όλα τα πεδία της φόρμας. Βεβαιωθείτε ότι τα στοιχεία σας είναι συμπληρωμένα στα λατινικά.";

        }
}