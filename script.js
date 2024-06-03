// form pop-up

const dialog = document.getElementById('formDialog');
const openDialogBtn = document.getElementById('openDialogBtn');
const closeDialogBtn = document.getElementById('closeDialogBtn');

openDialogBtn.addEventListener('click', () => {
    dialog.showModal();
    document.body.classList.add('no-scroll'); // disables scrolling when the dialoge is opened
});

closeDialogBtn.addEventListener('click', () => {
    dialog.close();
    document.body.classList.remove('no-scroll'); // enables scrolling when the dialoge is closed
});

// form validation

const form = document.getElementById('form');
const emailInput = document.getElementById('workEmail');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const termsCheckbox = document.getElementById('terms');
const emailError = document.getElementById('email-error');
const termsError = document.getElementById('terms-error');
const fnError = document.getElementById('firstName-error');
const lnError = document.getElementById('lastName-error');



form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z]+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid work email address.";
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }
    // First name validation
    if (!nameRegex.test(firstName.value)) {
        fnError.textContent = "Please enter valid name";
        fnError.style.display = 'block';
        isValid = false;
    } else {
        fnError.textContent = '';
        fnError.style.display = 'none';
    }
    // Last name validation
    if (!nameRegex.test(lastName.value)) {
        lnError.textContent = "Please enter valid name";
        lnError.style.display = 'block';
        isValid = false;
    } else {
        lnError.textContent = '';
        lnError.style.display = 'none';
    }


    // Terms and conditions validation
    if (!termsCheckbox.checked) {
        termsError.textContent = "Please agree to the terms and conditions.";
        termsError.style.display = 'block';
        isValid = false;
    } else {
        termsError.textContent = '';
        termsError.style.display = 'none';
    }

    if (isValid) {
        // Form is valid, submit the form 
        form.submit();
        dialog.close();
    }
});

// slider function
const slider = document.querySelector('.slider-container');
const slides = slider.querySelectorAll('.card');
const dots = slider.querySelectorAll('.dot');

let currentSlide = 0;
let maxSlide = slides.length - 1;
let isHovering = false;
// Function to move to a specific slide
function moveToSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    currentSlide = index;
}

// Function for automatic slide transition
function autoplay() {
    if (!isHovering) {
        currentSlide = (currentSlide + 1) % slides.length;
        moveToSlide(currentSlide);
    }
    setTimeout(autoplay, 3000);    // slide duration
}

autoplay();  // Start autoplay on page load

//stop autoplay on hover
slides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
        isHovering = true;
    });

    slide.addEventListener('mouseout', () => {
        isHovering = false;
    });
});


// function for displaying projects

let pic = document.getElementById('left-child');
pic.innerHTML = '<img src = "./assests/image.png" alt ="">';
let btn = document.getElementById('b1');  // by default first project is selected
btn.style.backgroundColor = 'red';
btn.style.color = 'white';

function display(num) {
    resetButtonStyles();
    let index = num;
    if (index === 1) {
        pic.innerHTML = '<img src = "./assests/image.png" alt ="">'; //first image is pushed
        let btn = document.getElementById('b1');
        btn.style.backgroundColor = 'red';
        btn.style.color = 'white';
    } else if (index === 2) {
        pic.innerHTML = '<img src = "./assests/image2.png" alt ="">'; //second image is pushed
        let btn = document.getElementById('b2');
        btn.style.backgroundColor = 'red';
        btn.style.color = 'white';
    } else {
        pic.innerHTML = '<img src = "./assests/image3.png" alt ="">'; //third image is pushed
        let btn = document.getElementById('b3');
        btn.style.backgroundColor = 'red';
        btn.style.color = 'white';
    }
}

// function for getting back the original color 
function resetButtonStyles() {

    const buttons = [document.getElementById('b1'), document.getElementById('b2'), document.getElementById('b3')];
    for (const button of buttons) {
        button.style.backgroundColor = '';
        button.style.color = '';
    }
}





