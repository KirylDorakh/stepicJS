// Разрешение this

// Returns the sum of the object's value with the given Number
function add(other, yet_another) {
    return this.value + other + (yet_another || 0);
}

let one = {value: 1, add: add};
let two = {value:2, add: add};

console.log(one.add(1, 2));


// Вызов как метод
console.log('Вызов как метод');
console.log(one.add(two.value)); // this === one
console.log(two.add(3)); // this === two
console.log(one['add'](two.value)); // brackets are cool too


// Непосредственный вызов
console.log('Непосредственный вызов');
console.log(add(two.value)); // this === global

// The global object still has no `value' property, let's fix that.
value = 2; // this === global
console.log(add(two.value));


// Явное применение
console.log('Явное применение');
//call and apply
console.log(add.call(two, 2, 4)) // this === two
console.log(add.call(global, 4)) // this === global
console.log(add.call(one, one.value)); // equivalent to one.add(one.value)

global.value = 2
console.log(add.call(undefined, 1)) // this === window
// => 3

void function() {
    "use strict"
    console.log(add.call(undefined, 1)) // this === undefined
    // => NaN
    // Since primitives can't hold properties.
}()


//Связывание методов
// bind
console.log('Связывание методов');
let one_add = add.bind(one);

console.log(one_add(2)); // this === one

two.one_adder = one_add;
console.log(two.one_adder(2)); // this === one

console.log(one_add.call(two)); // this === one