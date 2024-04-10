//1. create an array morse code dictionary for letters of the alphabet
const morseCodeDictionary = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    '?': '..--..', '!': '-.-.--', ',': '--..--', '.': '.-.-.-', ';': '-.-.-.',
    '+': '.-.-.', '-': '-....-', '/': '-..-.', '=': '-...-'
};

//2. function = translateToMorse()
function translateToMorse() {
    //2.1 engInput = get engField value
    let engInput = document.getElementById('engField').value.toUpperCase(); //took me a while to figure out without .toUpperCase() it wouldnt work               
    //2.2 let morseOutput = ''  
    let morseOutput = '';
    //2.3 for iterate over characters in engInput
    for (let i = 0; i < engInput.length; i++) {
        //2.4 if character is a property in morse dictionary
        if (engInput[i] in morseCodeDictionary) {
            //2.5 morseOutput += morseCodeDictionary[engInput[i]] + ' '
            morseOutput += morseCodeDictionary[engInput[i]] + ' ';
        } else {
            //2.6 else morseOutput += '/ '
            morseOutput += '/ ';
        }
    }
    //2.7 display morseOutput
    document.getElementById('morse-output').innerHTML = morseOutput;
}

//add eventlistener for .eng-to-btn onclick
document.querySelector('.eng-to-btn').addEventListener('click', translateToMorse);

