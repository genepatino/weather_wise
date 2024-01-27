import styled from "styled-components";

interface IActiveButtonTranslate {
  active: string;
}

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
    color: white;
  }

  .temperatureButton {
    display: flex;
    flex-direction: column;
    height: 30px;
    gap: 5px;
  }
  .containerButtonTranslate {
    display: flex;
    gap: 4px;
  }
`;

export const ButtonTranslate = styled.button<IActiveButtonTranslate>`
  border: 0;
  font-weight: bold;
  border: 2px solid #295b89;
  border-radius: 4px;
  width: 40px;
  padding: 4px 0;
  font-size: 1.4rem;
  text-align: center;
  cursor: pointer;

  background: ${(props) => (props.active === "true" ? "#295b89" : "white")};
  color: ${(props) => (props.active === "true" ? "white" : " #295b89")};

  &.hover {
    cursor: pointer;
  }
`;
