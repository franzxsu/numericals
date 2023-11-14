export function convertFunctionString(funcString) {
    return funcString.replace(/(\d+)([a-zA-Z]+)/g, '$1*$2')
                     .replace(/\^/g, '**');
}
