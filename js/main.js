
let toggler = document.querySelector('.nav__toggler');
let navList = document.querySelector('.nav__list');
let headings = document.querySelectorAll('.text');
let lists = document.querySelectorAll('.footer-list');


toggler.onclick = function () {
    navList.classList.toggle('nav__display');
    toggler.style.opacity = '1';
}

headings.forEach(h2 => {
    h2.onclick = function(){
        lists.forEach(item => {
            item.style.display = 'block'
        })
    }
})




    
  
console.log(list)
console.log(heading)