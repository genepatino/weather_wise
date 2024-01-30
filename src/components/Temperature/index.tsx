import { TemperaturePercentage, HourPercentContainer } from "./styled";
import { useTranslation } from "react-i18next";

function Temperature() {
  const [t] = useTranslation("global");

  const randomRainChange = (lowerLimit: number, upperLimit: number) => {
    return (
      Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit
    );
  };

  const rainShiftBar1 = randomRainChange(10, 100);
  const rainShiftBar2 = randomRainChange(10, 100);
  const rainShiftBar3 = randomRainChange(10, 100);
  const rainShiftBar4 = randomRainChange(10, 100);

  const currenTime = new Date().toTimeString().slice(0, 2);

  const randomHour1 = randomRainChange(
    Number(currenTime),
    Number(currenTime) + 1
  );
  const randomHour2 = randomRainChange(randomHour1 + 1, randomHour1 + 1);
  const randomHour3 = randomRainChange(randomHour2 + 1, randomHour2 + 1);
  const randomHour4 = randomRainChange(randomHour3 + 1, randomHour3 + 1);

  return (
    <TemperaturePercentage>
      <h3>{t("weatherResult.rain-change-bar")}</h3>
      <HourPercentContainer percentage={rainShiftBar1}>
        <span>
          {randomHour1 > 12 ? randomHour1 + " PM" : randomHour1 + " AM"}
        </span>
        <div>
          <div></div>
        </div>
        <span>{rainShiftBar1}%</span>
      </HourPercentContainer>
      <HourPercentContainer percentage={rainShiftBar2}>
        <span>
          {randomHour2 > 12 ? randomHour2 + " PM" : randomHour2 + " AM"}
        </span>
        <div>
          <div></div>
        </div>
        <span>{rainShiftBar2}%</span>
      </HourPercentContainer>
      <HourPercentContainer percentage={rainShiftBar3}>
        <span>
          {randomHour3 > 12 ? randomHour3 + " PM" : randomHour3 + " AM"}
        </span>
        <div>
          <div></div>
        </div>
        <span>{rainShiftBar3}%</span>
      </HourPercentContainer>
      <HourPercentContainer percentage={rainShiftBar4}>
        <span>
          {randomHour4 > 12 ? randomHour4 + " PM" : randomHour4 + " AM"}
        </span>
        <div>
          <div></div>
        </div>
        <span>{rainShiftBar4}%</span>
      </HourPercentContainer>
    </TemperaturePercentage>
  );
}

export { Temperature };
