function printText(a) {
    document.write(a);
}

printText("Hello world!\n");

// #############################

var printName = function(a) {document.write(a);}

printName('Kirill')

var printSub = (function(a) {document.write(a);}(' KUGKHJ '));

// #############################
// return

function mySquare(x) {
    return x*x;
}
console.log(mySquare(2))

function divideOneTo(x) {
    if (x != 0) {
        return 1/x;
    } else {
        return "А на ноль делить нельзя!";
    }
}

//recursion

function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x - 1)

}

console.log(factorial(5))