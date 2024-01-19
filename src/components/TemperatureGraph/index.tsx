import { Graph } from "./styled";
import tempetatureGraph from "../../images/graficaTemperature.png";

function TemperatureGraph() {
  return (
    <Graph>
      <header>
        <h3>Hourly forecast</h3>
        <p>Tegal, Indonesia</p>
      </header>
      <figure>
        <img src={tempetatureGraph} alt="" />
      </figure>
    </Graph>
  );
}

export { TemperatureGraph };
