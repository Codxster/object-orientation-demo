// create person object, with a first name, last name, and age property

let person = {
    firstName:  'Cody',
    lastName: 'Barlow',
    age: 22
}
//accessing values using dot and bracket notation
console.log(person.firstName)
console.log(person[`lastName`])

// create a meal object with a appetizer, entree, dessert, and drink property

let meal = {
    appetizer: 'shrimp poppers',
    entree: 'mabachi zensai',
    dessert: 'ice cream',
    drink: 'sake',
}

// practing destructuring

// saving the keys from an object to a new variable
//let appetizer = meal.appetizer

const {appetizer, entree} = meal

const{drink: bestDrinkEver} = meal

console.log(appetizer, entree, bestDrinkEver)

// add the sides property to our meal

meal.sides = ['miso soup with tofu', 'salad']



//delete the dessert key form our meal

delete meal.dessert
console.log(meal)

// for loop to log what we add in our meal

for (let food in meal) {
    console.log(`for a(n) ${food} I had a(n) ${meal[food]}`)
}

// CLASSES

// create a class pet with name, age, and color properties
// add method called greeting, that will greet the user

class Pet {
    constructor(name, age, color,) {
        this.name = name
        this.age = age
        this.color = color
    }

    greeting() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`)
    }
}

//create class Dog that extends our Pet class

class Dog extends Pet {
    constructor(name, age, color, breed) {
        super(name, age, color)

        this.breed = breed
    }
}

let pet1 = new Dog ('Gus', 2, 'black', 'Berndedoodle')

pet1.greeting()

//create a Cat class that extends Pet
class Cat extends Pet {
    constructor(name, age, color) {
        super(name, age, color)

        this.temperment = 'mean'
    }

    isNice(newTemperment) {
        this.temperment = newTemperment
        console.log(`${this.name} is now a ${this.temperment} cat!`)
    }
}

let cat1 = new Cat('Macy', 3, 'grey')

console.log(cat1)

cat1.isNice('super cute')

// TEMPLATE FOR CLASSES
// ---------- UPPERCASE = CHANGEABLE -------------
// class CLASSNAME() {
// constructor(ANY PARAMS YOU WANT) {
//     BLUEPRINT FOR OBJECT 
//     this.KEYNAME = VALUE
//   }
// }