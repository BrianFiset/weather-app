async function getWeather(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=31b5dcbb872d413bbd5143944230510&q=${location}&aqi=no`);
        const weatherData = await response.json();
        console.log(weatherData)
    } catch(err) {
        console.log(err)
    }
}
