import { Graph } from "./styled";
import { useAppSelector } from "../../redux/hooks";
import graficaGlobalLandAndOcean from "../../images/graficaGlobalLandAndOcean.svg";
import { useTranslation } from "react-i18next";

function TemperatureGraph() {
  const [t] = useTranslation("global");
  const cityData = useAppSelector((state) => state.weatherData.cityData);

  return (
    <Graph>
      <header>
        <h3>{t("weatherDetails.hourly-forecast")}</h3>
        <p>
          {cityData.name}, {cityData.sys.country}
        </p>
      </header>
      <figure>
        <img src={graficaGlobalLandAndOcean} alt="" />
      </figure>
    </Graph>
  );
}

export { TemperatureGraph };
