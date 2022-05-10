// Свойства объекта
let textString = "Hello world!";
console.log(textString.length);

// Методы - это действия, которые могут быть выполнены над объектом
console.log(textString.toUpperCase());


let user1 = new Object(); // синтаксис "конструктор объекта"
let user2 = {};  // синтаксис "литерал объекта"

let user3 = {
    name: "John",
    age: 30,
    "likes birds": true
};

user3.isAdmin = true;
delete user3.age;

console.log(user3["likes birds"]);


///
function makeUser(name, age) {
    return {
        name: name,
        age: age // можно просто age
    };
}

let user4 = makeUser('Juliia', 28);
console.log(user4.name)