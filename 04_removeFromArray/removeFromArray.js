const removeFromArray = function(array, ...elements) {
    let result = array;

    for (const el of elements) {
        result = result.filter((i) => i !== el);
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
