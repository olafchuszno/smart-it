import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
gap: 36px;
box-sizing: border-box;
width: 100%;

max-width: 1000px;
  @media (max-width: 840px) {
    max-width: 600px;
  }

  @media (min-width: 840px) and (max-width: 1020px) {
    max-width: 800px;
  }
`

export const FiltersSection = styled.section`
  max-width: 1000px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.backgrounds.FiltersSection.one};
  padding: 16px;
  border-radius: 16px;
  box-sizing: border-box;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

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

export const FiltersTitle = styled.h2`
  font-size: 32px;
  color: ${({theme}) => theme.colors.text.FiltersSection.one};
  font-weight: 400;
  margin: 0;

  @media (max-width: 740px) {
    padding-bottom: 24px;
  }
`;

export const UsersTableSection = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    box-sizing: border-box;
    width: calc(100% - (24px * 2));
  }
`;

