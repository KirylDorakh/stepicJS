// for

for (let i = 1; i <= 5; i ++) {
    console.log("i = " + i);
}

//for ... in
car = [1, 2, 3]

for (i in car){
    console.log(car[i] + ' ');
    console.log(i + ' index')
}


// factorial
function testFactorial(a) {
    var x = 1;
    for (let i = 1; i <= a; i ++) {
        x = x * i;
        console.log(x)
    }
    return x;
}
fac_result = testFactorial(3)
console.log(fac_result)