import { WeatherDetails } from "../WeatherDetails";
import { WeatherResults } from "../WeatherResults";
import { Wrapper } from "./styled";

function Layout() {
  return (
    <Wrapper>
      <WeatherResults />
      <WeatherDetails />
    </Wrapper>
  );
}

export { Layout };
