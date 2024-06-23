import './src/css/style.css';
import './src/js/footer';
import './src/js/theme';
import './src/js/tab';


const hamBurger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamBurger.addEventListener('click', (e)=>{
    hamBurger.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});