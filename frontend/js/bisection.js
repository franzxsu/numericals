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
    populateTable(result);
}
function populateTable(res){
    const tableBody = document.getElementById("resultTable");
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