const APIKey = process.env.API_KEY;

 export const fetchWeather = async() => await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${APIKey}&lang=kr`
  ).then(res=> res.json())