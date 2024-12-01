require('dotenv').config();

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value; // Get city name from input
    const apiKey = process.env.WEATHER_API_KEY; 
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or API error');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the entire response for debugging
            const weatherResult = document.getElementById('weatherResult');
            if (!data.current) {
                throw new Error('Weather data not found');
            }
            const temperature = data.current.temp_c; // Temperature in Celsius
            const description = data.current.condition.text; // Weather description

            weatherResult.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${temperature} °C</p>
                <p>Description: ${description}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>Error: ${error.message}</p>`;
        });
});
