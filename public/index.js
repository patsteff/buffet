const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const submitEmail = document.querySelector("#submit");

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})
submitEmail.addEventListener('click', ()=> {
    console.log("clicked submit button");
})

console.log(window.screen.height);
console.log(window.screen.width);