const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "ca94270137mshbf96f05f6d4ea7bp1c2693jsne741d5d2af48",
    "x-rapidapi-host": "weather-api138.p.rapidapi.com",
  },
};
const cityName = document.getElementById("name");
const weather = document.getElementById("sky");
const temp = document.getElementById("temp");
const windS = document.getElementById("wind");
const humidity = document.getElementById("hum");
const visi = document.getElementById("visi");

async function getWeather(city) {
  // const cityName = document.getElementById(".cname");
  // cityName.innerHTML = city;
  try {
    const response = await fetch(
      "https://weather-api138.p.rapidapi.com/weather?city_name=" + city,
      options
    );
    const result = await response.json();
    console.log(result);

    cityName.innerHTML = result.name;
    weather.innerHTML = result.weather[0].description;  
    let temperature= (result.main.temp)/10
    temp.innerHTML = temperature.toFixed(2);
    windS.innerHTML = result.wind.speed;
    humidity.innerHTML = result.main.humidity;
    visi.innerHTML = result.visibility;

  } catch (error) {
    console.error(error);
  }
}

// const form = document.getElementById("d-flex");
// const input = document.getElementById("form-control me-2");

searchbar.addEventListener("click", (event) => {
  event.preventDefault();
  const city= place.value
  console.log(city);
  getWeather(place.value);
});


