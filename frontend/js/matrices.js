import * as calculate from "./calculate.js";
const maxMatrixSize = 7;
    const rowInput = document.getElementById('matrixrow');
    const columnInput = document.getElementById('matrixcolumn');
    const matrixLabels = document.getElementsByClassName('matrix-label');
    const calculateBtn = document.getElementById('calculate');
    const matrixOperation = document.getElementById('selectOptionsMatrix');
    const matrix2Label = document.querySelector('.input-matrix .matrix-label:nth-child(3)'); // Label for Matrix 2
    const matrix2 = document.getElementById('matrix2'); // Matrix 2
    handleMatrixOperationChange();
    matrixOperation.addEventListener('change', handleMatrixOperationChange);    
    document.addEventListener('DOMContentLoaded', function() {
    
    
    calculateBtn.addEventListener("click", function() {
        computeMatrices(matrixOperation.value);
    });

    rowInput.addEventListener('input', updateMatrixSize);
    columnInput.addEventListener('input', updateMatrixSize);

    updateMatrixSize();
});

// WILL CHANGE SIZE OF MATRIX DEPENDING ON ZEEEE INPUT ^^^^
function updateMatrixSize() {
    const maxMatrixSize = 7;
    const rowInput = document.getElementById('matrixrow');
    const columnInput = document.getElementById('matrixcolumn');
    const matrixLabels = document.getElementsByClassName('matrix-label');

    if (rowInput.value == "" || columnInput.value == "") {
        console.log("one is empty");

        // TODO: ENCLOSE IN A METHOD
        for (var i = 0; i < matrixLabels.length; i++) {
            matrixLabels[i].classList.add("hidden");
        }
    } else {
        for (var i = 0; i < matrixLabels.length; i++) {
            matrixLabels[i].classList.remove("hidden");
        }
    }

    const rows = Math.min(parseInt(rowInput.value) || 0, maxMatrixSize);
    const columns = Math.min(parseInt(columnInput.value) || 0, maxMatrixSize);

    updateMatrix('matrix1', rows, columns);
    updateMatrix('matrix2', rows, columns);
}

function computeMatrices(operation) {
    const matrix1 = getMatrixValues('matrix1');
    const matrix2 = getMatrixValues('matrix2');

    console.log(matrix1);

    console.log(calculate.addMatrices(matrix1, matrix2, operation));
}

function getMatrixValues(matrixId) {
    const matrixValues = [];

    const matrix = document.getElementById(matrixId);
    const rows = matrix.children;

    for (let i = 0; i < rows.length; i++) {
        const rowValues = [];
        const cells = rows[i].getElementsByTagName('input');

        for (let j = 0; j < cells.length; j++) {
            const value = parseFloat(cells[j].value) || 0;
            rowValues.push(value);
        }

        matrixValues.push(rowValues);
    }

    return matrixValues;
}
function updateMatrix(matrixId, rows, columns) {

    const matrix = document.getElementById(matrixId);
    console.log(matrixId);
    matrix.innerHTML = '';

    for (let r = 1; r <= rows; r++) {
        const matrixRow = document.createElement('div');
        matrixRow.className = 'matrix-row';
        matrixRow.id = `${matrixId}row${r}`;

        for (let c = 1; c <= columns; c++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `m${matrixId.slice(-1)}r${r}c${c}`;
            input.placeholder = '';
            matrixRow.appendChild(input);
        }
        matrix.appendChild(matrixRow);
    }
}

function handleMatrixOperationChange() {
    switch (matrixOperation.value) {
        case 'add':
            handleAddition();
            break;
        case 'subtract':
            handleSubtraction();
            break;
        case 'multiply':
            handleMultiplication();
            break;
        case 'scalar-multiplication':
            handleScalarMultiplication();
            break;
        case 'row-interchange':
            handleRowInterchange();
            break;
        case 'inverse':
            handleInverse();
            break;
        case 'determinant':
            handleDeterminant();
            break;
        default:
            showSecondMatrix();
    }
}

function hideSecondMatrix() {
    document.querySelector('.input-matrix .matrix-label:nth-child(3)').classList.add('hidden');
    document.getElementById('matrix2').classList.add('hidden');
}

function showSecondMatrix() {
    document.querySelector('.input-matrix .matrix-label:nth-child(3)').classList.remove('hidden');
    document.getElementById('matrix2').classList.remove('hidden');
}

function handleAddition(){
    showSecondMatrix();
}
function handleSubtraction(){
    showSecondMatrix();
}
function handleMultiplication(){
    showSecondMatrix();
}
function  handleScalarMultiplication(){
    hideSecondMatrix();
}
function handleRowInterchange(){
    hideSecondMatrix();
}
function handleInverse(){
    hideSecondMatrix();
}
function handleDeterminant(){
    hideSecondMatrix();
}