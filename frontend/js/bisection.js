import * as calculate from "./calculate.js";
import * as helper from "./helpers.js";

const calcButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear');
const table = document.getElementById("table");
const tableBody = document.getElementById("resultTable");

calcButton.addEventListener("click", calculateButtonClicked);
clearButton.addEventListener("click", clearButtonClicked);

function calculateButtonClicked() {
    const func = document.getElementById("function").value.replace(/\^/g, '**');
    const lowerBound = document.getElementById("lowerbound").value;
    const upperBound = document.getElementById("upperbound").value;
    const error = document.getElementById("error").value;

    calculateBisection(func, lowerBound, upperBound, error)
        .then(populateTable)
        .catch(handleError);
}

function calculateBisection(func, lowerBound, upperBound, error) {
    return calculate.bisection(func, lowerBound, upperBound, error);
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

function clearButtonClicked() {
    removeErrorMessage();
    clearTable();
}

function populateTable(res) {
    removeErrorMessage();
    clearTable();

    if (res.STATUS === "ERROR") {
        handleError(res);
        return;
    }

    table.classList.remove("hidden");
    res = res.RESULT;
    for (const item of res) {
        const newRow = document.createElement('tr');
        newRow.classList.add("row");
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                const cell = document.createElement('td');
                cell.innerHTML = item[key];
                newRow.appendChild(cell);
            }
        }
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
