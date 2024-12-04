import styled from 'styled-components';

export const UsersSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const NoUsersResultMessage = styled.p`
  padding: 8px 16px;
  background-color: ${({theme}) => theme.colors.backgrounds.UsersTable.two};
  color: white;
  font-weight: 600;
  border-radius: 10px;
`;

export const FetchingErrorMessage = styled.p`
  padding: 8px 16px;
  background-color: ${({theme}) => theme.colors.backgrounds.UsersTable.two};
  color: white;
  font-weight: 600;
  border-radius: 10px;
`;
