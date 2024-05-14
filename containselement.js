//check if the array contains any certain element 
function containsElement(arr, element){
    return arr.includes(element);
}

console.log(containsElement([1,2,3,4,5], 3));
console.log(containsElement([1,2,3,4,5], 6));