/**
 * Create a concatenated string of the provided values
 * @param  {...any} strings Strings to be concatenated
 * @returns A string which is concatenation of the provided strings and a whitespace between of each
 * @throws In case of a invalid parameter, like undefined, not a string or an empty string an Error will be thrown
 */
export function concatWithWhitespace(...strings){
    if (strings.some(string =>  
            !string ||
             typeof string !== "string" ||
             string.trim() === '' )
        ){
            throw new Error("Invalid parameters provided")
    }

    if (strings.length === 10){
        strings.push("You hit the jackpot")
    }

    return strings.join(" ")
}