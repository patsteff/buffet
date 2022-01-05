const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const menuitem = document.querySelectorAll(".menuitem");


burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})

menuitem.forEach(a => {
    a.addEventListener('click', () => {
        menu.classList.add('hidden');
    }
)}
);


console.log(window.screen.height);
console.log(window.screen.width);