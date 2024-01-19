import styled from "styled-components";

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

  @media (min-width: 930px) {
    border-radius: 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
