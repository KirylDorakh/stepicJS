
function my_function(n) {
    if (n <= 1) return n;
    return my_function(n - 1) + ' ' + n;
}

console.log(my_function(5))

function fact(n){
    if (n === 1){
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

console.log(fact(5))