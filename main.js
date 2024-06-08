import './src/css/style.css';

const btn = document.getElementById('btn-toggle');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const logo = document.getElementById('logo');

// update logo for dark and light mode --->

const updateLogo = (isDark)=>{
    const lightLogo = logo.getAttribute('data-light-logo');
    const darkLogo = logo.getAttribute('data-dark-logo');

    logo.src = isDark ? darkLogo:lightLogo;
}

// checking if there is  any preffered theme or not -->

if (localStorage.getItem('color-theme')==='dark' ||(!('color-theme' in localStorage) && window.matchMedia(('prefers-color-scheme:dark')).matches)) {
    document.documentElement.classList.add('dark');
    lightIcon.classList.remove('hidden');
    updateLogo(true)
} else{
    document.documentElement.classList.remove('dark');
    darkIcon.classList.remove('hidden');
    updateLogo(false);
}
btn.addEventListener('click', (e)=>{
    e.preventDefault();

    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {

        if (localStorage.getItem('color-theme')==='light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            updateLogo(true)
        }   else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            updateLogo(false);
        }
        
    }   else{
        if (document.documentElement.classList.add('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light')
            updateLogo(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            updateLogo(true)
        }
    }
})