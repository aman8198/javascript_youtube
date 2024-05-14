function removeDuplicates(arr){
    return Array.from(new Set(arr));
}

//Example usage:
const arrayWithDuplicate = [1, 2, 2, 2, 3, 3, 4, 4, 5, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicate);
console.log(uniqueArray);