import { WeatherOverview, CardWeatherOverview } from "./styled";
import windSpeed from "../../images/viento.png";
import rain from "../../images/icons8-llovizna-2-48.png";
import { useAppSelector } from "../../redux/hooks";

function Weather() {
  const characteristics = useAppSelector((state) => state.city);

  return (
    <WeatherOverview>
      <h3>Today Overview</h3>
      <CardWeatherOverview>
        <div className="cardContainer">
          <img src={windSpeed} alt="" />
          <span className="spanTitle">Wind Speed</span>
          <span className="spanValue">{characteristics.wind.speed} m/s</span>
        </div>
        <div className="cardContainer">
          <img src={rain} alt="" />
          <span className="spanTitle">Rain Chance</span>
          <span className="spanValue">
            {Math.floor(Math.random() * (100 - 10 + 1)) + 10}%
          </span>
        </div>
        <div className="cardContainer">
          <img src={windSpeed} alt="" />
          <span className="spanTitle">Pressure</span>
          <span className="spanValue">{characteristics.main.pressure} hPa</span>
        </div>
        <div className="cardContainer">
          <img src={rain} alt="" />
          <span className="spanTitle">Humidity</span>
          <span className="spanValue">{characteristics.main.humidity}%</span>
        </div>
      </CardWeatherOverview>
    </WeatherOverview>
  );
}

export { Weather };
