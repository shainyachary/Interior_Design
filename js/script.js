let body = document.querySelector('body');
let sidebar = document.querySelector('nav');
let toggle = document.querySelector('.toggle');
let searchbtn = document.querySelector('.search-box');
let modeswitch = document.querySelector('.toggle-switch');
let modeText = document.querySelector('.mode-text');

toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('close');
})

searchbtn.addEventListener('click',()=>{
    sidebar.classList.remove('close');
})

modeswitch.addEventListener('click',()=>{
    body.classList.toggle('dark');

    if(body.classList.contains('dark'))
    {
        modeText.innerHTML = 'Light Mode';
    }
    else
    {
        modeText.innerHTML = 'Dark Mode';
    }
})