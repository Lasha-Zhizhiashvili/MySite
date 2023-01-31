let get = document.getElementById('you')
let hav = document.getElementById('have')

get.addEventListener('click', function(){
    if(hav.classList == 'gg'){
        hav.classList.remove('gg');
        hav.classList.add('gg1')
    }else{
        hav.classList = 'gg'
    }
})

let inp = document.getElementById('put')
let eye = document.getElementById('eyes')

eye.addEventListener('click', function(){
    if(inp.type == 'password'){
        inp.setAttribute('type','text')
        eye.classList.remove('bi-eye-slash-fill')
        eye.classList.add('bi-eye-fill')
    }else{
        inp.setAttribute('type','password')
        eye.classList.remove('bi-eye-fill')
        eye.classList.add('bi-eye-slash-fill')
    }
})