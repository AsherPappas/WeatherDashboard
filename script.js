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


}