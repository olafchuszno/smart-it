import styled from "styled-components";

export const Text = styled.p<{$fontSize?: string}>`
  color: ${({ theme }) => theme.colors.generics.text.Text.one};
  font-size: ${({$fontSize}) => $fontSize ? $fontSize : '16px'};
  margin: 0;
  padding: 0;
`;