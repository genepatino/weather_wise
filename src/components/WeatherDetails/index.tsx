import { MainContainer } from "./styled";
import { Date } from "../Date";
import { Weather } from "../Weather";
import { TemperatureGraph } from "../TemperatureGraph";

function WeatherDetails() {
  return (
    <MainContainer>
      <Date />
      <Weather />
      <TemperatureGraph />
    </MainContainer>
  );
}

export { WeatherDetails };
