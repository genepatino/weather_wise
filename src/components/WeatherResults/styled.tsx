import styled, { keyframes } from "styled-components";

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const NameAppIcon = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  z-index: 1;

  img {
    width: 30px;
    animation: ${rotate} 5s linear infinite;
  }

  h3 {
    margin: 0;
    color: white;
    font-size: 1.6rem;
    font-weight: 100;
    letter-spacing: 0.2rem;
  }
`;

export const FormSelectCountry = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: -10px;

  input {
    padding: 10px;
    padding-left: 38px;
    background: white;
    outline: none;
    font-size: 1.6rem;
    border: 0;
    border-radius: 20px;
    transition: 0.2s;

    &:focus {
      box-shadow: 0 0 10px 1400px rgba(0, 0, 0, 0.3);
      outline: none;
    }
  }

  .icon-search {
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: 6px;
    left: 10px;
    color: grey;
  }
`;

export const NameLocation = styled.header`
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
      color: lightslategray;
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
  border-bottom: 1px solid lightslategray;
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
      font-size: 1.8rem;
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

  .wrapped {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media (min-width: 600px) {
      flex-direction: row;
      flex-wrap: nowrap;
    }

    @media (min-width: 930px) {
      flex-direction: column;
      width: auto;
    }
  }

  h3 {
    font-size: 1.8rem;
    color: white;
    margin: 0;
    font-weight: 100;
  }
`;

export const SunriseSunset = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2b2c5066;
  padding: 14px;
  border: 2px solid #3081d0;
  border-radius: 8px;

  @media (min-width: 930px) {
    width: auto;
  }

  div {
    display: flex;
    gap: 8px;

    img {
      width: 24px;
      height: 24px;
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
