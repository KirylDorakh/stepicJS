let Person = new Object();
Person.name = "Sasha";
Person['age'] = 55;

// or

let Human = {};

let Woman = {
    name : "Juliia",
    age : 25,
    hiredYear : 2017
}

// Для создания объекта через конструктор
function Man(name, age, year) {
    this.name = name;
    this.age= age;
    this.year = year;
}

// Создание экземпляра объекта
let employee1 = new Man("Ivan", 25, 2022);
let employee2 = new Man('Olga', 22, 2019);


console.log(Person.name)
console.log(Person['age'])
console.log(employee1.name)
console.log(Woman.age)

delete Person.name;
console.log(Person.name)
