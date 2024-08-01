const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registrationLink = document.querySelector('.register-link');

const registrationSection = document.querySelector(".Registration"),
loginSection = document.querySelector(".login");
const btnPopup = document.querySelector('.login');
const iconClose = document.querySelector('.icon-close');


registrationLink.addEventListener('click', () => {
    registrationSection.classList.remove("d-none");
    loginSection.classList.add("d-none");
});


loginLink.addEventListener('click', () => {
    registrationSection.classList.add("d-none");
    loginSection.classList.remove("d-none");
});


btnPopup.addEventListener('click', () => {
    wrapper.classList.add("active-popup");
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove("active-popup");
});

