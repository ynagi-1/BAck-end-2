async function getWeather() {
  const city = document.getElementById("city").value;

  if (!city) {
    alert("Enter city name");
    return;
  }

  const weatherResponse = await fetch(`/api/weather?city=${city}`);
  const weatherData = await weatherResponse.json();

  if (weatherData.error) {
    document.getElementById("weather").innerHTML =
      `<p style="color:red">${weatherData.error}</p>`;
    return;
  }

  document.getElementById("weather").innerHTML = `
    <h2>Weather</h2>
    <p>Temperature: ${weatherData.temperature} °C</p>
    <p>Feels like: ${weatherData.feels_like} °C</p>
    <p>Description: ${weatherData.description}</p>
    <p>Wind speed: ${weatherData.wind_speed} m/s</p>
    <p>Country: ${weatherData.country}</p>
    <p>Rain (last 3h): ${weatherData.rain_last_3h} mm</p>
  `;

  const newsResponse = await fetch(`/api/news?country=${weatherData.country}`);
  const newsData = await newsResponse.json();

  document.getElementById("news").innerHTML = `
    <h2>News</h2>
    <ul>
      ${newsData.headlines.map(h => `<li>${h}</li>`).join("")}
    </ul>
  `;
}
