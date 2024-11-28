import styled from 'styled-components';

export const FiltersList = styled.div<{isMobile: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;

  @media (max-width: 640px) {
    box-sizing: border-box;
    width: calc(100% - (24px * 2));
  }

  box-sizing: border-box;

  @media (max-width: 740px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const FilterContainer = styled.span`
  width: 20%;
  min-width: 113px;

  @media (min-width: 480px) and (max-width: 740px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`

export const FoundUsersInfo = styled.p`
  padding: 0;
  /* background-color: green; */
  color: white;
  font-weight: 600;
  width: 15%;
`;
