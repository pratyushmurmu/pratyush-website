const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const navLinks= document.querySelectorAll("nav ul li a")
navLinks.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();

    const targetId = this.getAttribute('href')
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
})


const revealSections = document.querySelectorAll('.reveal');

function revealOnScroll(){
  revealSections.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 150;
  

  if(revealTop < windowHeight - revealPoint){
    section.classList.add('active');
 }
});
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

