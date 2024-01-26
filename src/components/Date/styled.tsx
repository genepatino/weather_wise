import styled from "styled-components";

export const DateContainer = styled.header`
  display: flex;
  justify-content: space-between;
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

  .fahrenheitIcon {
    font-size: 20px;
    position: absolute;
    right: 6px;
    top: 4px;
    color: #173660;
  }

  .celsiusIcon {
    font-size: 20px;
    position: absolute;
    left: 6px;
    top: 4px;
    color: #173660;
  }

  .temperatureButton {
    display: flex;
    height: 30px;
    gap: 10px;
  }
`;
