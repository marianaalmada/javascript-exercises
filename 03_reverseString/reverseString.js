const reverseString = function (text) {
    let textArray = text.split("");
    let result = "";

    let i = text.length - 1;

    while (i >= 0) {
        result = result + textArray[i];
        i--;
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
