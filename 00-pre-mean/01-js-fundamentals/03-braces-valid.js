function validateBraces(str){
    var match = {
        '(':')',
        '[':']',
        '{':'}'
    };
    var matchedBraces = [];

    for(var i = 0; i < str.length; i++){
    var runner = str[i];
    if(match[runner]) {
        matchedBraces.push(runner);
    } else {
        if (runner !== match[matchedBraces.pop()]) {
            return "Invalid braces";
        }
     }
    }
    if(matchedBraces.length === 0){
        return "Braces are validated"
    } else {
        return "Invalid braces"
    }
}

console.log(validateBraces("{()}({[[]]})"));
console.log(validateBraces("(})"));