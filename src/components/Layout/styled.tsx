import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 320px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: 930px) {
    flex-direction: row;
  }
`;
