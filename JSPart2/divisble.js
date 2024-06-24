function isMultipleOf3Or7(number){
    if(number <= 0){
        return false;
    }
    if(number % 3 === 0 || number % 7 === 0){
        return true;
    }
    else{
        return false;
    }
}

const num = 21;
if(isMultipleOf3Or7(num)){
    console.log(num + " is multiple");
}else{
    console.log(num + " is not multiple");
}