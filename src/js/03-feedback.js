import throttle from 'lodash.throttle';

const email = document.querySelector("input");
const textarea = document.querySelector("textarea");
const form = document.querySelector(".feedback-form")

let inform = {
    email: "",
    message: "",
};
const KEY = "feedback-form-state";



form.addEventListener('input', throttle (
    (event) => {
        inform[event.target.name] = event.target.value;
        localStorage.setItem(KEY, JSON.stringify({... inform, email: email.value, message: textarea.value}))
    },500
)
)
// textarea.addEventListener('input',
//     (event) => {
//         inform.message = event.currentTarget.value
//     }
// )

console.log(inform);
// email.addEventListener('input', throttle(
//     (event) => {
//         console.log(event.currentTarget.value);
//         if (event.currentTarget.value !== " ") {

//             localStorage.setItem("feedback-form-state", event.currentTarget.value)
//         }
//     }, 500
// ))
// let textEmail;

