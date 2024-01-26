import styled from "styled-components";

export const ErrorMessageContainer = styled.div`
  margin-top: 10px;
  color: #fed402;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  z-index: 1;

  .errorMessageIcon {
    font-size: 2.12rem;
  }

  .errorMessage {
    font-size: 1.2rem;
    letter-spacing: 0.06rem;
    font-weight: bold;
  }
`;
