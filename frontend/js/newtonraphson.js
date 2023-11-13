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
    // populateTable(result);
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
        const a = document.createElement('td');
        const b = document.createElement('td');
        const midpoint = document.createElement('td');
        const funcmidpoint = document.createElement('td');
        const error = document.createElement('td');

        iteration.innerHTML = item.iteration;
        a.innerHTML = item.a;
        b.innerHTML = item.b;
        midpoint.innerHTML = item.mid;
        funcmidpoint.innerHTML = item.funcmid;
        error.innerHTML = item.error;

        newRow.appendChild(iteration);
        newRow.appendChild(a);
        newRow.appendChild(b);
        newRow.appendChild(midpoint);
        newRow.appendChild(funcmidpoint);
        newRow.appendChild(error);

        tableBody.appendChild(newRow);
    }
}