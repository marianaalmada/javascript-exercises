const repeatString = function(string, num) {

    if (num < 0) {
        return 'ERROR';
    }

    const text = string;
    let result = "";

    for(let i = 0; i < num; i++) {
        result += text;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;

/* REPETIR LA PALABRA TANTAS VECES COMO DIGA EL NUMERO 
SOLUCION
 * text = string;
 * repetir tantas veces como num lo indique:
 *   text = string + string;
 * END
 * 
 * retornar text
 */
