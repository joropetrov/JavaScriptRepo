import { monkeys } from "./monkeys.js"

 (async() => {
    Handlebars.registerPartial(
        'monkey',
        await fetch('./monkey-template.hbs').then((r) => r.text())
    );

    const templateSrc = await fetch('./monkeys.hbs').then((r) => r.text());
    const template = Handlebars.compile(templateSrc);

    const resultHtml = template({ monkeys })

    document.querySelector('section').innerHTML += resultHtml;

    document.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const pinfo = btn.parentNode.querySelector('p'); 

           //destructuring props of info.style 
           const { display} = pinfo.style;
          
           if (display === "none") {
               pinfo.style.display = "block";
           }else{
               pinfo.style.display = "none";
           }
        })
    })
})()