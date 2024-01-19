import styled from "styled-components";

export const FormSelectCity = styled.form<{ $displayCities?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: -10px;

  input {
    padding: 10px;
    padding-left: 38px;
    background: white;
    border-radius: 8px;
    border-bottom-left-radius: ${(props) => (props.$displayCities ? 0 : "8px")};
    border-bottom-right-radius: ${(props) =>
      props.$displayCities ? 0 : "8px"};
    outline: none;
    font-size: 1.6rem;
    border: 0;
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

export const RenderAllCitiesBySearch = styled.div<{ $displayCities?: boolean }>`
  background-color: white;
  z-index: 2;
  position: relative;
  top: -4px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0;
    margin: 0;
    font-size: 1.3rem;
    height: 50px;
    overflow-y: auto;
    cursor: pointer;

    .list-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      font-size: 1.4rem;
      padding: 10px 0;
      padding-left: 38px;

      :nth-child(3) {
        justify-self: center;
      }

      &:hover {
        background-color: #c1bebe5c;
      }

      p {
        margin: 0;
        padding: 0;
      }
    }

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      background-color: white;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: white;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #cec2c2;
      border-radius: 5px;
    }
  }
`;
