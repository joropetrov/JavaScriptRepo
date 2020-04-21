'use strict'
/// templates = шаблони;
let myTemplateEngine = ((function () {
    var startDelimiter = '{{';
    var endDelimiter = '}}';
    var searchStr = `${startDelimiter}?([A-Za-z]+)${endDelimiter}`;

    var setDelimiters = function (start, end) {
        startDelimiter = start || startDelimiter;
        endDelimiter = end || endDelimiter;
        searchStr = `${startDelimiter}?([A-Za-z]+)${endDelimiter}`;
    };

    var compile = function (template) {
        var searchExp = new RegExp(searchStr);

        return function (obj) {
            var match;
            var result = template;

            while (match = searchExp.exec(result)) {
                result = result.replace(match[0], obj[match[1]]);
            }

            return result;
        };
    };

    return {
        compile: compile,
        setDelimiters: setDelimiters

    };
}()));

var template = myTemplateEngine.compile('Hello, my name is {{name}} {{familyName}}!');
console.log(template({ name: 'Pesho', familyName: 'Ivanov' }));
myTemplateEngine.setDelimiters('@@', '@@');
console.log(template({ name: 'Geri', familyName: 'Petrova' }));
console.log(template({ name: 'Kris', familyName: 'Marinov' }));

var newTemplate = myTemplateEngine.compile('Hello from new @@name@@!');
console.log(newTemplate({ name: 'blabla' }));