# Weather & News App

## Description
This project is a simple web application that fetches **weather data** and **news headlines** for a selected city.  
All API requests are handled **server-side** to keep API keys secure. The application displays the results in a clean, responsive interface.

---

## Features

1. **Weather Data (Server-side)**  
   - Temperature  
   - Feels like temperature  
   - Weather description  
   - Coordinates (latitude and longitude)  
   - Wind speed  
   - Country code  
   - Rain volume for the last 3 hours  

2. **News Headlines (Server-side)**  
   - Top 5 news headlines for the country of the selected city  
   - If the country is not supported by News API, default US headlines are shown  

---

## Project Structure



BACKEND_2ASS/
│     
├── public/
│   │
│   ├── index.html              # interface
│   ├── style.css               # style
│   └── script.js               # Frontend (fetch запросы)
│
├── .env                        # API key 
├── service.js                  # Working with the API interface
├── package.json
└── README.md





## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/ynagi-1/BAck-end-2
cd project
````

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file in the project root with your API keys:

```env
OPENWEATHER_API_KEY=5fb2a5d7f492be83a52a67d9a965ff02
NEWS_API_KEY=143c61d767b14a50965f11cfe3efdf7f
```

4. Start the server:

```bash
npm server.js
```

5. Open the application in your browser:

```
http://localhost:3000
```

---

## API Usage

* **Weather API**: OpenWeather (server-side)

  * Endpoint: `/api/weather?city=<CITY_NAME>`
  * Returns JSON with all required weather fields

* **News API**: NewsAPI.org (server-side)

  * Endpoint: `/api/news?country=<COUNTRY_CODE>`
  * Returns top 5 headlines for the given country

---

## Design Decisions

* **Server-side API requests**: Protects API keys and avoids exposing them in the frontend
* **Default country for News API**: If News API does not support a country, US news is displayed
* **Responsive design**: Simple CSS media queries for mobile and desktop
* **Clean and readable code**: Clear file structure and comments in server.js and script.js

---

## Screenshots
<img width="1919" height="1016" alt="image" src="https://github.com/user-attachments/assets/dcaed364-f98d-4994-b4ef-72dc5d82eb3e" />


**Weather Example:**

```
Weather
Temperature: -15.03°C
Feels like: -19.96°C
Description: clear sky
Wind speed: 2 m/s
Country: KZ
Rain (last 3h): 0 mm
```

**News Example:**

```
News
• Headline 1
• Headline 2
• Headline 3
• Headline 4
• Headline 5
```

---



