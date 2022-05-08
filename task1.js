//Небольшие подсказки:
//
// Во всех шагах далее вам нужно реализовать функцию, заданную в шаблоне решения.
// Все из этих задач предполагают решение с помощью циклов.
// На вход функции передаются разные данные, не только те, которые показаны в примерах.
// Результат необходимо возвращать из функции с помощью оператора return
// Если вдруг необходимо убрать лишние пробелы в начале/конце строки-ответа - используйте .trim()


// #1
function testCycle1(n) {
    let x = 0;
    while (n > 0) {
        x = x + n;
        n --;
    }
    return x;
}

result1 = testCycle1(10)
// console.log(result1)

// #2
function testCycle2(k, n) {
    var x = ' ';
    while (k > 0) {
        x = n +' '+ x;
        k --;
    }

    return x;
}

result2 = testCycle2(10, 1)
// console.log(result2)


// #3
function testCycle3(a, b) {
    let c = a;
        for (let i = a + 1; i <= b; i++) {
            c = c + ' ' + i;
        }
    return c;
}

result3 = testCycle3(6, 24)
//console.log(result3)

// #4
// function testCycle4(a, b) {
//     var x;

//     return x;
// }
//
// result4 = testCycle4(8, 1)
// console.log(result4)