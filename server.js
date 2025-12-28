require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Разрешаем отдавать frontend
app.use(express.static("public"));

/*
  ===== WEATHER API (SERVER SIDE) =====
*/
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`;

    const response = await axios.get(weatherUrl);
    const data = response.data;

    const result = {
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      coordinates: {
        lat: data.coord.lat,
        lon: data.coord.lon
      },
      wind_speed: data.wind.speed,
      country: data.sys.country,
      rain_last_3h: data.rain ? data.rain["3h"] : 0
    };

    res.json(result);
  } catch (error) { 
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

/*
  ===== NEWS API =====
*/
app.get("/api/news", async (req, res) => {
  const country = req.query.country;

  try {
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}`;
    const response = await axios.get(newsUrl);

    const headlines = response.data.articles.slice(0, 5).map(article => article.title);

    res.json({ headlines });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
