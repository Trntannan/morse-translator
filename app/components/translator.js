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
//2.1 engInput = get engField value
//2.2 let morseOutput = ''  
//2.3 for iterate over characters in engInput
//2.4 if character is a property in morse dictionary
//2.5 morseOutput += morseCodeDictionary[engInput[i]] + ' '
//2.6 else morseOutput += '/ '
//2.7 display morseOutput

