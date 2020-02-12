function* fibs () {
    let [val1, val2, result] = [0, 1, 0];
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

//i know this is really inefficient sorry in advance
function* fibsEven (fib) {
    for (let count = 0; count < 6;) {
        temp = fib.next().value
        if (temp % 2 == 0) {
            yield temp
            count +=1
        }
    }
}
let x = fibs()
let y = fibsEven(x);
var count =0

while(count < 6){
    console.log(y.next().value)
    count +=1
}