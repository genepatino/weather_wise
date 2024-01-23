import { TemperaturePercentage, HourPercentContainer } from "./styled";

function Temperature() {
  const randomRainChange = (lowerLimit: number, upperLimit: number) => {
    return (
      Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit
    );
  };

  const changeRain1 = randomRainChange(10, 100);
  const changeRain2 = randomRainChange(10, 100);
  const changeRain3 = randomRainChange(10, 100);
  const changeRain4 = randomRainChange(10, 100);
  return (
    <TemperaturePercentage>
      <h3>Change of rain</h3>
      <HourPercentContainer percentage={changeRain1}>
        <span>7 PM</span>
        <div>
          <div></div>
        </div>
        <span>{changeRain1}%</span>
      </HourPercentContainer>
      <HourPercentContainer percentage={changeRain2}>
        <span>8 PM</span>
        <div>
          <div></div>
        </div>
        <span>{changeRain2}%</span>
      </HourPercentContainer>
      <HourPercentContainer percentage={changeRain3}>
        <span>9 PM</span>
        <div>
          <div></div>
        </div>
        <span>{changeRain3}%</span>
      </HourPercentContainer>
      <HourPercentContainer percentage={changeRain4}>
        <span>10 PM</span>
        <div>
          <div></div>
        </div>
        <span>{changeRain4}%</span>
      </HourPercentContainer>
    </TemperaturePercentage>
  );
}

export { Temperature };
