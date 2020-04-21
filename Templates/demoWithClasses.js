
class TemplateEngine{

    constructor(start, end){
        this.startDelimiter = start;
        this.endDelimiter = end;
        this.searchStr = `${this.startDelimiter}?([A-Za-z]+)${this.endDelimiter}`;
    }

    compile(template){
        var searchExp = new RegExp(this.searchStr);
    
        return function(obj){
            var match;
            var result = template;
    
            while (match = searchExp.exec(result)) {
                result = result.replace(match[0], obj[match[1]]);
            }
    
            return result;
        };
    };
}
    var myTemplateEngine = new TemplateEngine('{{', '}}');
    var template = myTemplateEngine.compile('Hello, my name is {{name}} {{familyName}}!');
    console.log(template({name: 'Pesho', familyName: 'Ivanov'}));
  
    console.log(template({name: 'Geri', familyName: 'Petrova'}));
    console.log(template({name: 'Kris', familyName: 'Marinov'}));
    
