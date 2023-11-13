import * as calculate from "./calculate.js";
import * as helper from "./helpers.js"

const calcButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear')
const table = document.getElementById("table");
const tableBody = document.getElementById("resultTable");

calcButton.addEventListener("click", calculateButtonClicked);
clearButton.addEventListener("click", clearButtonClicked);

async function calculateButtonClicked(){
    console.log("calculatebtn");
    const func = document.getElementById("function").value.replace(/\^/g, '**');;
    const x = document.getElementById("xvalue").value;
    const error = document.getElementById("error").value;

    console.log(func);
    console.log(typeof func);
    console.log(x);
    console.log(error);
    
    const result = await calculate.newtonraphson(func, x, error);
    console.log(result);
    populateTable(result);
}

function clearButtonClicked(){
    //TODO: add functionality that clears input, gawin ko mamaya since im using the pre made inputs for testing
    tableBody.innerHTML = "";
    table.classList.add("hidden");
}

function populateTable(res){
    table.classList.remove("hidden");
    tableBody.innerHTML = "";
    console.log(res);
    for (const item of res){
        const newRow = document.createElement('tr');
        newRow.classList.add("row");
        const iteration = document.createElement('td');
        const x = document.createElement('td');
        const funcOfX = document.createElement('td');
        const funcPrimeOfX = document.createElement('td');
        const error = document.createElement('td');

        iteration.innerHTML = item.iteration;
        x.innerHTML = item.x;
        funcOfX.innerHTML = item.funcOfX;
        funcPrimeOfX.innerHTML = item.funcPrimeOfX;
        error.innerHTML = item.error;

        newRow.appendChild(iteration);
        newRow.appendChild(x);
        newRow.appendChild(funcOfX);
        newRow.appendChild(funcPrimeOfX);
        newRow.appendChild(error);

        tableBody.appendChild(newRow);
    }
}