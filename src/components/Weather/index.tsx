import { WeatherOverview, CardWeatherOverview } from "./styled";
import windSpeed from "../../images/viento.png";
import rain from "../../images/icons8-llovizna-2-48.png";
import { useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";
import { LoadingSkeleton } from "../LoadingSkeleton";

function Weather() {
  const [t] = useTranslation("global");
  const characteristics = useAppSelector((state) => state.weatherData.cityData);
  const loading = useAppSelector((state) => state.weatherData.loading);
  return (
    <>
      {loading ? (
        <WeatherOverview>
          <CardWeatherOverview>
            <LoadingSkeleton />
            <LoadingSkeleton />
          </CardWeatherOverview>
        </WeatherOverview>
      ) : (
        <WeatherOverview>
          <h3>{t("weatherDetails.today-overview")}</h3>
          <CardWeatherOverview>
            <div className="cardContainer">
              <img src={windSpeed} alt="" />
              <span className="spanTitle">
                {t("weatherDetails.wind-speed")}
              </span>
              <span className="spanValue">
                {characteristics.wind.speed} m/s
              </span>
            </div>
            <div className="cardContainer">
              <img src={rain} alt="" />
              <span className="spanTitle">
                {t("weatherDetails.rain-chance")}
              </span>
              <span className="spanValue">
                {Math.floor(Math.random() * (100 - 10 + 1)) + 10}%
              </span>
            </div>
            <div className="cardContainer">
              <img src={windSpeed} alt="" />
              <span className="spanTitle">{t("weatherDetails.pressure")}</span>
              <span className="spanValue">
                {characteristics.main.pressure} hPa
              </span>
            </div>
            <div className="cardContainer">
              <img src={rain} alt="" />
              <span className="spanTitle">{t("weatherDetails.humidity")}</span>
              <span className="spanValue">
                {characteristics.main.humidity}%
              </span>
            </div>
          </CardWeatherOverview>
        </WeatherOverview>
      )}
    </>
  );
}

export { Weather };
