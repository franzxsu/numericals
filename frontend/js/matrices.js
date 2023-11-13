document.addEventListener('DOMContentLoaded', function() {
    const maxMatrixSize = 7;
    const rowInput = document.getElementById('matrixrow');
    const columnInput = document.getElementById('matrixcolumn');
    const matrixLabels = document.getElementsByClassName("matrix-label")

    updateMatrixSize()

    // WILL CHANGE SIZE OF MATRIX DEPENDING ON ZEEEE INPUT ^^^^
    function updateMatrixSize() {
        const rows = Math.min(parseInt(rowInput.value) || 0, maxMatrixSize);
        const columns = Math.min(parseInt(columnInput.value) || 0, maxMatrixSize);

        updateMatrix('matrix1', rows, columns);
        updateMatrix('matrix2', rows, columns);
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

    rowInput.addEventListener('input', updateMatrixSize);
    columnInput.addEventListener('input', updateMatrixSize);
});
