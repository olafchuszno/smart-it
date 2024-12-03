import styled from "styled-components";

export const Main = styled.main`
  max-width: 1000px;

  @media (max-width: 1020px) {
    max-width: 800px;
  }

  @media (max-width: 840px) {
    max-width: 600px;
  }

  @media (max-width: 640px) {
    box-sizing: border-box;
    width: calc(100% - (24px * 2));
  }
`;