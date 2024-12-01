# Weather Forecast Application

## Overview
This is a simple web application that allows users to retrieve current weather information for a specified city using the WeatherAPI service.

## Features
- User-friendly interface
- Real-time weather data retrieval
- Displays temperature and weather condition
- Responsive design with a modern, gradient background

## Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- WeatherAPI account (for API key)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://your-repository-url.git
cd weather-forecast-app
```

### 2. API Key Configuration
1. Sign up for a free account at [WeatherAPI](https://www.weatherapi.com/)
2. Create a `.env` file in the project root directory
3. Add your API key to the `.env` file:
```
WEATHER_API_KEY=your_actual_api_key_here
```

### 3. Environment Setup
Install `dotenv` to manage environment variables:
```bash
npm init -y
npm install dotenv
```

### 4. Modified JavaScript (script.js)
```javascript
// At the top of script.js
require('dotenv').config();

document.getElementById('getWeather').addEventListener('click', function() { 
    const city = document.getElementById('city').value;
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    // ... rest of your existing code remains the same
});
```

### 5. Security Notes
- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file
```
node_modules/
.env
```

## Technologies Used
- HTML5
- CSS3
- JavaScript
- WeatherAPI

## API Usage
- Service: WeatherAPI
- Endpoint: Current Weather
- Documentation: [WeatherAPI Docs](https://www.weatherapi.com/docs/)

## Styling
- Responsive design
- Linear gradient background
- Glassmorphism-inspired UI elements

## Error Handling
The application includes basic error handling for:
- Invalid city names
- API connection issues
- Missing weather data

## Customization
- Modify `style.css` to change color schemes
- Adjust `script.js` to add more weather details

## Limitations
- Free WeatherAPI plan has usage restrictions
- Requires active internet connection
- Temperature displayed in Celsius

## License
[Choose an appropriate license, e.g., MIT License]

## Credits
- Weather data provided by [WeatherAPI](https://www.weatherapi.com/)
- Created by [Your Name]

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support
For issues or questions, please open an issue in the GitHub repository.
