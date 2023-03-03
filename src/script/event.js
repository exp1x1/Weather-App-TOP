import { getWeather } from "./getweather";
import { updateData, playAnim } from "./DOM";

export const addEventListenerToSearch = () => {
  const sumBtn = document.getElementById("sum-btn");
  const searchBar = document.getElementById("search-bar");

  sumBtn.addEventListener("click", () => {
    const location = searchBar.value;
    getWeather(location).then((obj) => {
      updateData(obj);
      playAnim();
    });
  });
  // for starter display
  getWeather("surat").then((obj) => updateData(obj));
};
