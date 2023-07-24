let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll("header nav a");


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')

            })
        }
    })
}




document.getElementById('menu-icon').addEventListener('click', () => {
    document.getElementById('menu-icon').classList.toggle('bx-x')
    document.querySelector('.navbar').classList.toggle('activ')

})


document.getElementById('h').addEventListener('click', () => {

    document.getElementById('menu-icon').classList.remove('bx-x')
    document.querySelector('.navbar').classList.remove('activ')
})

document.getElementById('a').addEventListener('click', () => {

    document.getElementById('menu-icon').classList.remove('bx-x')
    document.querySelector('.navbar').classList.remove('activ')
})

document.getElementById('p').addEventListener('click', () => {

    document.getElementById('menu-icon').classList.remove('bx-x')
    document.querySelector('.navbar').classList.remove('activ')
})

document.getElementById('c').addEventListener('click', () => {

    document.getElementById('menu-icon').classList.remove('bx-x')
    document.querySelector('.navbar').classList.remove('activ')
})





ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});



ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.clip-path img, .clip-path, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .clip2 ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });



const typed = new Typed('.multiple-text', {
    strings: [  'MERN Stack Developer!', 'Frontend Developer!', 'UI/UX Designer!',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



