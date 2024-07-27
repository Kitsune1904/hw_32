const weaterBlock = document.getElementById("weather-holder");

const getWeather = () => {
  const weatherURL =
    "https://api.openweathermap.org/data/2.5/weather?q=Odesa&units=metric&APPID=510dc831b496dfaaed4b03f9b4f425e8";
  fetch(weatherURL, {
    method: "get",
    mode: "cors",
  })
    .then((response) => {
      response
        .json()
        .then((data) => {
          showData(data);
          console.log(data);
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

getWeather();

const showData = (data) => {
  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  weaterBlock.innerHTML = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2> 
        <img src="${iconUrl}" alt="Weather icon">
        <p><span>Temperature:</span> ${data.main.temp}°C</p>
        <p><span>Pressure:</span> ${data.main.pressure} hPa</p>
        <p><span>Description:</span> ${data.weather[0].description}</p>
        <p><span>Humidity:</span> ${data.main.humidity}%</p>
        <p><span>Wind speed:</span> ${data.wind.speed} m/s</p>
        <p><span>Direction of wind:</span> ${data.wind.deg}°</p>
        `;
};
