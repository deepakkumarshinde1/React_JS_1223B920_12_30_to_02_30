const cityNameInput = document.querySelector("#city-name");
const searchCity = document.querySelector("#searchCity");
const weatherTBody = document.querySelector("#weatherTBody");
const API_KEY = "338d7049189196fba6402362a0f256f2";
let localData = localStorage.getItem("weatherList");
// to convert preserver string to array
// JSON.parse()

let cityWeatherList = [];

if (localData !== null) {
  cityWeatherList = JSON.parse(localData);
  printWeatherDetails(cityWeatherList);
}
// add click event to button
searchCity.addEventListener("click", function () {
  let city = cityNameInput.value;
  if (isExists(city)) {
    getWeatherData(city);
    cityNameInput.value = "";
  } else {
    alert("Already Searched...");
  }
});

function isExists(_value) {
  let found = cityWeatherList.find(function (_weatherDetails) {
    return _weatherDetails.name.toLowerCase() === _value.toLowerCase();
  });

  return found === undefined ? true : false;
}

async function getWeatherData(_city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${_city}&appid=${API_KEY}`;
  // template string;

  // api call method
  let serverResponse = await fetch(url, { method: "GET" });
  let data = await serverResponse.json();

  if (data.cod == "404") {
    alert("City Not Found");
  } else {
    cityWeatherList.unshift(data); // update

    // add / update list in local storage
    //  convert array to a preserve string --->  JSON.stringify()
    localStorage.setItem("weatherList", JSON.stringify(cityWeatherList));

    // array or string

    printWeatherDetails(cityWeatherList);
  }
}

function printWeatherDetails(_cityWeatherList) {
  let _tr = _cityWeatherList.map(function (_cityWeather) {
    return ` <tr>
                <td>${_cityWeather.name}</td>
                <td>${_cityWeather.main.temp_min} <sup>o</sup>C</td>
                <td>${_cityWeather.main.temp_max} <sup>o</sup>C</td>
                <td>${_cityWeather.weather[0].main} (<img src="http://openweathermap.org/img/w/${_cityWeather.weather[0].icon}.png" alt="" />)</td>
            </tr>`;
  });
  weatherTBody.innerHTML = _tr.join("");
}
