import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTemperature } from "../../redux/slices/citiesSlice";
import { DateContainer } from "./styled";

function DateToday() {
  const [disabledFahrenheit, setDisabledFahrenheit] = useState(false);
  const [disabledCelsius, setDisabledCelsius] = useState(false);
  const temperatureByCity = useAppSelector((state) => state.city.main.temp);
  const dispatch = useAppDispatch();

  const setTemperatureFahrenheit = () => {
    const kelvinToFahrenheit = (
      ((temperatureByCity - 273.15) * 9) / 5 +
      32
    ).toFixed();
    dispatch(setTemperature(kelvinToFahrenheit));
    setDisabledFahrenheit(true);
  };

  const setTemperatureCelsius = () => {
    const fahrenheitToCelsius = (((temperatureByCity - 32) * 5) / 9).toFixed();
    dispatch(setTemperature(fahrenheitToCelsius));
    setDisabledCelsius(true);
  };
  const date = new Date().toString();
  const today = `${date.slice(0, 3)}, ${date.slice(4, 10)}, ${date.slice(
    11,
    15
  )}`;
  const dayYear = `${date.slice(0, 3)}, ${date.slice(11, 15)}`;
  return (
    <DateContainer>
      <div className="conteinerDate">
        <span className="generalDate">{dayYear}</span>
        <span className="specificDate">{today}</span>
      </div>
      <div className="temperatureButton">
        <button onClick={setTemperatureCelsius} disabled={disabledCelsius}>
          Convertir a ºC
        </button>
        <button
          onClick={setTemperatureFahrenheit}
          disabled={disabledFahrenheit}
        >
          Convertir a ºF
        </button>
      </div>
    </DateContainer>
  );
}

export { DateToday };
