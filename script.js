document.documentElement.querySelector("head").querySelector("title").textContent = "JS OOP CONCEPT";

class Car {
    constructor() {

    }
    #h1 = document.querySelector("h1");
}

const luftansa = {
    flightname : 'luftanse',
    ftcode: 'lft',
    booking: [],
    book(name, flightnum) {
        console.log(`${name} booked a flight in ${this.flightname} number ${this.ftcode}${flightnum}`)
        this.booking.push({name, flightnum});
    }
};
luftansa.book('ashwaq', 987);
const planebooking = luftansa.book.bind(luftansa,'alisha', 786);
planebooking();
planebooking();
planebooking();



// class Car {
//     constructor(name, speed) {
//         this._speed = speed;
//         this.name = name;
//     }
//     get _speed() {
//         return `speed is ${this.speed / 1.6} mi/h`;
//     }
//     set _speed(spd) {
//         this.speed = spd;
//     }
//     get acceleration() {
//         this.speed += 10;
//         console.log(`${this.name} going on ${this.speed} Km/h`);
//     }
//     get brake() {
//         this.speed -= 5;
//         console.log(`${this.name} going on ${this.speed} Km/h`);
//     }
// }
// const bmw = new Car("Ford", 120)
// console.log(bmw._speed);


// class PersonCl {
//     constructor(fullname, month) {
//         this.fullname = fullname;
//         this.month = month;
//     }

//     get calcAge() {
//         console.log(2024 - this.month)
//     }
//     set fullname(name) {
//         if(name.includes(" ")) this._fullname = name;
//         else console.log("Enter full name")
//     }
//     static hello() {
//         console.log("Hello from Personcl not been inherited by child");
//     }
// }

// const javid = new PersonCl("Javid Ashwaq F", 2003);
// javid.calcAge;
// javid.hey = function() {
//     console.log("Hey there");
// }
// javid.hey();

// class Car {
//     brand  = "4 Wheelers";
//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//     }
// }
// Car.prototype.acceleration = function() {
//     this.speed  += 10;
//     console.log(`${this.name} is going on ${this.speed}`);
// }
// const bmw = new Car("BMW", 120);
// bmw.acceleration();
// bmw.acceleration();
// bmw.acceleration();


// const Car = function(speed) {
//     this.speed = speed;
// }
// Car.prototype.brake = function() {
//     this.speed -= 5;
//     return this.speed;
// }
// Car.prototype.acceleration = function() {
//     this.speed +=10;
//     return this.speed;
// }
// const BMW = new Car(120);
// console.log(BMW.brake());
// console.log(BMW.acceleration());
// const mercendes = new Car(95);
// console.log(mercendes.brake());
// console.log(mercendes.acceleration())



// const Person = function(fullName, birthYear) {
//     this.name = fullName; this.year = birthYear;
// }
// Person.prototype.calcmonth = function() { 
//     return (new Date().getFullYear() - this.year) 
// }
// const jonas = new Person("Jonas", "1991");
// console.log(jonas);
// console.log(jonas.calcmonth());
