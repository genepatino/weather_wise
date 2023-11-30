import styled from "styled-components";

interface IHourPercentContainer {
  percentage: number;
}

export const MainContainer = styled.main`
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-image: linear-gradient(
    to left top,
    #0e73bf,
    #2875b6,
    #14558d,
    #1e4467,
    #071e34
  );
`;

export const NameLocation = styled.header`
  margin-top: 12px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: white;

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;

    h3 {
      font-size: 2rem;
      color: white;
      margin: 0;
      font-weight: 100;
    }

    span {
      color: #afabab;
      font-size: 1.6rem;
    }
  }

  p {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const WeatherLocation = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  border-bottom: 1px solid #afabab;
  padding-bottom: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 40px;
      height: 40px;
    }

    span {
      font-size: 3rem;
    }
  }
  div {
    width: 50%;

    p {
      width: 100%;
      margin: 0;
      font-size: 1.9rem;
      font-weight: 100;
      text-align: end;
    }
  }
`;

export const TemperaturePercentage = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 20px;

  h3 {
    font-size: 1.8rem;
    margin: 0;
    font-weight: 100;
  }
`;

export const HourPercentContainer = styled.div<IHourPercentContainer>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  place-items: center;

  div {
    width: 100%;
    height: 30px;
    background: #2b2c5066;
    border-radius: 16px;

    div {
      width: ${(props) => props.percentage}%;
      background-color: #173660;
    }
  }

  span {
    font-size: 1.3rem;
  }
`;

export const SunriseSunsetContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    font-size: 1.8rem;
    color: white;
    margin: 0;
    font-weight: 100;
  }
`;

export const SunriseSunset = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2b2c5066;
  padding: 14px;
  border: 2px solid #3081d0;
  border-radius: 8px;

  div {
    display: flex;
    gap: 8px;

    img {
      width: 20px;
      height: 20px;
    }
    .container {
      display: flex;
      flex-direction: column;

      .sunrise {
        font-size: 1.6rem;
        color: white;
      }
      .hour {
        font-size: 2rem;
        color: white;
      }
    }
  }
  .then {
    font-size: 1.4rem;
    color: white;
  }
`;
