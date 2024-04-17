import { translateToMorse } from "../scripts/translate-to-morse";

// Mock the DOM elements with with value "A"
document.body.innerHTML = `
    <input id="engField" type="text" value="A"> <!-- Test case: "A" -->
    <button class="eng-to-btn">Translate</button>
    <div id="morse-output"></div>
`;

// Mock the morseToEngDictionary
const morseToEngDictionary = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
};

// Mock the document.getElementById method
document.getElementById = jest.fn((id) => {
  if (id === 'engField') {
      return document.querySelector('#engField');
  }
  if (id === 'morse-output') {
      return document.querySelector('#morse-output');
  }
});

document.querySelector('.eng-to-btn').addEventListener = jest.fn((event, callback) => {
  if (event === 'click') {
      callback(); 
  }
});

document.getElementById('refreshBtnMorse').addEventListener = jest.fn((event, callback) => {
  if (event === 'click') {
      callback(); 
  }
});

document.getElementById('copyBtnMorse').addEventListener = jest.fn((event, callback) => {
  if (event === 'click') {
      callback(); 
  }
});

describe("translateToMorse", () => {
  it("should translate A to morse code", () => {
    document.querySelector('#engField').value = "A";
    translateToMorse();

    expect(document.getElementById('morse-output').innerText).toBe(".-");
  });

  it("should translate hello to morse code", () => {
    document.querySelector('#engField').value = "hello";

    translateToMorse();

    expect(document.getElementById('morse-output').innerText).toBe(".... . .-.. .-.. ---");
  });

  it("should translate 123 to morse code", () => {
    document.querySelector('#engField').value = "123";

    translateToMorse();

    expect(document.getElementById('morse-output').innerText).toBe('.---- ..--- ...--');
  });

  it("should translate empty input to empty morse code", () => {
    document.querySelector('#engField').value = "";

    translateToMorse();

    expect(document.getElementById('morse-output').innerText).toBe('');
  });
});
