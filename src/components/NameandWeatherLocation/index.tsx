import { useAppSelector } from "../../redux/hooks";
import { NameLocation, WeatherLocation } from "./styled";
import climaIcon from "../../images/clima.png";

function NameandWeatherLocation() {
  const cityData = useAppSelector((state) => state.city);
  const descriptionWeather = cityData.weather.map((item) => item.description);
  const temperatureInKelvin = cityData.main.temp;
  const metricUnitOfTemperature = useAppSelector(
    (state) => state.temperatureUnits.isFahrenheitTrue
  );

  let temperature;
  if (temperatureInKelvin > 0) {
    temperature = metricUnitOfTemperature
      ? `${(temperatureInKelvin - 273.15).toFixed()}ºC`
      : `${(((temperatureInKelvin - 273.15) * 9) / 5 + 32).toFixed()}ºF`;
  }

  console.log(metricUnitOfTemperature);

  const currenTime = new Date().toTimeString().slice(0, 5);
  let timeFormat;

  if (Number(currenTime.slice(0, 2)) < 12) {
    timeFormat = currenTime + " AM";
  } else {
    timeFormat = currenTime + " PM";
  }

  return (
    <>
      <NameLocation>
        {cityData.name && cityData.sys ? (
          <div key={cityData.id}>
            <h3>{cityData.name}</h3>
            <span>{cityData.sys.country}</span>
          </div>
        ) : (
          <div>
            <h3>Bogotá</h3>
            <span>Colombia</span>
          </div>
        )}
        <p>{timeFormat}</p>
      </NameLocation>
      <WeatherLocation>
        <div>
          <img src={climaIcon} alt="" />
          <span>{temperature}</span>
        </div>
        <div>
          <p>{descriptionWeather}</p>
        </div>
      </WeatherLocation>
    </>
  );
}

export { NameandWeatherLocation };
