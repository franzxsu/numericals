import * as calculate from "./calculate.js";
import * as helper from "./helpers.js"

const calcButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear')
const table = document.getElementById("table");
const tableBody = document.getElementById("resultTable");

calcButton.addEventListener("click", calculateButtonClicked);
clearButton.addEventListener("click", clearButtonClicked);

function calculateButtonClicked(){
    const func = helper.convertFunctionString(document.getElementById("function").value)
    const x = document.getElementById("xvalue").value;
    const error = document.getElementById("error").value;
    
    calculateNewtonRaphson(func, x, error)
        .then(populateTable)
        .catch(handleError);
}

function calculateNewtonRaphson(func, x, error){
    return calculate.newtonraphson(func, x, error)
}

function handleError(res) {
    clearTable();
    removeErrorMessage();

    const errorElement = document.createElement('h1');
    errorElement.id = 'error-message';
    const errorMessage = res.STATUS + ": " + res.RESULT;
    errorElement.innerHTML = errorMessage;

    const parentElement = table.parentElement;
    parentElement.insertBefore(errorElement, table);
}

function clearButtonClicked(){
    //TODO: add functionality that clears input, gawin ko mamaya since im using the pre made inputs for testing
    removeErrorMessage();
    clearTable();
}

function populateTable(res){
    removeErrorMessage();
    clearTable();
    if (res.STATUS == "ERROR") {
        handleError(res);
        return;
    }
    table.classList.remove("hidden");
    res = res.RESULT;
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
function clearTable() {
    tableBody.innerHTML = "";
    table.classList.add("hidden");
}
function removeErrorMessage() {
    const existingError = document.querySelector('#error-message');
    if (existingError) {
        existingError.remove();
    }
}
