//write a function to generate the nth fibonacci number in a series
function fibonacci(n){
    if(n<=1) return n;
    let a = 0, b= 1;
    for(let i = 2; i<= n; i++){
        const temp =b;
        b = a +b;
        a = temp;
    }
    return b;
}
console.log(fibonacci(8));