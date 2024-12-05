import styled from 'styled-components';

export const UsersTable = styled.table`
  box-sizing: border-box;
  max-width: 100%;
  width: calc(100%) !important;

  border-collapse: collapse;

  & th:first-child {
    border-radius: 6px 0 0 0;
  }

  & th:last-child {
    border-radius: 0 6px 0 0;
  }
`;

export const TableRow = styled.tr`
  display: flex;

  &:nth-of-type(even), &:only-child {
    background-color: ${({theme}) => theme.colors.backgrounds.UsersTable.three};
  }

  // hide last border
  &:last-child td,
  &:last-child th {
    border: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.colors.backgrounds.UsersTable.four};
  }
`;

export const TableHeadRow = styled.tr`
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const TableHeadCell = styled.th`
  /* align-items: flex-start; */
  /* justify-content: 'flex-start'; */

  box-sizing: border-box;

  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  width: 25%;

  font-size: 18px;
  padding: 16px;

  word-wrap: break-word;
  overflow-wrap: anywhere;
  width: calc(100% / 4);

  background-color: ${({theme}) => theme.colors.backgrounds.UsersTable.two};
  color: ${({theme}) => theme.colors.text.UsersTable.two};

  white-space: nowrap;

  @media (max-width: 640px) {
    padding: 12px;
    text-align: left;
    min-width: min-content;
  }

  @media (min-width: 840px) {
    gap: 20px;
  }
`;

export const TableCell = styled.th`
  color: ${({theme}) => theme.colors.text.UsersTable.one};
  font-size: 14px;
  font-weight: 400;

  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  word-wrap: break-word;
  padding: 16px;
  overflow-wrap: anywhere;
  width: calc(100% / 4);

  @media (max-width: 640px) {
    font-size: 12px;
    padding: 4px;
  }
`;

export const ButtonsContainer = styled.span`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 840px) {
    gap: 2px;
  }
`;

export const SortingButton = styled.button`
  display: flex;
  height: 10px;
  width: 10px;
  padding: 0;
  margin: 0;
  cursor: pointer;

  background-color: inherit;
  border: none;

  @media (min-width: 840px) {
    height: 12px;
    width: 12px;
  }
`;

export const ButtonImage = styled.img`
  height: 100%;
  width: 100%;
`;
