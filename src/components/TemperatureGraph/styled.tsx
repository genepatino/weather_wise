import styled from "styled-components";

export const Graph = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    h3 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 100;
    }
    p {
      margin: 0;
      font-size: 1.3rem;
      color: #3081d0;
      font-weight: bold;
    }
  }

  figure {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 80%;
    }
  }
`;
