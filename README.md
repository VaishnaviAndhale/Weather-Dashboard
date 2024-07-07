# Weather-Dashboard
Weather Dashboard: A web application that provides current weather conditions and a 5-day forecast for any city worldwide. Powered by the OpenWeatherMap API, it offers a modern and user-friendly interface with dynamic styling, including error handling and loading indicators for a seamless user experience.
# Weather Dashboard

A simple and visually appealing weather dashboard that allows users to search for current weather conditions and a 5-day forecast for any city. This project leverages the OpenWeatherMap API to fetch weather data and provides a user-friendly interface with dynamic styling.

## Features

- Search for current weather and 5-day forecast by city name.
- Displays temperature, humidity, wind speed, and weather description.
- Clean and modern UI with responsive design.
- Error handling and loading indicators for better user experience.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need a web browser and an internet connection. You also need an API key from OpenWeatherMap.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/VaishnaviAndhale/Weather-Dashboard
    cd weather-dashboard
    ```

2. **Open `index.html` in your preferred web browser.**

3. **Replace the API key in `script.js`:**

    Open `script.js` and replace `663a445237a3ae006c1da379c037bb86` with your OpenWeatherMap API key:

    ```javascript
    const apiKey = '663a445237a3ae006c1da379c037bb86'; 
    ```

### Usage

1. **Open the project in a web browser.**
2. **Enter the name of a city in the search box.**
3. **Click the search button or press Enter.**
4. **View the current weather and 5-day forecast for the entered city.**

### Files

- `index.html` - The main HTML file for the project.
- `styles.css` - The CSS file containing styles for the project.
- `script.js` - The JavaScript file containing logic for fetching and displaying weather data.

### Project Structure

weather-dashboard/
│
├── index.html
├── styles.css
└── script.js
