// jest.setup.js
const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;

// Create a button element with the class .eng-to-btn and append it to the document body
const button = dom.window.document.createElement('button');
button.className = 'eng-to-btn';
dom.window.document.body.appendChild(button);


