import { TemperaturePercentage, HourPercentContainer } from "./styled";

function Temperature() {
  return (
    <TemperaturePercentage>
      <h3>Change of rain</h3>
      <HourPercentContainer percentage={30}>
        <span>7 PM</span>
        <div>
          <div></div>
        </div>
        <span>30%</span>
      </HourPercentContainer>
      <HourPercentContainer percentage={50}>
        <span>8 PM</span>
        <div>
          <div></div>
        </div>
        <span>50%</span>
      </HourPercentContainer>
      <HourPercentContainer percentage={75}>
        <span>9 PM</span>
        <div>
          <div></div>
        </div>
        <span>75%</span>
      </HourPercentContainer>
      <HourPercentContainer percentage={60}>
        <span>10 PM</span>
        <div>
          <div></div>
        </div>
        <span>60%</span>
      </HourPercentContainer>
    </TemperaturePercentage>
  );
}

export { Temperature };
