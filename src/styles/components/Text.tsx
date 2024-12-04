import styled from "styled-components";

export const Text = styled.p<{ $fontSize?: string; $fontWeight: number}>`
  color: ${({ theme }) => theme.colors.generics.text.Text.one};
  font-size: ${({ $fontSize }) => $fontSize ? $fontSize : '16px'};
  font-weight: ${({ $fontWeight }) => $fontWeight ? $fontWeight : 400};
  margin: 0;
  padding: 0;
`;