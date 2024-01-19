import { WeatherOverview, CardWeatherOverview } from "./styled";
import windSpeed from "../../images/viento.png";
import rain from "../../images/icons8-llovizna-2-48.png";

function Weather() {
  return (
    <WeatherOverview>
      <h3>Today Overview</h3>
      <CardWeatherOverview>
        <div className="cardContainer">
          <img src={windSpeed} alt="" />
          <span className="spanTitle">Wind Speed</span>
          <span className="spanValue">12 KM/h</span>
        </div>
        <div className="cardContainer">
          <img src={rain} alt="" />
          <span className="spanTitle">Rain Chance</span>
          <span className="spanValue">24%</span>
        </div>
        <div className="cardContainer">
          <img src={windSpeed} alt="" />
          <span className="spanTitle">Pressure</span>
          <span className="spanValue">720 hPa</span>
        </div>
        <div className="cardContainer">
          <img src={rain} alt="" />
          <span className="spanTitle">Humidity</span>
          <span className="spanValue">92%</span>
        </div>
      </CardWeatherOverview>
    </WeatherOverview>
  );
}

export { Weather };
