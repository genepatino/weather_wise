import { MainContainer } from "./styled";
import { NameAppIcon } from "../NameAppIcon";
import { SearchCity } from "../SearchCity";
import { NameandWeatherLocation } from "../NameandWeatherLocation";
import { Temperature } from "../Temperature";
import { SunriseandSunset } from "../SunriseandSunset";

function WeatherResults() {
  return (
    <MainContainer>
      <NameAppIcon />
      <SearchCity />
      <NameandWeatherLocation />
      <Temperature />
      <SunriseandSunset />
    </MainContainer>
  );
}

export { WeatherResults };
