import * as calculate from "./calculate.js";

const calcButton = document.getElementById('calculate');

calcButton.addEventListener("click", calculateButtonClicked);

function calculateButtonClicked(){
    console.log("calculatebtn");
    const func = document.getElementById("function").value;
    const lowerBound = document.getElementById("lowerbound").value;
    const upperBound = document.getElementById("upperbound").value;
    const error = document.getElementById("error").value;
    
    console.log(func);
    console.log(typeof func);
    console.log(lowerBound);
    console.log(upperBound);
    console.log(error);
    
    calculate.bisection(func, lowerBound, upperBound, error);
}