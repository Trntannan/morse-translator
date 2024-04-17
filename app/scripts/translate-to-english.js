// let morseCharacters = {
//     ".-": "a",

// }

//function translateToEng()
function translateToEng() {
    const morseInput = document.getElementById('morseField').value;
    const morseArr = morseInput.split('');

    let engOutput = '';

    for (let i = 0; i < morseArr.length; ++i) {
        for (char in morseCodeDictionary) {
            if (morseCodeDictionary[char] === morseArr[i]) {
                engOutput += char;
            }
        }
        if (morseArr[i] === '/') {
            engOutput += ' ';
        }
    }
    document.getElementById('eng-output').innerText = engOutput;
}

document.querySelector('.morse-to-btn').addEventListener('click', translateToEng);

// function getEnglishCharFromMorseChar(morseChar) {

// }
//const morseInput = document.getElementById('morseField').value;
//const morseArr = morseInput.split(' ');
//let engOutput = '';
// for (let i = 0; i < morseArr.length; ++i) {}
//another? loop if object is in morseCodeDictionary === morseArr {}
//engOutput += object;      
//
//if morseArr[i] === '/' 
//engOutput += ' ';
//
//document.getElementById('eng-output').innerText = engOutput;  
//
//document.querySelector('.morse-to-btn').addEventListener('click', translateToEnglish);