let big = {
    name: 'jarvis',
    img: 'https://st2.depositphotos.com/3758943/6040/i/450/depositphotos_60400957-stock-photo-the-man-in-the-office.jpg',
    age: 80,
    registered: '0/00/0000',
    learning: 'b++',
    attend: 99,
    willHePass: true,
}

let sr = `<div class="card" style="width: 18rem;">
<img src="${big.img}" class="card-img-top" alt="">
<div class="card-body">
  <h5 class="card-title">${big.name}</h5>
  <p class="card-text">${big.age}</p>
  <span id='gg' >is he stipendian</span>
  <span id='notgg' >successful</span>
</div>
</div>`

document.getElementById('dav').innerHTML = sr;

if (willHePass = true){
    document.getElementById('gg').style.backgroundColor = 'green'
}

else if (willHePass = false){
    document.getElementById('gg').style.backgroundColor = 'red'
}

if (big.attend >= '100') {
    document.getElementById('notgg').style.backgroundColor = 'green'
}

else if (big.attend < '100') {
    document.getElementById('notgg').style.backgroundColor = 'red'
}


let big1 = {
    name1: 'jarvis1',
    img1: 'https://st2.depositphotos.com/3758943/6040/i/450/depositphotos_60400957-stock-photo-the-man-in-the-office.jpg',
    age1: 68,
    registered1: '1/00/0000',
    learning1: 'b+',
    attend1: 100,
    willHePass1: false,
}

let sr1 = `<div class="card" style="width: 18rem;">
<img src="${big1.img1}" class="card-img-top" alt="">
<div class="card-body">
  <h5 class="card-title">${big1.name1}</h5>
  <p class="card-text">${big1.age1}</p>
  <span id='gg1' >is he stipendian</span>
  <span id='notgg1' >successfull</span>
</div>
</div>`

document.getElementById('dav1').innerHTML = sr1;

if (willHePass1 = true){
    document.getElementById('gg1').style.backgroundColor = 'green'
}

else if (willHePass1 = false){
    document.getElementById('gg1').style.backgroundColor = 'red'
}

if (big1.attend1 >= '100') {
    document.getElementById('notgg1').style.backgroundColor = 'green'
}

else if (big1.attend1 < '100') {
    document.getElementById('notgg1').style.backgroundColor = 'red'
}