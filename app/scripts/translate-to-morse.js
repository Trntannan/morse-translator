const copym = document.getElementById('copyBtnMorse');
const refreshm = document.getElementById('refreshBtnMorse');
const checkm = document.getElementById('checkMorse'); 

//1. create an list of objects morse code dictionary for letters of the alphabet
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
    const engInput = document.getElementById('engField').value.toUpperCase();
    let morseOutput = '';


    for (let i = 0; i < engInput.length; ++i) {
        if (engInput[i] in morseCodeDictionary) {
            morseOutput += morseCodeDictionary[engInput[i]] + ' ';
        } else {
            morseOutput += '/ ';
        }
    }

    morseOutput = morseOutput.trim();
    
    document.getElementById('morse-output').innerText = morseOutput;

    refreshm.classList.remove("hide");
    copym.classList.remove("hide");
};

function refreshPageMorse() {
    location.reload();
};

function copyToClipboardMorse() {
    const morseOutput = document.getElementById('morse-output').innerText;
    navigator.clipboard.writeText(morseOutput);

    copym.classList.add('hide');
    checkm.classList.remove('hide');
    
};


document.querySelector('.eng-to-btn').addEventListener('click', translateToMorse);
document.getElementById('refreshBtnMorse').addEventListener('click', refreshPageMorse);
document.getElementById('copyBtnMorse').addEventListener('click', copyToClipboardMorse);





