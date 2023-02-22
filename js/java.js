let divv = document.querySelector('.reed')
let divv1 = document.querySelector('.reed1')
let divv2 = document.querySelector('.reed2')
let divv3 = document.querySelector('.reed3')
let divv4 = document.querySelector('.reed4')
let divv5 = document.querySelector('.reed5')

let circle = document.querySelector('.circle')
let circle1 = document.querySelector('.circle1')
let circle2 = document.querySelector('.circle2')
let circle3 = document.querySelector('.circle3')
let circle4 = document.querySelector('.circle4')
let circle5 = document.querySelector('.circle5')

let box1 = document.querySelector('.box1')

let reeed = document.querySelector('.reeed')
let reeed1 = document.querySelector('.reeed1')
let reeed2 = document.querySelector('.reeed2')
let reeed3 = document.querySelector('.reeed3')
let reeed4 = document.querySelector('.reeed4')
let reeed5 = document.querySelector('.reeed5')

let butt = document.querySelector('.but')
let butt1 = document.querySelector('.but1')
let butt2 = document.querySelector('.but2')
let butt3 = document.querySelector('.but3')
let butt4 = document.querySelector('.but4')
let butt5 = document.querySelector('.but5')

divv.addEventListener('click', function(){
    circle.style.transform = 'scale(50)'
    circle.style.opacity = '1'
    circle.style.animationName = 'diss'
    box1.style.display = 'flex'
    reeed.style.display = 'block'
    reeed.style.animationName = 'medi'
})

divv1.addEventListener('click', function(){
    circle1.style.transform = 'scale(50)'
    circle1.style.opacity = '1'
    circle1.style.animationName = 'diss'
    box1.style.display = 'flex'
    reeed1.style.display = 'block'
    reeed1.style.animationName = 'medi'
})

divv2.addEventListener('click', function(){
    circle2.style.transform = 'scale(50)'
    circle2.style.opacity = '1'
    circle2.style.animationName = 'diss'
    box1.style.display = 'flex'
    reeed2.style.display = 'block'
    reeed2.style.animationName = 'medi'
})

divv3.addEventListener('click', function(){
    circle3.style.transform = 'scale(50)'
    circle3.style.opacity = '1'
    circle3.style.animationName = 'diss'
    box1.style.display = 'flex'
    reeed3.style.display = 'block'
    reeed3.style.animationName = 'medi'
})

divv4.addEventListener('click', function(){
    circle4.style.transform = 'scale(50)'
    circle4.style.opacity = '1'
    circle4.style.animationName = 'diss'
    box1.style.display = 'flex'
    reeed4.style.display = 'block'
    reeed4.style.animationName = 'medi'
})

divv5.addEventListener('click', function(){
    circle5.style.transform = 'scale(50)'
    circle5.style.opacity = '1'
    circle5.style.animationName = 'diss'
    box1.style.display = 'flex'
    reeed5.style.display = 'block'
    reeed5.style.animationName = 'medi'
})

butt.addEventListener('click', function(){
    circle.style.transform = 'scale(0)'
    circle.style.opacity = '0'
    box1.style.display = 'none'
    reeed.style.display = 'none'
})

butt1.addEventListener('click', function(){
    circle1.style.transform = 'scale(0)'
    circle1.style.opacity = '0'
    box1.style.display = 'none'
    reeed1.style.display = 'none'
})

butt2.addEventListener('click', function(){
    circle2.style.transform = 'scale(0)'
    circle2.style.opacity = '0'
    box1.style.display = 'none'
    reeed2.style.display = 'none'
})

butt3.addEventListener('click', function(){
    circle3.style.transform = 'scale(0)'
    circle3.style.opacity = '0'
    box1.style.display = 'none'
    reeed3.style.display = 'none'
})

butt4.addEventListener('click', function(){
    circle4.style.transform = 'scale(0)'
    circle4.style.opacity = '0'
    box1.style.display = 'none'
    reeed4.style.display = 'none'
})

butt5.addEventListener('click', function(){
    circle5.style.transform = 'scale(0)'
    circle5.style.opacity = '0'
    box1.style.display = 'none'
    reeed5.style.display = 'none'
})