import styled from "styled-components";

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
