import styled from 'styled-components';

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
