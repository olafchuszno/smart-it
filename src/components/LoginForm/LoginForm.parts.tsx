import styled from 'styled-components';
import { colors } from 'styles/constants/colors';

export const LoginForm = styled.form`
  background-color: ${({theme}) => theme.colors.backgrounds.LoginForm.one};
  border: 2px solid ${colors.gray.darker.trans['20']};
  max-width: 400px;
  width: 50%;
  border-radius: 36px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const InputError = styled.span`
  max-width: 100%;
  text-align: center;
`;
  export const FormTitle = styled.h1``;

  export const SubmitButton = styled.button`
    height: 40px;
    background-color: ${colors.gray.lighter};
    border: 2px solid ${colors.gray.darker.trans['20']};
    border-radius: 12px;
  `;

  export const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  `;

  export const FormInput = styled.input`
    border: none;
    background-color: white !important;
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
      color: gray;
    }
  `;