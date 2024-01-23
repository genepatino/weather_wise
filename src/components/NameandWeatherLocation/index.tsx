import { useAppSelector } from "../../redux/hooks";
import { NameLocation, WeatherLocation } from "./styled";
import climaIcon from "../../images/clima.png";

function NameandWeatherLocation() {
  const cityByUser = useAppSelector((state) => state.city);
  const tempToString = cityByUser.main.temp.toString();

  const weatherClouds = cityByUser.weather.map((e) => e.description).toString();
  const kelvinToCelsius = (cityByUser.main.temp - 273.15).toFixed();

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
        {cityByUser.name && cityByUser.sys ? (
          <div key={cityByUser.id}>
            <h3>{cityByUser.name}</h3>
            <span>{cityByUser.sys.country}</span>
          </div>
        ) : (
          <div>
            <h3>Bogotá</h3>
            <span>Colombia</span>
          </div>
        )}
        <p>{timeFormat}</p>
      </NameLocation>
      {Object.entries(cityByUser).length > 1 ? (
        <WeatherLocation key={cityByUser.id}>
          <div>
            <img src={climaIcon} alt="" />
            {tempToString.length > 2 ? (
              <span>{`${kelvinToCelsius}ºC`}</span>
            ) : (
              <span>{`${cityByUser.main.temp}ºF`}</span>
            )}
          </div>
          <div>
            <p>
              {weatherClouds.charAt(0).toUpperCase() +
                weatherClouds.substring(1)}
            </p>
          </div>
        </WeatherLocation>
      ) : (
        <WeatherLocation>
          <div>
            <img src={climaIcon} alt="" />
            <span>24ºC</span>
          </div>
          <div>
            <p>Broken clouds</p>
          </div>
        </WeatherLocation>
      )}
    </>
  );
}

export { NameandWeatherLocation };
