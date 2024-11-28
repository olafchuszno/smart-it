import styled from 'styled-components';

// TODO Change colors - make them dynamic from THEME

export const UsersTable = styled.table`
  width: 100%;
  border-radius: 16px;
  border-collapse: collapse;
  border-spacing: 0px;

  @media (max-width: 1020px) {
    max-width: 800px;
  }

  @media (max-width: 840px) {
    max-width: 600px;
  }
`;

export const TableRow = styled.tr`
  display: flex;

  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.04);
    color: white;
  }

  // hide last border
  &:last-child td,
  &:last-child th {
    border: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgb(224, 224, 224);
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

  background-color: #86bf2b;
  color: white;

  white-space: nowrap;

  @media (max-width: 640px) {
    padding: 12px;
  }

  @media (min-width: 840px) {
    gap: 20px;
  }
`;

export const TableCell = styled.th`
  color: black;
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
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @include for-desktop() {
    gap: 2px;
  }
`

export const SortingButton = styled.button`
  display: flex;
  height: 10px;
  width: 10px;
  padding: 0;
  margin: 0;
  cursor: pointer;

  background-color: transparent;
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
