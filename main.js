document.getElementById('searchBtn').addEventListener('click', function() {
    let city = document.getElementById('city').value;
    if (city) {
        document.getElementById('loading').classList.remove('hidden');
        document.getElementById('weather-info').classList.add('hidden');
        document.getElementById('error').classList.add('hidden');
        fetchWeatherData(city);
    }
});

function fetchWeatherData(city) {
    const apiKey = '663a445237a3ae006c1da379c037bb86'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {throw new Error(err.message)});
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather Data:', data); 
            displayCurrentWeather(data);
            fetchForecastData(city);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            showError();
        });
}

function displayCurrentWeather(data) {
    const currentWeatherDiv = document.getElementById('current-weather');
    currentWeatherDiv.innerHTML = `
        <div class="weather-card">
            <h2>${data.name}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            <p><strong>Description:</strong> ${data.weather[0].description}</p>
        </div>
    `;
}

function fetchForecastData(city) {
    const apiKey = '663a445237a3ae006c1da379c037bb86'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {throw new Error(err.message)});
            }
            return response.json();
        })
        .then(data => {
            console.log('Forecast Data:', data); 
            displayForecast(data);
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
            showError();
        });
}

function displayForecast(data) {
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = '<h2>5-Day Forecast</h2>';
    let forecastHtml = '';

    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        if (date.getHours() === 12) { 
            forecastHtml += `
                <div class="weather-card">
                    <p><strong>${date.toDateString()}</strong></p>
                    <p><strong>Temperature:</strong> ${item.main.temp}°C</p>
                    <p><strong>Description:</strong> ${item.weather[0].description}</p>
                </div>
            `;
        }
    });

    forecastDiv.innerHTML += forecastHtml;
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('weather-info').classList.remove('hidden');
}

function showError() {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('error').classList.remove('hidden');
}
