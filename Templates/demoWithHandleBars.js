///the same as demo.js , but with handleBars 
///npm install handlebars 
let handlebars = require('handlebars');
var template = handlebars.compile('Hello, my name is {{name}} {{familyName}}!');
console.log(template({name: 'Pesho', familyName: 'Ivanov'}));

let myTemplateEngine = require('handlebars');
var template = myTemplateEngine.compile('Hello, my name is {{name}} {{familyName}}!');
console.log(template({name: 'Ivan', familyName: 'Gogov'}));
console.log(template({name: 'Geri', familyName: 'Petrova'}));
console.log(template({name: 'Kris', familyName: 'Marinov'}));