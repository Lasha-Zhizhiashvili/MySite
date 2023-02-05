let but = document.getElementById('but')

let butt = document.getElementById('butt')
let butt1 = document.getElementById('butt1')

let buttt = document.getElementById('buttt')
let buttt1 = document.getElementById('buttt1')

let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')

let final = document.getElementById('final')

let ser1 = document.getElementById('ser1')
let sor1 = document.getElementById('sor1')

let ser2 = document.getElementById('ser2')
let sor2 = document.getElementById('sor2')

let ser3 = document.getElementById('ser3')
let sor3 = document.getElementById('sor3')



but.addEventListener('click', function(){
    first.style.display = 'none'
    second.style.display = 'flex'

    ser1.style.color = 'gray'
    sor1.style.backgroundColor = 'gray'

    ser2.style.color = 'rgb(11, 8, 219)'
    sor2.style.backgroundColor = 'rgb(11, 8, 219)'
})

butt.addEventListener('click', function(){
    first.style.display = 'flex'
    second.style.display = 'none'

    ser1.style.color = 'rgb(11, 8, 219)'
    sor1.style.backgroundColor = 'rgb(11, 8, 219)'

    ser2.style.color = 'gray'
    sor2.style.backgroundColor = 'gray'
})

butt1.addEventListener('click', function(){
    second.style.display = 'none'
    third.style.display = 'flex'

    ser2.style.color = 'gray'
    sor2.style.backgroundColor = 'gray'
    
    ser3.style.color = 'rgb(11, 8, 219)'
    sor3.style.backgroundColor = 'rgb(11, 8, 219)'
})

buttt.addEventListener('click', function(){
    second.style.display = 'flex'
    third.style.display = 'none'

    ser2.style.color = 'rgb(11, 8, 219)'
    sor2.style.backgroundColor = 'rgb(11, 8, 219)'
    
    ser3.style.color = 'gray'
    sor3.style.backgroundColor = 'gray'
})

buttt1.addEventListener('click', function(){
    third.style.display = 'none'
    final.style.display = 'block'

    ser1.style.color = 'rgb(11, 8, 219)'
    sor1.style.backgroundColor = 'rgb(11, 8, 219)'

    ser2.style.color = 'rgb(11, 8, 219)'
    sor2.style.backgroundColor = 'rgb(11, 8, 219)'
    
    ser3.style.color = 'rgb(11, 8, 219)'
    sor3.style.backgroundColor = 'rgb(11, 8, 219)'
})


let change = document.getElementById('colorchange')
let numbs = document.getElementById('numbs')

change.addEventListener('click', function(){
    
})

