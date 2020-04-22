(() => {

    const BASE_URL = "https://judgetests.firebaseio.com/locations.json";
    const WEATHER_URL = "https://judgetests.firebaseio.com/forecast/{status}/{code}.json";

    const elements = {

        locationInput: document.querySelector("#location"),
        button: document.querySelector("#submit"),
        notificationHeading: document.querySelector('h1.notification'),
        currentDiv: document.querySelector('#current'),
        upcomingDiv: document.querySelector('#upcoming'),
        forecastWrapper: document.querySelector('#forecast')
    };

    const weatherSymbols = {
        s: "☀",
        p: "⛅",
        o: "☁",
        r: "☂",
        d: "°"
    };

    const errorHandler = (e) => {
        console.dir(e);
        elements.notificationHeading.textContent = e.message;
    };

    const jsonMiddleware = (response) => response.json();// normally we make if checks here

    const showWeatherLocation = ([todayData, upcomingData]) => {

        const { condition, high, low } = todayData.forecast;
        let forecastsDiv = createHTMLElement('div', ['forecasts']);
        let symbolSpan = createHTMLElement('span', ['condition', 'symbol'], weatherSymbols[condition[0].toLowerCase()]);
        let conditionSpan = createHTMLElement('span', ['condition']);

        let forecastFirstDataSoan = createHTMLElement('span', ['forecast-data'], todayData.name);

        let degreesInfo = `${low}${weatherSymbols.d}/${high}${weatherSymbols.d}`;

        let forecastSecondDataSoan = createHTMLElement('span', ['forecast-data'], degreesInfo);
        let forecastThirdDataSoan = createHTMLElement('span', ['forecast-data'], condition);

        conditionSpan.appendChild(forecastFirstDataSoan);
        conditionSpan.appendChild(forecastSecondDataSoan);
        conditionSpan.appendChild(forecastThirdDataSoan);

        forecastsDiv.appendChild(symbolSpan);
        forecastsDiv.appendChild(conditionSpan);

        elements.currentDiv.appendChild(forecastsDiv);
        elements.forecastWrapper.style.display = "block";

        showUpcomingWeatherLocation(upcomingData);
    };

    function showUpcomingWeatherLocation({ forecast, name }) {

        let forecastInfoDiv = createHTMLElement('div', ['forecast-info']);
        forecast.forEach(({ condition, high, low }) => {
            let counter = 0;

            let locationSpan = createHTMLElement('span', [location - name], name);

            let upcomingSpan = createHTMLElement('span', ['upcoming']);

            let symbolSpan = createHTMLElement('span', ['symbol'], weatherSymbols[condition[0].toLowerCase()]);

            let degreeseInfo = `${low}${weatherSymbols.d}/${high}${weatherSymbols.d}`;
            let degreeseSpan = createHTMLElement('span', ['forecast-data'], degreeseInfo);
            let conditionSpan = createHTMLElement('span', ['forecast-data'], condition);

            upcomingSpan.appendChild(locationSpan);

            upcomingSpan.appendChild(locationSpan);
            upcomingSpan.appendChild(symbolSpan);
            upcomingSpan.appendChild(degreeseSpan);
            upcomingSpan.appendChild(conditionSpan);

            forecastInfoDiv.appendChild(upcomingSpan);
        });

        elements.upcomingDiv.appendChild(forecastInfoDiv);

    }
    elements.button.addEventListener('click', getLocationVal);



    function getLocationVal() {

        const location = elements.locationInput.value;

        fetch(BASE_URL)
            .then(jsonMiddleware)
            .then((data) => {
                const { name, code } = data.find((obj) => obj.name === location);

                const CURRENT_TODAY_URL = WEATHER_URL.replace('{status}/{code}', `today/${code}`);
                const CURRENT_UPCOMING_URL = WEATHER_URL.replace('{status}/{code}', `upcoming/${code}`);


                Promise.all([
                    fetch(CURRENT_TODAY_URL).then(jsonMiddleware),
                    fetch(CURRENT_UPCOMING_URL).then(jsonMiddleware)
                ])
                    .then(showWeatherLocation)
                    .catch(errorHandler)
            })
            .catch(errorHandler)
    }


})();

function createHTMLElement(tagName, classNames, textContent) {

    let element = document.createElement(tagName);

    if (classNames) {
        element.classList.add(...classNames);
    }

    if (textContent) {
        element.textContent = textContent;
    }

    return element;
}