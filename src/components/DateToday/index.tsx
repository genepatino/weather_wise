import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Switch from "react-switch";
import { useTranslation } from "react-i18next";

import { DateContainer, ButtonTranslate } from "./styled";
import { RiFahrenheitLine, RiCelsiusLine } from "react-icons/ri";
import {
  modifyMetricUnitChange,
  modifyModeTranslation,
} from "../../redux/slices/weatherDataSlice";

function DateToday() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");
  const EStranslations = useAppSelector(
    (state) => state.weatherData.isESTranslation
  );
  const dispatch = useAppDispatch();

  const changeLanguage = (format: string) => {
    dispatch(modifyModeTranslation()), i18n.changeLanguage(format);
  };

  const metricUnitOfTemperature = useAppSelector(
    (state) => state.weatherData.isFahrenheitTrue
  );

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
        <label style={{ textAlign: "end" }}>
          <Switch
            onChange={handleChange}
            checked={metricUnitOfTemperature}
            onColor="#bcc3cc"
            offColor="#bcc3cc"
            offHandleColor="#295b89"
            onHandleColor="#295b89"
            uncheckedIcon={<RiFahrenheitLine className="fahrenheitIcon" />}
            checkedIcon={<RiCelsiusLine className="celsiusIcon" />}
            width={60}
          />
        </label>
        <div className="containerButtonTranslate">
          <ButtonTranslate
            active={EStranslations.toString()}
            onClick={() => changeLanguage("es")}
          >
            ES
          </ButtonTranslate>
          <ButtonTranslate
            active={(!EStranslations).toString()}
            onClick={() => changeLanguage("en")}
          >
            EN
          </ButtonTranslate>
        </div>
      </div>
    </DateContainer>
  );
}

export { DateToday };
