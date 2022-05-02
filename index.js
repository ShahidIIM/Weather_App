let container = document.getElementById("container");
let API_KEY = "96cbe12eba46cc389e6228c337d06bbf";
async function getWeatherData() {
  try {
    let city = document.getElementById("city").value;
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );


    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

function displayData(data) {
  container.innerHTML = "";

  let weatherCard = document.createElement("div");
  let name = document.createElement("p");
  name.textContent = "City : " + data.name;
  let temp = document.createElement("p");
  temp.textContent = "Temperature : " + data.main.temp + "°C";
  
  let pressure = document.createElement("p");
  pressure.textContent = "Pressure : " + data.main.pressure;

  let humidity = document.createElement("p");
  humidity.textContent = "Humidity : " + data.main.humidity +"%";

  let speed = document.createElement("p");
  speed.textContent = "WindSpeed : " + data.wind.speed;

  let sunrise = document.createElement("p");
  sunrise.textContent = "Sunrise : " + data.sys.sunrise;

  let sunset = document.createElement("p");
  sunset.textContent = "Sunset : " + data.sys.sunset;

  let weather = document.createElement("p");
  weather.textContent = "Description: " + data.weather[0].description;

  

  weatherCard.append(name, temp,pressure, humidity,  speed, sunrise, sunset, weather);

  let iframe = document.createElement("iframe");
  iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  iframe.width = 600;
  iframe.height = 450;

  container.append(weatherCard, iframe);
}
