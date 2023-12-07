import styled from "styled-components";

export const MainContainer = styled.main`
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Date = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid lightgrey;

  .conteinerDate {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .generalDate {
      font-size: 2rem;
      font-weight: 100;
    }
    .specificDate {
      font-size: 1.6rem;
      color: lightslategray;
      margin-bottom: 20px;
    }
  }
`;

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
    grid-template-columns: repeat(3, 1fr);
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

export const TemperatureGraph = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    h3 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 100;
    }
    p {
      margin: 0;
      font-size: 1.3rem;
      color: #3081d0;
      font-weight: bold;
    }
  }

  figure {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 80%;
    }
  }
`;
