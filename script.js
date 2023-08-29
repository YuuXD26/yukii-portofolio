var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');
var sumbitError = document.getElementById('subit-error');
var popup = document.getElementById('popup');

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = '<i class="fas fa-cancel"></i>';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"><i>';
    return true;
}

function validatePhone() {
  var phone = document.getElementById('contact-phone').value;

  if(phone.length == 0){
    phoneError.innerHTML = '<i class="fas fa-cancel"></i>';
  }
  if(phone.length !== 12){
    phoneError.innerHTML = 'Phone no should be 10 digits';
  }
  if(!phone.match(/^[0-9]{12}$/)){
    phoneError.innerHTML = '<i class="fas fa-cancel"></i>';
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 10;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = 'Tulis setidaknya ' + left + ' huruf';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"><i>';
    return true;
}

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    var name = document.getElementById('ijowk').value;
    var emailValid = validateEmail();
    var messageValid = validateMessage();
    var phoneValid = validatePhone();

    phoneError.innerHTML = '';
    messageError.innerHTML = '';
    emailError.innerHTML = '';

    if (name === '' || !emailValid || !phoneValid || !messageValid) {
        popup.innerHTML = 'Pesan Invalid!';
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 3000);
    } else if (!emailValid) {
        emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
        popup.innerHTML = 'Email tidak valid!';
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 3000);
    } else {
        popup.innerHTML = 'Pesan telah terkirim!';
        popup.style.display = 'block';

        document.getElementById('ijowk').value = '';
        document.getElementById('indfi').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-phone').value = '';
        document.getElementById('contact-message').value = '';

        setTimeout(() => {
            popup.style.display = 'none';
        }, 3000);
    }
});



const gfxButton = document.getElementById('gfxButton');
const websiteButton = document.getElementById('websiteButton');
const gfxProjects = document.querySelectorAll('.gfx-project');
const websiteProjects = document.querySelectorAll('.website-project');

websiteProjects.forEach(project => {
  project.style.display = 'none';
});

gfxButton.addEventListener('click', () => {

  gfxProjects.forEach(project => {
    project.style.display = 'block';
  });
  websiteProjects.forEach(project => {
    project.style.display = 'none';
  });
});


websiteButton.addEventListener('click', () => {

  websiteProjects.forEach(project => {
    project.style.display = 'block';
  });
  gfxProjects.forEach(project => {
    project.style.display = 'none';
  });
});

'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItems("saved-icon");

if(savedTheme){
  document.body.classList[savedTheme === "dark" ? " add" : "remove"]("dark-theme");
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

