// mark li with ul as has-children
document.querySelectorAll('nav li').forEach(li=>{
    if(li.querySelector('ul')) li.classList.add('has-children');
});

const nav = document.querySelector('.menu-wrapper');
const toggle = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.menu-close');

// Hamburger toggle
toggle.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
});

// Close button
closeBtn.addEventListener('click', ()=>{
    nav.classList.remove('active');
    toggle.classList.remove('active');
});

// Click outside to close
document.addEventListener('click', e=>{
    if(window.innerWidth<=1300){
        if(!nav.contains(e.target) && !toggle.contains(e.target)){
            nav.classList.remove('active');
            toggle.classList.remove('active');
        }
    }
});

// Mobile submenu toggle
document.querySelectorAll('nav li.has-children > a').forEach(link=>{
    link.addEventListener('click', function(e){
        if(window.innerWidth<=1300){
            e.preventDefault();
            this.parentElement.classList.toggle('open');
        }
    });
});