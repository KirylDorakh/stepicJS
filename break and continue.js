// break

for (let i = 1; i < 10; i ++) {
    if (i === 5) {
        break;
    }
    console.log('i = ' + i);
}
console.log('###############');
// continue

for (let i = 1; i < 10; i ++) {
    if (i === 5) {
        continue;
    }
    console.log('i = ' + i);
}
console.log('###############');

// Метки в JavaScript действуют только для циклов и оператора Switch

let i, j;

metka1:
for (i = 0; i < 5; i ++) {
    metka2:
    for (j = 0; j < 5; j ++) {
        if (i === j) {
            continue metka1;
        } else {
            if ( i === 3) {
                break metka2;
            }
            console.log(i, j);
        }
    }
}

