const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrString = []
    for (let i = 0; i < expr.length / 10; i++) {
        arrString.push(expr.slice(i * 10, (i * 10) + 10))
    }

    let arrResult = [];
    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i] === '**********') {
           arrResult.push(' ');
        } else {
            let morseLetter = arrString[i]
                .replace(/10/g, '.')
                .replace(/11/g, '-')
                .replace(/0/g, '');

            arrResult.push(MORSE_TABLE[morseLetter]);
        }
    }

    return arrResult.join('');

}

module.exports = {
    decode
}