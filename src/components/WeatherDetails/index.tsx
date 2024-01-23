import { MainContainer } from "./styled";
import { DateToday } from "../Date";
import { Weather } from "../Weather";
import { TemperatureGraph } from "../TemperatureGraph";

function WeatherDetails() {
  return (
    <MainContainer>
      <DateToday />
      <Weather />
      <TemperatureGraph />
    </MainContainer>
  );
}

export { WeatherDetails };
