const fibonacci = function(number) {
    const sequence = [1];
    let sum = 0;

    for (let i = 0; sequence.length < number; i++) {
        if(sequence.length < 2) {
            sum = sum + sequence[i];
            sequence.push(sum);
        }
        sum = sum + sequence[sequence.length - 2];
        sequence.push(sum);
    }

    if(number < 0) {
        return "OOPS";
    }

    return sequence[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
