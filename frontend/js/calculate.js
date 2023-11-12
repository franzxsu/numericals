/*
   EXPONENT (^) MUST BE CONVERTED TO "**" TO BE EVALUATED !!!!!!!!!!
*/

import * as api from "./apiHelper.js"

export function bisection(func, lower, upper, error){
    return api.bisect(func, lower, upper, error);
}