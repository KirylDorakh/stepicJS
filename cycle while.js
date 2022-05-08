// while

//while (выражение, возвращающее логическое значение) {
//в цикле может использоваться, например, оператор сравнения вида x == 10 или просто переменная типа Boolean

//    исполняемый код
//}

let x = 1;
//объявляем и инициализируем переменную, которую
//мы будем использовать как условие цикла
while (x <= 5) {
    console.log("x = " + x);
    x = x + 1;
}

// do .. while
// do {
//  исполняемый код
//} while (переменная == проверочное значение);

let b = 5;
do {
    console.log(b);
    b --;
} while (b >= 1);

// четные
function testWhile(a) {
    var x = 0;
        do {
            if (a % 2 === 0) {
                console.log('a = ' + a);
                x = x + a
            }
            a --;
        } while (a >= 1);
    return x;
}

result = testWhile(5)
console.log(result)