// Initiate page
function initPage() {
    const inputEl = document.getElementById("city-input");
    const searchEl = document.getElementById("searh-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById(humidity);
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory);

// Personal API key 
const APIKey = "d4294475a91f8a0c51e1020ccf4305ad";

// Get Weather function for Current and Forecast 
function getWeather(cityName) {
    let queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
    // Uses the Date constructor to return the date timestamp * 1000 ms
        const currentDate = new Date(response.dt*1000);
        const day = currentDate.getDate();
    // Returns the month of the year in numerical value of 0-11, so add 1
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        nameEl.innerHTML = response.name + " (" + month + "/" + day "/" + year + ") ";
    // Calls the weather icon object
        let weatherPic = response.weather[0].icon;
        currentPicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
        currentPicEl.setAttribute("alt",response.weather[0].description);
     // Calls the temp, humidity, and wind speed objects
        currentTempEl.innerHTML = "Temperature: " + k2f(response.main.temp) + "&#176F";
        currentHumidityEl.innerHTML = "Humidity: " + response.main.humidity + "%";
        currentWindEl.innerHTML = "Wind Speed: " + response.wind.speed + " MPH";

      // Getting longitude and latitude for the one-call-api
    })
}
}