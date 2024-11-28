import styled from 'styled-components';

export const FiltersList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

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

export const FoundUsersInfo = styled.p`
  padding: 8px;
  border-radius: 8px;
  /* background-color: green; */
  color: white;
  font-weight: 600;

  @media (min-width: 840px) {
    width: 10%;
  }
`;
