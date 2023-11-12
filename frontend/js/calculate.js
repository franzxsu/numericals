/*
   EXPONENT (^) MUST BE CONVERTED TO "**" TO BE EVALUATED !!!!!!!!!!
*/

import * as api from "./apiHelper.js"

export function bisection(func, lower, upper, error) {
    return api.bisect(func, lower, upper, error)
        .then(result => {
            // console.log(result);
            return result;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error; // Rethrow the error to propagate it further if needed
        });
}
