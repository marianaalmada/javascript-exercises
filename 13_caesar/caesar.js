const getUnicode = function (letra, limit) {
    const unicode = letra.charCodeAt();
    let cont = 0;
    let unicodeShifted = unicode;

    if (limit > 0) {
        while (cont < limit) {
            cont++;
            unicodeShifted++;

            if (unicodeShifted > 90 && unicodeShifted < 97) {
                unicodeShifted = 65;
            } else if (unicodeShifted > 122 && unicodeShifted > 97) {;
                unicodeShifted = 97;
            }
        }
    }
    if (limit < 0) {
        while (cont > limit) {
            cont--;
            unicodeShifted--;

            if (unicodeShifted < 65 && unicodeShifted < 97) {
                unicodeShifted = 90;
            } else if (unicodeShifted < 97 && unicodeShifted > 90) {;
                unicodeShifted = 122;
            }
        }
    }
    return String.fromCharCode(unicodeShifted);
}

const caesar = function (string, number) {
    const array = string.split('');
    const regex = /[A-Z]|[a-z]/g;
    
    return array
        .map((element, index) => {
            if(element.match(regex)) {
                const newElement = getUnicode(element, number);
                array[index] = newElement;
            }
            return array[index];
        })
        .join('');
};

// Do not edit below this line
module.exports = caesar;
