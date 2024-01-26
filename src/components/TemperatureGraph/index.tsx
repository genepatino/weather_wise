import { Graph } from "./styled";
import { useAppSelector } from "../../redux/hooks";
import graficaGlobalLandAndOcean from "../../images/graficaGlobalLandAndOcean.svg";

function TemperatureGraph() {
  const cityData = useAppSelector((state) => state.city);

  return (
    <Graph>
      <header>
        <h3>Hourly forecast</h3>
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
