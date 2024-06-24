
const hamBurger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamBurger.addEventListener('click', (e)=>{
    e.preventDefault();
    hamBurger.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});