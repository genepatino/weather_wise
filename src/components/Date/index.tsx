import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { modifyMetricUnitChange } from "../../redux/slices/temperatureUnitsSlice";
import Switch from "react-switch";

import { DateContainer } from "./styled";
import { RiFahrenheitLine, RiCelsiusLine } from "react-icons/ri";

function DateToday() {
  const metricUnitOfTemperature = useAppSelector(
    (state) => state.temperatureUnits.isFahrenheitTrue
  );

  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(modifyMetricUnitChange());
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
        <label>
          <Switch
            onChange={handleChange}
            checked={metricUnitOfTemperature}
            onColor="#3498DB"
            offColor="#bcc3cc"
            offHandleColor="#3498DB"
            uncheckedIcon={<RiFahrenheitLine className="fahrenheitIcon" />}
            checkedIcon={<RiCelsiusLine className="celsiusIcon" />}
            width={60}
          />
        </label>
      </div>
    </DateContainer>
  );
}

export { DateToday };
