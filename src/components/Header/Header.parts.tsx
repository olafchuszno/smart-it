import styled from 'styled-components';
import Text from '../generics/Text/Text.tsx';

export const TitleContainer = styled.div`
  width: 100%;
  background-color: #86bf2b;
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const Title = styled(Text)`
  max-width: 1000px;
  margin: 0;
  color: #fff;
  padding: 24px 0;
  font-weight: 300;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  text-align: start;

  max-width: 1000px !important;

  @media (max-width: 1020px) {
    width: 800px !important;

    max-width: 800px;
  }

  @media (max-width: 840px) {
    width: 600px !important;
  }
`;
