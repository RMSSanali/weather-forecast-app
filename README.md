# Weather Forecast App

A responsive weather forecast web application built with React and Vite. The application retrieves current weather data and a five-day forecast from the OpenWeather API and presents the information in a simple, visual interface.

This project was created as part of an academic assignment in frontend development with React.

## Features

- Display current weather for Stockholm by default
- Search for weather in different cities
- Show current temperature
- Display weather conditions
- Show the current date
- Display feels-like temperature
- Show wind speed
- Show humidity
- Show atmospheric pressure
- Display a five-day weather forecast
- Show minimum and maximum temperatures
- Display weather icons for forecast conditions
- Use weather-specific background colors and images
- Show loading feedback while retrieving data
- Display an error message when a city cannot be found
- Add cities to a favorites list
- Store favorite cities in browser `localStorage`
- Open weather information for a saved favorite city
- Remove cities from the favorites list
- Responsive layout for desktop, tablet, and mobile screens

## Technologies

- React 19
- JavaScript
- Vite
- CSS
- OpenWeather API
- Browser `localStorage`
- HTML5
- ESLint

## How the Application Works

When the application starts, it automatically retrieves the current weather for Stockholm.

Users can enter a city name in the search field and request new weather data. The application sends requests to the OpenWeather API and displays the returned information.

The application retrieves:

- Current weather conditions
- Current temperature
- Feels-like temperature
- Wind speed
- Humidity
- Atmospheric pressure
- Five-day forecast information

Weather conditions such as clear skies, clouds, rain, snow, haze, and mist are represented with different images and background colors.

## Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── cloudy.png
│   │       ├── loadingImg.gif
│   │       ├── rainy.png
│   │       ├── snowy.png
│   │       └── sunny.png
│   ├── components/
│   │   ├── Favorites.jsx
│   │   ├── Forecast.jsx
│   │   ├── SearchBar.jsx
│   │   ├── WeatherApp.jsx
│   │   └── WeatherCard.jsx
│   ├── services/
│   │   └── weatherService.js
│   ├── styles/
│   │   ├── Favorites.css
│   │   ├── Forecast.css
│   │   ├── SearchBar.css
│   │   ├── WeatherApp.css
│   │   └── WeatherCard.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
└── vite.config.js
```
## How to Run

### Requirements

- Node.js
- npm
- A modern web browser
- An OpenWeather API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RMSSanali/weather-forecast-app.git
   ```

2. Open the project folder:

   ```bash
   cd weather-forecast-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Configure your OpenWeather API key in:

   ```text
   src/services/weatherService.js
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL shown in the terminal, usually:

   ```text
   http://localhost:5173
   ```

## Available Commands

Start the development server:

```bash
npm run dev
```

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## How to Use

1. Open the application in a web browser.
2. The weather for Stockholm is displayed by default.
3. Enter a city name in the search field.
4. Press Enter or select the search icon.
5. View the current weather information for the selected city.
6. Review the five-day forecast.
7. Select **Add to Favorites** to save the current city.
8. Select **Favorites** to display saved cities.
9. Select a saved city to load its weather information.
10. Select the remove button to delete a city from the favorites list.

## API Integration

The application uses the OpenWeather API to retrieve weather information.

The following API endpoints are used:

- Current weather data:

  ```text
  https://api.openweathermap.org/data/2.5/weather
  ```

- Five-day forecast data:

  ```text
  https://api.openweathermap.org/data/2.5/forecast
  ```

Weather data is requested using the selected city name and metric units.

## Data Handling

The application uses React state to manage:

- Weather data
- Forecast data
- Search location
- Loading status
- Error messages
- Favorite locations
- Favorite-list visibility

Favorite locations are saved in the browser using `localStorage`. This means that saved cities remain available when the user returns to the application in the same browser.

## Error Handling

The application provides feedback when:

- A city cannot be found
- The weather API request fails
- A network error occurs
- Weather data is still loading

## Academic Context

This project was created to demonstrate knowledge of:

- Building applications with React
- Creating reusable React components
- Managing state with React hooks
- Calling and handling data from a web API
- Displaying dynamic data in a web interface
- Structuring a frontend application
- Handling loading and error states
- Using browser storage
- Creating responsive and user-friendly layouts
- Using GitHub for version control

The project fulfills the main requirements of the assignment by providing current weather information, a five-day forecast, a search function, and a React-based user interface.

The optional favorite-location functionality was also implemented using browser `localStorage`.

## Security Note

The OpenWeather API key should not be committed directly to a public repository.

For a safer implementation, store the API key in an environment file:

```text
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

Then access it in the application using:

```javascript
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
```

The environment file should be added to `.gitignore`.

## Future Improvements

Possible future improvements include:

- Move the API key to an environment variable
- Add automatic location detection using browser geolocation
- Add support for searching by country
- Add a dark mode
- Add hourly weather forecasts
- Add more detailed weather information
- Add unit conversion between Celsius and Fahrenheit
- Improve accessibility support
- Add automated tests
- Add animations for changing weather conditions
- Improve form validation
- Add a backend service to protect API credentials
- Deploy the application to a hosting platform

## Author

Created by [RMSSanali](https://github.com/RMSSanali).

## Repository

[View the project on GitHub](https://github.com/RMSSanali/weather-forecast-app)

## License

This project was created for educational purposes.

<img width="3840" height="2280" alt="stockholm-weather" src="https://github.com/user-attachments/assets/145daebd-74e6-49a8-9478-ce321f31cf41" />
<img width="3840" height="2280" alt="new-york-weather" src="https://github.com/user-attachments/assets/d3ee4c46-635c-4a3b-acf7-be3367c568cf" />
<img width="3840" height="2280" alt="sri-lanka-weather" src="https://github.com/user-attachments/assets/4618ba61-980f-401e-b9ff-a44259d05828" />

