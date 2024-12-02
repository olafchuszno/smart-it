import styled from 'styled-components';
import Text from '../generics/Text/Text.tsx';

export const Header = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: ${({theme}) => theme.colors.backgrounds.Header.one};
  margin-bottom: -36px;
  box-sizing: border-box;
`;

export const Navigation = styled.nav`
  width: 100%;
  max-width: 1000px;
  background-color: ${({theme}) => theme.colors.backgrounds.Header.one};
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  transition: 0.1s all ease;

  @media (min-width: 640px) {
    padding-left: 0;
    padding-right: 0;
    transition: 0.1s all ease;
  }

  @media (max-width: 840px) {
    max-width: 600px;
  }

  @media (min-width: 840px) and (max-width: 1020px) {
    max-width: 800px;
  }

  @media (max-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.backgrounds.HeaderTitle.one};
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
  color: ${({theme}) => theme.colors.text.HeaderTitle.one};
  padding: 24px 0;
  font-weight: 300;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
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
