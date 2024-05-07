/*=======togglee icon media screen==========*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-message-square-x');
    navbar.classList.toggle('active');
};

/*=======for active links web layout==========*/ 
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });

    /*=======sticky navbar==========*/ 
    // let header = document.querySelector('header');

    // header.classList.toggle('sticky', window.scrollY > 100);

    /*=======to rempve the open burger-menu when a link is clicked or we scroll==========*/ 
//     menuIcon.classList.remove('bx-message-square-x');
//     navbar.classList.remove('active');
// };



   /*=======scroll reveal==========*/ 
   ScrollReveal({
       reset: true,
       distance: '80px',
       duration: 2000,
       delay: 200
    })
    
    ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .about-img, .skills-container, .portfolio-box, .central', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content h2, .about-content h3', { origin:'left' });
ScrollReveal().reveal('.about-content h2, .about-content h3', { origin:'right' });



/*=======typed.js text==========*/ 
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Graphics Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});