import styled from "styled-components";

export const WeatherOverview = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 100;
  }
`;

export const CardWeatherOverview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .cardContainer {
    display: grid;
    grid-template-columns: 60px repeat(2, 1fr);
    width: 100%;
    background: #f7f7f7d4;
    border-radius: 8px;
    padding: 14px;
    align-items: center;
    height: 48px;

    @media (min-width: 600px) {
      width: auto;
    }

    img {
      width: 24px;
      height: 24px;
    }

    .spanTitle {
      font-size: 1.6rem;
      font-weight: 100;
    }

    .spanValue {
      font-size: 2rem;
      font-weight: bold;
      justify-self: flex-end;
    }
  }
`;
