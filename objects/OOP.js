let michal = Object.create(null);

Object.defineProperty(michal, 'first_name', { value: "Michal",
                                                    writable: true,
                                                    configurable: true,
                                                    });

Object.defineProperty(michal, 'age', { value: 19,
                                                    writable: true,
                                                    configurable: true,
                                                    enumerable: true,
                                                    });

Object.defineProperty(michal, 'gender', { value: 'Male',
                                                    writable: true,
                                                    configurable: true,
                                                    enumerable: true,});



// Дескрипторы - дескрипторы данных и дескрипторы доступа
michal['addres'] = 'groove street';
michal.last_name = 'Scott';

console.log(michal.first_name, michal['addres']);


// delete
delete michal['gender'];
delete michal.age;

console.log(michal.age, michal['gender']);


// Getter-ы и setter-ы

// () → String
// Returns the full name of object.
function get_full_name() {
    return this.first_name + ' ' + this.last_name
}

// (new_name:String) → undefined
// Sets the name components of the object, from a full name.
function set_full_name(new_name) { var names
    names = new_name.trim().split(/\s+/);
    this.first_name = names['0'] || ' ';
    this.last_name = names['1'] || ' ';
}

Object.defineProperty(michal, 'name', {get: get_full_name,
                                                    set: set_full_name,
                                                    configurable: true,
                                                    enumerable: true})

console.log(michal.name);
michal.name = 'Jon Travolta';
console.log(michal.name);
console.log(michal.first_name);
console.log(michal.last_name);


// Перечисление свойств
console.log(Object.getOwnPropertyNames(michal));
console.log(Object.keys(michal)); //enumerable: true,


// Литералы
let juliia = {
    first_name: 'Juliia',
    last_name: 'Roberts',
    age: 20,
    gender: 'female',

    // () → String
    // Returns the full name of object.
    get name() {
        return this.first_name + ' ' + this.last_name
    },

    // (new_name:String) → undefined
    // Sets the name components of the object,
    // from a full name.
    set name(new_name) {
        let names
        names = new_name.trim().split(/\s+/);
        this.first_name = names['0'] || ' ';
        this.last_name = names['1'] || ' ';
    }
}

console.log(juliia.name);
