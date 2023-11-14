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
    const lowerBound = document.getElementById("lowerbound").value;
    const upperBound = document.getElementById("upperbound").value;
    const error = document.getElementById("error").value;
    
    const result = await calculate.bisection(func, lowerBound, upperBound, error);
    populateTable(result);
}

function clearButtonClicked(){
    //clearInputs TODO
    removeErrorMessage();
    clearTable();
}

function populateTable(res){
    if (res.STATUS == "ERROR"){
        clearTable();
        removeErrorMessage();

        const errorElement = document.createElement('h1');
        errorElement.id = 'error-message';
        const errorMessage = res.STATUS + ": " + res.RESULT;
        errorElement.innerHTML = errorMessage;

        const parentElement = table.parentElement;
        parentElement.insertBefore(errorElement, table);
        return;
    }
    removeErrorMessage();
    table.classList.remove("hidden");
    res = res.RESULT
    tableBody.innerHTML = "";
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

function clearTable(){
    console.log("TABLE SHOULD BE CLEARED")
    tableBody.innerHTML = "";
    table.classList.add("hidden");
}

function removeErrorMessage() {
    const existingError = document.querySelector('#error-message');
    if (existingError) {
        existingError.remove();
    }
}