let weatherData;
async function getWeather(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=31b5dcbb872d413bbd5143944230510&q=${location}&aqi=no`);
        weatherData = await response.json();
        console.log(weatherData.current.condition.text)
    } catch(err) {
        console.log(err)
    }
}

getWeather('Costa rica');

// function getWeatherData(url) {
//     let p = Request(url)
//     return new Promise((resolve,reject) {

//     })
// }
