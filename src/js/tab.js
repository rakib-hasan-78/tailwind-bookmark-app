const tabs = document.querySelectorAll('.tab');
const data = document.querySelectorAll('.data');
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
