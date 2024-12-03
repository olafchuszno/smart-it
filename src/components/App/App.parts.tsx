import styled from 'styled-components';

export const App = styled.div`
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: stretch;
  align-items: center;
  margin-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.backgrounds.App.one};
  min-height: 100vh;
  padding-bottom: 100px;
  margin-bottom: 0;

`;

