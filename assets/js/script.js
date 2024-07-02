'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// certifications variables
const certificationsItem = document.querySelectorAll("[data-certifications-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-date]");

// modal toggle function
const certificationsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < certificationsItem.length; i++) {

  certificationsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-certifications-avatar]").src;
    modalImg.alt = this.querySelector("[data-certifications-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-certifications-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-certifications-text]").innerHTML;

    certificationsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", certificationsModalFunc);
overlay.addEventListener("click", certificationsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

(function(){
  emailjs.init("Sugm5XwqqUFUwfkDq"); 
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Fetch values from form
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  console.log(message);

  // Send email
  emailjs.send("gmail_service", "email_template", {
      from_name: name,
      reply_to: email,
      message_html: message
  }, "Sugm5XwqqUFUwfkDq") // Include user ID here
  .then(function(response) {
      console.log('Email sent successfully', response);
      document.getElementById('successAlert').classList.add('show');
      document.getElementById('alertText').innerHTML = 'Email sent successfully!!';

      setTimeout(function(){
          document.getElementById('successAlert').classList.remove('show');
      }, 3000); // Hide alert after 3 seconds                
      document.getElementById('contactForm').reset(); 

  }, function(error) {
      console.error('Email sending failed', error);
      document.getElementById('successAlert').classList.add('show');
      document.getElementById('alertText').innerHTML = 'There was an error sending your message. Please try again later. ' + error;

      setTimeout(function(){
          document.getElementById('successAlert').classList.remove('show');
      }, 3000); // Hide alert after 3 seconds                
      document.getElementById('contactForm').reset(); 
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const alert = document.getElementById('successAlert');
  const closeButton = document.querySelector('.close-btn');

  // Function to show the alert
  function showAlert() {
    alert.classList.add('show');
  }

  // Function to hide the alert
  closeButton.addEventListener('click', () => {
    alert.classList.remove('show');
  });

  // Example of showing the alert when the form is submitted
  // Replace this with your form submission logic
  document.getElementById('yourFormId').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    showAlert();
  });
});


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}