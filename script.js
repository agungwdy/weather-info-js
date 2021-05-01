const searchButton = document.querySelector(".search-button");
const iconContainer = document.querySelector(".icons-container");
const tempContainer = document.querySelector(".temp-container");
const weatherContainer = document.querySelector(".weather-container");
const cityContainer = document.querySelector(".city-container");

searchButton.addEventListener("click", getData);

function getData() {
  const inputKeyword = document.querySelector(".input-keyword").value;
  const input = document.querySelector(".input-keyword");
  const base_url = "http://api.openweathermap.org/data/2.5/weather?q=";

  fetch(`${base_url}${inputKeyword}&APPID=660ee49c2df9de07336cffcde6a40f2e&units=metric`)
    .then((response) => response.json())
    .then((weatherData) => {
      // tangkap data masukkan kedalam variabel
      const { icon } = weatherData.weather[0];
      const { temp } = weatherData.main;
      const { main } = weatherData.weather[0];
      const { description } = weatherData.weather[0];
      const { name } = weatherData;

      // presentasikan data
      iconContainer.innerHTML = `<img src="icons/${icon}.png">`;
      tempContainer.innerHTML = `${temp}&#8451`;
      weatherContainer.innerHTML = `${main}, ${description}`;
      cityContainer.innerHTML = name;
    })
    .catch((erorr) => {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Enter city name correctly...",
      });
    });
  input.value = "";
}
