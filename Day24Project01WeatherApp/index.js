/* Day 24: Project 1 - Weather App */

const API_Key = "2ecda6045b47359bc8747a1b75e5fb23";
const city_Name = document.getElementById('city').value;
console.log(city_Name);

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_Name}&appid=${API_Key}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Weather data:", data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
