// davaleba 1.

let months = {
    1: 'january',
    2: 'february',
    3: 'march',
    4: 'april',
    5: 'may',
    6: 'june',
    7: 'july',
    8: 'august',
    9: 'september',
    10: 'october',
    11: 'november',
    12: 'december',
}

console.log(months);

// davaleba 2

let randomGuy = {
    name: 'javis',
    firstName: 'dingle',
    gender: '(unknown)',
}

let div1 = `${randomGuy.name} ${randomGuy.firstName} ${randomGuy.gender}`

document.getElementById('div').innerHTML = div1

// davaleba 3

let date ={
    day: 1,
    month: 23,
    year: 2023,
}

let lol1 = `${date.day} ${date.month} ${date.year}`

document.getElementById('lol').innerHTML = lol1

// davaleba 4

let obj = {key: 'მნიშვნელობა1', key8: 'მნიშვნელობა2', key4: 'მნიშვნელობა3'};


// davaleba 5

let obj1 = {
    '9name': 10,
    key7: 20,
    'a-b': 30,
    'city 10': 40,
    city10: 50
};

// davaleba 6
    
let products = {
    pr1: 'ბანანი',
    pr2: 'მარწყვი',
    pr3: 'მსხალი',
    pr4: 'მარწყვი',
    pr5: 'ატამი',
    pr6: 'საზამთრო',
    pr7: 'მარწყვი',
}

for (i = 0; i < products.length; i++) {
    
}

Object.keys(products).forEach(el => {
    if (products[el] == 'მარწყვი'){
        products[el] = 'ალუბალი'
    }
})
    

console.log(products);

// davaleba 7

const car = {
    model: {
    manufacturer: "BMW",
    mark: "X6"
    },
    color: "black",
    is_left_hand_drive: false,
    number_of_doors: 5
   };

console.log(car.color, car.model.manufacturer);

// davaleba 8

const car1 = {
    model: {
    manufacturer: "BMW",
    mark: "X6"
    },
    color: "black",
    is_left_hand_drive: false,
    number_of_doors: 5,
};

Object.keys(car1).forEach(el =>{
    if (car1[el] == 'black'){
        return car1[el] ='white'
    }
    if (car1[el] == false){
        return car1[el] = true
    }
})

console.log(car1);

// davaleba 9

let obj5 = {
    a: 7, 
    b: 8, 
    c: 9
};

Object.keys(obj5).forEach(el =>{
    if (typeof obj5[el] == 'number') {
        obj5[el]*=obj5[el];
      }
})

console.log(obj5);

// davaleba 10

const book = { 
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    publisher: "O'Reilly Media",
    year_of_publication: 2011
};

let bro = Object.keys(book)

console.log(bro);

let bro1 = Object.values(book)

console.log(bro1);

// davaleba 11

const book1 = { 
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan"
};
const year = { 
    year_of_publication: 2011,
    ...book1
};
   
console.log(year);

// davaleba 12

const user = {
    userName : "superadmin",
    password: "Godzilla"
   }

console.log(user.userName, user.password);

// davaleba 13

const student = {
    studentName : "პეტრე მგელაძე",
    paydVolum: 700
    
}

let canEnrollToCourse = (student) =>{
    if (student.paydVolum >= 1125){
        return true
    }
    else{
        return false
    }
}

console.log(canEnrollToCourse(student));

// davaleba 14

const purchases = {
    foods : ["Apples", "Bananas", "Eggs", "Cucumber", "Cheese"], 
    amountPaid: [4, 6, 4, 12, 15],
    date: "27/11/2021"
   };

   let getTotalAmount = (accumulator, currentValue) =>{
    return accumulator + currentValue
}

let joined = purchases.amountPaid.reduce(getTotalAmount)

console.log(joined);


// davaleba 15

const carr = {
    manufacturer: {
    name: "BMW",
    location: "Munich, Germany",
    year_of_establish: 1916
    },
    model: "X6",
    color: "black",
    is_left_hand_drive: false,
    number_of_doors: 5
};


let getFullModelOfCar = (carr) =>{
    return carr.manufacturer.name + carr.model
}

console.log(getFullModelOfCar(carr));

// davaleba 16

const purchases1 = [{
    item: "hammer",
    price: 22
   },
   {
    item: "screwdriver",
    price: 17
   },
   {
    item: "nails",
    price: 8
   }]

   const getTotalPrice = purchases1.reduce((acc, cal) => {
       return acc + cal.price;
   }, 0)

console.log(getTotalPrice);

// davaleba 17

const purchases2 = [{
    item: "hammer",
    price: 22
   },
   {
    item: "screwdriver",
    price: 17
   },
   {
    item: "nails",
    price: 8
   }]

   const getTotalPrice1 = purchases2.reduce((acc, cal) => {
    return acc + cal.price;
}, 0)

console.log(getTotalPrice1);

// davaleba 18

let prdoct = {
    weight: 20,
    quantity: 2,
    price: '99.99$',
    photo: 'https://delightlylinux.files.wordpress.com/2015/06/py001.png'
}

let myStr = JSON.stringify(prdoct)

document.getElementById('pr1').innerHTML = Object.keys(prdoct);

document.getElementById('pr2').innerHTML = Object.values(prdoct);

document.getElementById('pr3').innerHTML = myStr

// davaleba 19

let person = {
    firstName: "ნათია",
    age: 30,
};

let hal = (person) => {
    if (typeof person.firstName == 'string'){
        return `გამარჯობა ${person.firstName}`
    }
}

document.getElementById('hall').innerHTML = hal(person)

// davaleba 20

let bruh = {
    weight: '50kg',
    quantity: 0,
    price: '50$',
    photo: `https://static.vecteezy.com/system/resources/previews/002/027/233/original/car-wheel-illustration-for-conceptual-design-free-vector.jpg`,
    onStock: function(){
        if (this.quantity == 0){
            return 'მარაგში არ არის'
        }
        else{
            return `მარაგში არის ${bruh.quantity} პროდუქტი`
        }
    }
}

let myGod = `<div class="card" style="width: 18rem;">
<img src="${bruh.photo}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${bruh.price}</h5>
  <p class="card-text">${bruh.weight}</p>
  <p class="card-text">${bruh.onStock()}</p>
</div>
</div>`

document.getElementById('final').innerHTML = myGod

// davaleba 21 

const studentt = {
    studentName : "პეტრე მგელაძე",
    paydVolum: 700
}
   
function changeProperty(key, value, obj) {
    if (studentt.studentName == "პეტრე მგელაძე"){
        return studentt.studentName = value
    }
    if (studentt.paydVolum == 700){
        return studentt.paydVolum = value
    }   
    if ("პეტრე მგელაძე" == studentt.studentName ){
        return key = "პეტრე მგელაძე"
    }
}

changeProperty('studentName', 'როინი ვეკუა', student);

changeProperty('paydVolum', 900, student);

console.log(studentt);