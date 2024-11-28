import styled from "styled-components";

// TODO Change colors - make them dynamic from THEME

export const UsersTable = styled.table`
    width: 100%;
    border-radius: 12px;

    @media (max-width: 640px) {
      th, td {
        font-size: 12px;
        padding: 4px;
      }
    }
    `


export const TableRow = styled.tr`
  display: flex;

  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.04);
    color: white
  }

  // hide last border
  &:last-child td, &:last-child th {
    border: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgb(224, 224, 224)
  }
`;


export const TableHeadRow = styled.tr`
border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`


export const TableHeadCell = styled.th`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
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
    padding: 8px;
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
    th, td {
      font-size: 12px;
      padding: 4px;
    }
  }
`;

