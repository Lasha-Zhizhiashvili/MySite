let correct = document.getElementById('correct')

document.addEventListener('scroll', function(){
    if (scrollY == 500){
        let active = document.querySelector('li.active')
        let active1 = document.querySelector('section.active1')
        active1.classList.remove('active1')
        active.classList.remove('active')
        active1.nextElementSibling.classList.add('active1')
        active.nextElementSibling.classList.add('active')
    }

    if (scrollY == 1000){
        let active = document.querySelector('li.active')
        let active1 = document.querySelector('section.active1')
        active1.classList.remove('active1')
        active.classList.remove('active')
        active1.nextElementSibling.classList.add('active1')
        active.nextElementSibling.classList.add('active')
    }

    if (scrollY == 1500){
        let active = document.querySelector('li.active')
        let active1 = document.querySelector('section.active1')
        active1.classList.remove('active1')
        active.classList.remove('active')
        active1.nextElementSibling.classList.add('active1')
        active.nextElementSibling.classList.add('active')
    }

    if (scrollY == 2000){
        let active = document.querySelector('li.active')
        let active1 = document.querySelector('section.active1')
        active1.classList.remove('active1')
        active.classList.remove('active')
        active1.nextElementSibling.classList.add('active1')
        active.nextElementSibling.classList.add('active')
    }

    if (scrollY == 2500){
        let active = document.querySelector('li.active')
        let active1 = document.querySelector('section.active1')
        active1.classList.remove('active1')
        active.classList.remove('active')
        active1.nextElementSibling.classList.add('active1')
        active.nextElementSibling.classList.add('active')
    }

    if (scrollY == 3000){
        let active = document.querySelector('li.active')
        let active1 = document.querySelector('section.active1')
        active1.classList.remove('active1')
        active.classList.remove('active')
        active1.nextElementSibling.classList.add('active1')
        active.nextElementSibling.classList.add('active')
    }
})

let li1 = document.getElementById('li1')
let li2 = document.getElementById('li2')
let li3 = document.getElementById('li3')
let li4 = document.getElementById('li4')
let li5 = document.getElementById('li5')
let li6 = document.getElementById('li6')

li1.addEventListener('click', function(){
    let active = document.querySelector('li.active')
    active.classList.remove('active')
    li1.classList.add('active')
    document.scrollY = 500
})

li2.addEventListener('click', function(){
    let active = document.querySelector('li.active')
        active.classList.remove('active')
    li2.classList.add('active')
    document.scrollY = 1000
})

li3.addEventListener('click', function(){
    let active = document.querySelector('li.active')
        active.classList.remove('active')
    li3.classList.add('active')
    document.scrollY = 1500
})

li4.addEventListener('click', function(){
    let active = document.querySelector('li.active')
        active.classList.remove('active')
    li4.classList.add('active')
    document.scrollY = 2000
})

li5.addEventListener('click', function(){
    let active = document.querySelector('li.active')
        active.classList.remove('active')
    li5.classList.add('active')
    document.scrollY = 2500
})

li6.addEventListener('click', function(){
    let active = document.querySelector('li.active')
        active.classList.remove('active')
    li6.classList.add('active')
    document.scrollY = 3000
})


