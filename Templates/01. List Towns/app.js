const elements = {

    loadBtn: document.querySelector('#btnLoadTowns'),
    countriesWrapper: document.querySelector('#root')
}

elements.loadBtn.addEventListener('click', () => {
    
    Promise.all([
        fetch('https://restcountries.eu/rest/v2/all').then((r) => r.json()),
        fetch('./template.hbs').then((r) => r.text())
    ])
    .then(([countries, templateHbs]) => {

        const template = Handlebars.compile(templateHbs);
        const resultHtml = template({countries});
        elements.countriesWrapper.innerHTML = resultHtml;

    })
});