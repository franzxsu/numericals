/*
   EXPONENT (^) MUST BE CONVERTED TO "**" TO BE EVALUATED !!!!!!!!!!
*/

import * as api from "./apiHelper.js"

export async function bisection(func, lower, upper, error) {
    try {
        const result = await api.bisect(func, lower, upper, error);
        return result;
    } catch (error_1) {
        console.error('Error:', error_1);
        throw error_1;
    }
}

export async function newtonraphson(func, x, error) {
    try {
        const result = await api.newtonraphson(func, x, error);
        return result;
    } catch (error_1) {
        console.error('Error:', error_1);
        throw error_1;
    }
}

export async function addMatrices(matrix1, matrix2, operation) {
    try {
        const result = await api.addMatrices(matrix1, matrix2, operation);
        return result;
    } catch (error_1) {
        console.error('Error:', error_1);
        throw error_1;
    }
}