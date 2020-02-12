function cube (x){
    return Math.pow(x, 3)
}
array = [1,2,3,4,5,6,7]
console.log(array.map(x => cube(x)))