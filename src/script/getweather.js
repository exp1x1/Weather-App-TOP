import { API_KEY } from "./api_key";
import { error } from "./error";

export async function getWeather(location) {
  try {
    const weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`,
      { mode: "cors" }
    );

    const data = await weatherData.json();
    const bigData = {
      // city name
      name: data.name,
      // country name
      country: data.sys.country,
      // description of weather
      description: data.weather[0].description,
      // temp in Celsius
      ctemp: Math.round(data.main.temp),
      // convert temp to Celsius to fahrenheit
      ftemp: Math.round(data.main.temp * 1.8 + 32),
      // feel like weather temp
      feellike: Math.round(data.main.feels_like),
      // humidity in %percentege
      humidity: data.main.humidity,
      // wind speed in meter per sec
      windspeed: data.wind.speed,
    };
    // console.log(data)
    return bigData;
  } catch {
    error();
  }
}
