import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const IconAppContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  z-index: 1;

  img {
    width: 30px;
    animation: ${rotate} 5s linear infinite;
  }

  h3 {
    margin: 0;
    color: white;
    font-size: 1.6rem;
    font-weight: 100;
    letter-spacing: 0.2rem;
  }
`;
