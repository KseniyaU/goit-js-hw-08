import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const KEY = "feedback-form-state";
// Функція для збереження в памʼять тексту введеного в форму
const saveToLocalStorage = throttle(
    () => {
        const formData = {
            email: emailInput.value,
            messege: messageInput.value,
        };
        localStorage.setItem(KEY, JSON.stringify(formData))
    },500
)
//виклик попередньої функції при вводі тексту в поля форми
form.addEventListener('input', () => {
    saveToLocalStorage();
});

window.addEventListener('load', () => {
    const storedData = localStorage.getItem(KEY); // завантаження данних при завантаженні сторінки з локального сховища
    //перевірка чи існують дані
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        //заповнення значенням з розпакованих полів
        emailInput.value = parsedData.email;
        messageInput.value = parsedData.messege;
    }
})

//очищення форми після відправки
form.addEventListener('submit', event => {
    event.preventDefault();//скасування стандартної дії при відправці форми

    const formData = {
        email: emailInput.value,
        messege: messageInput.value,
    };
    console.log(formData);
    form.reset();//скидання значень всіх елементів форми
    localStorage.removeItem(KEY);// очищення локального сховища
});


