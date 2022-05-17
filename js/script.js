var searchInput = document.getElementById("search-input");
var searchBtn = document.getElementById("search-button");
var cityName = document.getElementById("city-name");
var temperature = document.getElementById("temperature");
var windSpeed = document.getElementById("wind-speed");
var humidity = document.getElementById("humidity");
var uv = document.getElementById("uv-index");
const APIKey = "cf8ebe2a858a0dfabd6bcde6553f7dc5";

handleForm = function (event) {
    event.preventDefault();

};


fetchWeather = function (cityName) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName + "&appid=" + APIKey;

    fetch(queryURL)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        displayWeather(data, cityName);
                    })
            }
            else { alert("City not found"); }
        })
        .catch(function (error) {
            alert("API connection failed");
        });
};

function displayWeather(data, cityName) {
    
}

fetchWeather();