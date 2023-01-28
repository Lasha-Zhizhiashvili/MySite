let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;


function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

counterPlusElem.addEventListener("click",()=>{
    updateDisplay();
    count++;
});

counterMinusElem.addEventListener("click",()=>{
    updateDisplay();
    count--;
});

updateDisplay();