const sumAll = function(num1, num2) {

    if(num1 < 0 || num2 < 0) {
        return "ERROR"; 
    } else if(!isNaN(num1) || !isNaN(num2)) {
        return "ERROR"; 
    } else if(num1 < num2) {
        let sum = num1;
        let cont = num1;

        while (cont < num2) {
            cont++;
            sum = sum + cont;
        }
    return sum;
    } else if(num1 > num2) {
        let sum = num2;
        let cont = num2;

        while (cont < num1) {
            cont++;
            sum = sum + cont;
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
