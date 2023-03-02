export const updateData = (obj) => {
  const feellikeTemp = document.querySelector(".feellike-temp");
  const humidity = document.querySelector(".humidity");
  const windSpeed = document.querySelector(".wind-speed");
  const temp = document.querySelector(".temp");
  const description = document.querySelector(".description");
  const cityName = document.querySelector(".city-name");

  feellikeTemp.textContent = obj.feellike;
  humidity.textContent = obj.humidity;
  windSpeed.textContent = obj.windspeed;
  temp.textContent = obj.ctemp;
  description.textContent = obj.description;
  cityName.textContent = `${obj.name},${obj.country}`;
};
