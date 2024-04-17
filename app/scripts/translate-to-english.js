const copye = document.getElementById('copyBtnEng');
const refreshe = document.getElementById('refreshBtnEng');
const checke = document.getElementById('checkEng');

//function translateToEng()
function translateToEng() {
    const morseInput = document.getElementById('morseField').value;
    const morseArr = morseInput.split(' ');

    let engOutput = '';

    for (let i = 0; i < morseArr.length; ++i) {
        for (let char in morseCodeDictionary) {
            if (morseCodeDictionary[char] === morseArr[i]) {
                engOutput += char;
            }
        }
        if (morseArr[i] === '/') {
            engOutput += ' ';
        }
    }
    document.getElementById('eng-output').innerText = engOutput;

    refreshe.classList.remove("hide");
    copye.classList.remove("hide");
};

function refreshPageEng() {
    location.reload();
};

function copyToClipboardEng() {
    const engOutput = document.getElementById('eng-output').innerText;
    navigator.clipboard.writeText(engOutput);

    copye.classList.add('hide');
    checke.classList.remove('hide');
    
};

document.querySelector('.morse-to-btn').addEventListener('click', translateToEng);
document.getElementById('refreshBtnEng').addEventListener('click', refreshPageEng);
document.getElementById('copyBtnEng').addEventListener('click', copyToClipboardEng);

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