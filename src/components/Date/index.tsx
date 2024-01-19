import { useAppSelector } from "../../redux/hooks";
import { DateContainer } from "./styled";

function Date() {
  const cityByUser = useAppSelector((state) => state.city);
  const temperature = cityByUser.map((city) => city.main.temp);
  const celsius = `${(Number(temperature.toString()) - 273.15).toFixed()}ºC`;
  const fahrenheit = `${(
    ((Number(temperature.toString()) - 273.15) * 9) / 5 +
    32
  ).toFixed()}ºF`;

  console.log(fahrenheit, celsius);

  const convertCelsius = () => {
    console.log(celsius);
  };

  const convertFahrenheit = () => {
    console.log(fahrenheit);
  };
  return (
    <DateContainer>
      <div className="conteinerDate">
        <span className="generalDate">Monday 2022</span>
        <span className="specificDate">Monday, Jan 04, 2022</span>
      </div>
      <div className="temperatureButton">
        <button onClick={convertCelsius}>Convertir a ºC</button>
        <button onClick={convertFahrenheit}>Convertir a ºF</button>
      </div>
    </DateContainer>
  );
}

export { Date };
