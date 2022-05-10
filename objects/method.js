var Person = {
    name : "Ivan",
    age : 25,
    hiredYear : 2017
}

Person.sayAge = function(n) {                    //Объявляем метод sayAge для объекта person
    console.log("Person is " + n + " years old");  //Тело метода sayAge - вывод текста
};

Person.sayName = function() {
    console.log("My name is " + this.name);
}

Person.sayAll = function() {
    for (let i in this) {
        console.log(i + " is " + this[i])
    }
}

Person.sayAge(10);
Person.sayName();
Person.sayAll();