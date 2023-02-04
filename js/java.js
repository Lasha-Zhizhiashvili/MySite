let butt = document.getElementById('but')
let hid = document.getElementById('hid')

butt.addEventListener('click', function(){
    if (hid.style.display == 'none'){
        hid.style.display = 'block'
    }
    else{
        hid.style.display = 'none'
    }
   
})

hid.addEventListener('click', function(){
    document.getElementById('hid').style.display = 'none'
 })


let butt1 = document.getElementById('butt1')
let only = document.getElementById('only')
let form = document.getElementById('reg')

butt1.addEventListener('click', function(){
    let value = only.value
    let neww = document.createElement('div')
    let newww = document.createElement('p')
    neww.appendChild(newww)
    form.appendChild(neww)
    neww.style.width = '185px'
    neww.style.backgroundColor = 'red'
    newww.textContent = value
    only.value = ''
    newww.addEventListener('click', function(){
        this.remove()
    })
})

let tag = document.getElementById('tag')
let butt2 = document.getElementById('butt2')

tag.addEventListener('keypress', function(tag){
    let value1 = tag.value
    if(tag.charCode == 13){
        let span = document.createElement('span')
        span.textContent = value1
        tag.value = ''
        
    }
})