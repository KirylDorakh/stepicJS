// (person: String) → String
// Greets a random person

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

juliia.greet = function(person) {
    return this.name + ': Why, hello there, ' + person + '.'
};
console.log(juliia.greet('you'));


// Динамический this
// Разрешение this
