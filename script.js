function bmiCalculator(){
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let weightStatusElement = document.getElementById("weightStatus");
    
    if(!isNaN(weight) && !isNaN(height)){
        let result = weight/(height ** 2);
        document.getElementById("result").value = result.toFixed(2);
        
      weightStatusElement.textContent = result < 18.5 ? "Under Weight" : result < 25 ? "Healthy Weight" : "Over Weight";

    }
    else{
        alert("please enter valid weight and height")
    }
}

document.getElementById("calculate").addEventListener("click", bmiCalculator);