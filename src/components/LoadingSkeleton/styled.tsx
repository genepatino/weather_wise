import styled from "styled-components";

export const Skeleton = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;

  .skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(
        198.9041095890411,
        54.074074074074076%,
        26.47058823529412%
      );
    }

    100% {
      background-color: hsl(
        202.07999999999998,
        77.63975155279505%,
        31.56862745098039%
      );
    }
  }

  .skeleton_container_task {
    width: 100%;
    height: 70px;
    border-radius: 5px;
    gap: 4px;
  }
`;
