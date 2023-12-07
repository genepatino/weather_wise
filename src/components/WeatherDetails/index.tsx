import windSpeed from "../../images/viento.png";
import rain from "../../images/icons8-llovizna-2-48.png";
import tempetatureGraph from "../../images/graficaTemperature.png";
import {
  CardWeatherOverview,
  Date,
  MainContainer,
  TemperatureGraph,
  WeatherOverview,
} from "./styled";

function WeatherDetails() {
  /* const getCity = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=2c40dae43d9f1a21b4dd903e214ca11f"
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getCity();
  }, []);
 */
  return (
    <MainContainer>
      <Date>
        <div className="conteinerDate">
          <span className="generalDate">Monday 2022</span>
          <span className="specificDate">Monday, Jan 04, 2022</span>
        </div>
      </Date>
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
      <TemperatureGraph>
        <header>
          <h3>Hourly forecast</h3>
          <p>Tegal, Indonesia</p>
        </header>
        <figure>
          <img src={tempetatureGraph} alt="" />
        </figure>
      </TemperatureGraph>
    </MainContainer>
  );
}

export { WeatherDetails };
