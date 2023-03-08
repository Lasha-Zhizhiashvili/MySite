let scrol1 = document.getElementById('scrol1')
let scrol2 = document.getElementById('scrol2')
let scrol3 = document.getElementById('scrol3')
let scrol4 = document.getElementById('scrol4')

let reed = document.getElementById('reed')
let reed1 = document.getElementById('reed1')
let reed2 = document.getElementById('reed2')
let reed3 = document.getElementById('reed3')

let box6 = document.querySelector('.box6')

scrol1.addEventListener('click', function(){
    scrol1.classList.remove('active')
    scrol2.classList.remove('active')
    scrol3.classList.remove('active')
    scrol4.classList.remove('active')
    this.classList.add('active')

    let scrol = reed1.getBoundingClientRect().left
    box6.style.transform = `translateX(${scrol} + 'px')`
})

scrol2.addEventListener('click', function(){
    scrol1.classList.remove('active')
    scrol2.classList.remove('active')
    scrol3.classList.remove('active')
    scrol4.classList.remove('active')
    this.classList.add('active')

    let scrol = reed1.getBoundingClientRect().left
    box6.style.transform = `translateX(${scrol} + 'px')`
})

scrol3.addEventListener('click', function(){
    scrol1.classList.remove('active')
    scrol2.classList.remove('active')
    scrol3.classList.remove('active')
    scrol4.classList.remove('active')
    this.classList.add('active')

    let scrol = reed1.getBoundingClientRect().left
    box6.style.transform = `translateX(${scrol} + 'px')`
})

scrol4.addEventListener('click', function(){
    scrol1.classList.remove('active')
    scrol2.classList.remove('active')
    scrol3.classList.remove('active')
    scrol4.classList.remove('active')
    this.classList.add('active')

    let scrol = reed1.getBoundingClientRect().left
    box6.style.transform = `translateX(${scrol} + 'px')`
})