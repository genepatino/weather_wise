import { useAppSelector } from "../../redux/hooks";
import { NameLocation, WeatherLocation } from "./styled";
import climaIcon from "../../images/clima.png";

function NameandWeatherLocation() {
  const cityByUser = useAppSelector((state) => state.city);

  const weatherClouds = cityByUser
    .map((city) => city.weather.map((clima) => clima.description))
    .toString();

  const temperature = cityByUser.map((city) => city.main.temp);
  const celcius = `${(Number(temperature.toString()) - 273.15).toFixed()}ºC`;

  console.log(cityByUser.map((city) => city));
  return (
    <>
      <NameLocation>
        {cityByUser.length > 0 ? (
          cityByUser.map((city) => (
            <div key={city.id}>
              <h3>{city.name}</h3>
              <span>{city.sys.country}</span>
            </div>
          ))
        ) : (
          <div>
            <h3>Bogotá</h3>
            <span>Colombia</span>
          </div>
        )}
        <p>08:54 AM</p>
      </NameLocation>
      {cityByUser.length > 0 ? (
        cityByUser.map((city) => (
          <WeatherLocation key={city.id}>
            <div>
              <img src={climaIcon} alt="" />
              <span>{celcius}</span>
            </div>
            <div>
              <p>
                {weatherClouds.charAt(0).toUpperCase() +
                  weatherClouds.substring(1)}
              </p>
            </div>
          </WeatherLocation>
        ))
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
