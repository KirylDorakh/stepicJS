// Наследование
// Прототипы

let person = Object.create(null);


// () → String
// Returns the full name of object.
function get_full_name() {
    return this.first_name + ' ' + this.last_name
}

// (new_name:String) → undefined
// Sets the name components of the object, from a full name.
function set_full_name(new_name) { let names
    names = new_name.trim().split(/\s+/);
    this.first_name = names['0'] || ' ';
    this.last_name = names['1'] || ' ';
}

// Here we are reusing the previous getter/setter functions
Object.defineProperty(person, 'name',{get: get_full_name,
                                                    set: set_full_name,
                                                    configurable: true,
                                                    enumerable:   true})

// (person:String) → String
// Greets the given person, formally
person.greet = function (person) {
    return this.name + ': Hello ' + person || 'you '+ '.'
}

// Then we can share those behaviours with Mikhail
// By creating a new object that has it's [[Prototype]] property
// pointing to `person'.

let mikhal = Object.create(person);
mikhal.first_name = 'Mikhail';
mikhal['last_name'] = 'Weiß';
Object.defineProperty(mikhal,'age',{value: 19,
                                            writable: true,
                                            configurable: true,
                                            enumerable: true,});
mikhal.gender = 'Male'

console.log(Object.getOwnPropertyNames(mikhal), Object.keys(mikhal), Object.getOwnPropertyDescriptors(mikhal));

// And we can test whether things are actually working.
// First, `name' should be looked on `person'
console.log(mikhal.name);

// Setting `name' should trigger the setter
mikhal.name = 'Michael White'
console.log(mikhal.name);
console.log(mikhal.first_name);
console.log(mikhal.last_name);
console.log(mikhal.greet('you'));


// Prototype
// (person:String) → String
// Greets the given person

mikhal.greet = function (person){
    return this.name + ': \'sup, ' + (person || 'dude')
}

console.log(mikhal.greet('Kiryl'))


// Перегрузка свойств
// And define our new protagonist, Kristin
let kristine = Object.create(person);
kristine.first_name = 'Kristine';
kristine.last_name = 'Agel';
kristine.age = 30;
kristine.gender = 'Female';

// Alongside with her specific greeting manners

// (person:String) → String
// Greets the given person, sweetly

kristine.greet = function(person) {
    return this.name + ': \'ello, ' + (person || 'sweetie')
}

console.log(mikhal.greet(kristine.first_name)); // => 'Michael White: \'sup, Kristin'
console.log(mikhal.greet());
console.log(kristine.greet(mikhal.name));

delete kristine.greet;
console.log(kristine.greet(mikhal.last_name));