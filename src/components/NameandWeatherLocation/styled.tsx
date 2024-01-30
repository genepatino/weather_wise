import styled from "styled-components";

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

    p::first-letter {
      text-transform: uppercase;
    }
  }
`;
