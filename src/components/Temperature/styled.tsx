import styled from "styled-components";

interface IHourPercentContainer {
  percentage: number;
}

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
