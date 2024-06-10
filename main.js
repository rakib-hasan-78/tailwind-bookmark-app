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


const tabs = document.querySelectorAll('.tab');
const data = document.querySelectorAll('.data');
const tabIndex = localStorage.getItem('tabIndex') 
;[...tabs].forEach((tab)=>{

        tab.addEventListener('click',(e)=>{
            [...tabs].forEach((tab) => {
                tab.children[0].classList.remove(
                    'border-b',
                    'border-b-4',
                    'md:border-b-0',
                    'text-softRed'
                )
            })
    
            ;[...data].forEach(value => {
                value.classList.add('hidden');
            })
    
            e.target.classList.add(
                'border-b-4',
                'border-softRed',
                'text-softRed'
            )
            const classString = e.target.getAttribute('data-target')
            document.getElementById('data').getElementsByClassName(classString)[0];
            document.getElementById('data').getElementsByClassName(classString)[0].classList.remove('hidden');
            document.getElementById('data').getElementsByClassName(classString)[0].classList.add('flex');
        })
})