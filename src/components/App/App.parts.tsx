import styled from 'styled-components';

// TODO make colors dynamic with THEME

export const App = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: stretch;
  align-items: center;
  margin-bottom: 100px;
`;

export const FiltersSection = styled.section`
  max-width: 1000px;
  width: 100%;
  background-color: #86bf2b;
  padding: 16px;
  border-radius: 16px;
  box-sizing: border-box;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  color: white;
  font-weight: 400;
  margin: 0;

  @media (max-width: 740px) {
    padding-bottom: 24px;
  }
`;

export const UsersTableSection = styled.section`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    box-sizing: border-box;
    width: calc(100% - (24px * 2));
  }
`;
