const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce(function(accumulator, currentvalue){
    return accumulator+currentvalue;
}, 0);

console.log(sum);