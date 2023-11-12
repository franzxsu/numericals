import * as calculate from "./calculate.js";

const calcButton = document.getElementById('calculate');

calcButton.addEventListener("click", calculateButtonClicked);

async function calculateButtonClicked(){
    console.log("calculatebtn");
    const func = document.getElementById("function").value.replace(/\^/g, '**');;
    const lowerBound = document.getElementById("lowerbound").value;
    const upperBound = document.getElementById("upperbound").value;
    const error = document.getElementById("error").value;
    
    

    console.log(func);
    console.log(typeof func);
    console.log(lowerBound);
    console.log(upperBound);
    console.log(error);
    
    const result = await calculate.bisection(func, lowerBound, upperBound, error);
    console.log(result);
    populateTable(result);
}
function populateTable(res){
    const results = JSON.parse(res);
    resultTable=document.getElementById("resultTable");
    console.log(results)
}