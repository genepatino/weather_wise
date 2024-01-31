import styled from "styled-components";

export const FormSelectCity = styled.form<{
  $displayCitiesContainer?: boolean;
}>`
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
    border-bottom-left-radius: ${(props) =>
      props.$displayCitiesContainer ? 0 : "8px"};
    border-bottom-right-radius: ${(props) =>
      props.$displayCitiesContainer ? 0 : "8px"};
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
  .loader {
    position: absolute;
    right: 8px;
    width: 36px;
    top: 12px;
    aspect-ratio: 2;
    --_g: no-repeat radial-gradient(circle closest-side, #3c4795 90%, #0000);
    background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
    background-size: calc(100% / 3) 50%;
    animation: l3 1s infinite linear;
    @keyframes l3 {
      20% {
        background-position: 0% 0%, 50% 50%, 100% 50%;
      }
      40% {
        background-position: 0% 100%, 50% 0%, 100% 50%;
      }
      60% {
        background-position: 0% 50%, 50% 100%, 100% 0%;
      }
      80% {
        background-position: 0% 50%, 50% 50%, 100% 100%;
      }
    }
  }
`;

export const RenderAllCitiesBySearch = styled.div<{
  $displayCitiesContainer: boolean;
}>`
  background-color: white;
  z-index: 2;
  position: absolute;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-bottom: 10px;
  display: ${(prosp) => (prosp.$displayCitiesContainer ? "flex" : "none")};
  flex-direction: column;
  gap: 8px;
  @media (min-width: 930px) {
    width: 255px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0;
    margin: 0;
    font-size: 1.3rem;
    height: 70px;
    overflow-y: auto;
    cursor: pointer;

    .list-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      font-size: 1.4rem;
      padding: 10px 38px;
      gap: 10px;

      :nth-child(3),
      :nth-child(2) {
        justify-self: end;
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
