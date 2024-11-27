/*=======togglee icon media screen==========*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*=======for active links web layout==========*/ 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*=======to rempve the open burger-menu when a link is clicked or we scroll==========*/ 
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


const progressBar = document.querySelectorAll(".line span");
progressBar.forEach((span) => {
  span.style.width = span.dataset.width;
  // span.innerHTML = span.dataset.width
});




/*=======typed.js text==========*/ 
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});