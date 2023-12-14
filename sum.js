/**
 * A function which implements the law of addition
 * and calculates it for two values 
 * @param {number} a The first summand
 * @param {number} b The second summand
 * @returns the sum of two parameters
 */
export function sum(a,b){
    if (a === undefined){
        a = 0;
    }
    if (b === undefined){
        b = 0;
    }

    return a + b
}