import styled from 'styled-components';
import { colors } from 'styles/constants/colors';

export const InputWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FilterLabel = styled.label`
  text-align: left;
  color: white;
  font-size: 14px;
  font-weight: 500;
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 4px;

  @media (min-width: 840px) {
    font-size: 16px;
  }
`;

export const FilterInput = styled.input`
  border: none;
  background-color: ${({theme}) => theme.colors.backgrounds.TextField.one};
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  max-width: 100%;

  /* &:focus {
    border-color: darkgreen;
  } */

  &::placeholder {
    color: ${({theme}) => theme.colors.text.TextField.one};;
  }
`;
