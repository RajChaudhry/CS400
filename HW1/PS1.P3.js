const passFunction = (theString, theFunction) => theFunction(theString);
let expr1 = passFunction('supercalifragilisticexpialidocious',
    work => work.replace(/c/g, '*c').split('*')
)

const stringData = theString => [
    'originalString:  ' + theString,
    'modifiedString:  ' + theString.replace(/a/g, 'A'),
    'numberReplaced: ' + (theString.replace(/a/g, 'A').match(/A/g) || []).length,
    'length:  ' + theString.length
]
let expr2 = passFunction('supercalifragilisticexpialidocious',
    work => stringData(work)
)


console.log(expr1)
console.log(expr2)
