const getOperation = operator => {

    switch (operator.split('')[1]) {
        case '+':
            return (left, right) => left + right;
            break;
        case '-':
            return (left, right) => left - right;
            break;
        case '*':
            return (left, right) => left * right;
            break;
        case '/':
            return (left, right) => left / right;
            break;
        case '%':
            return (left, right) => left % right;
            break;
    }
}
const expression = '4+2'
console.log(`${expression} = ${getOperation(expression)}`)