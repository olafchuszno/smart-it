import styled from 'styled-components';
import { colors } from 'styles/constants/colors';

export const LoginForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  width: 80%;
  max-width: 450px;

  padding: 36px;
  border-radius: 36px;

  background-color: ${({theme}) => theme.colors.backgrounds.LoginForm.one};
  border: 2px solid ${colors.gray.darker.trans['20']};

  @media (max-width: 480px) {
    padding: 18px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 80%;
`;

export const InputErrorMessage = styled.span`
  width: 80%;
  text-align: center;
  color: ${colors.red.error};
`;

  export const FormTitle = styled.h1`
    color: ${({theme}) => theme.colors.text.LoginForm.one};
  `;

  export const SubmitButton = styled.button`
    height: 40px;
    background-color: ${colors.gray.lighter};
    border: 2px solid ${colors.gray.darker.trans['20']};
    border-radius: 12px;
    width: 80%;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.7;
    background-color: ${({theme}) => theme.colors.backgrounds.LoginForm.two};
  `;

  export const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    width: 100%;
    color: ${({theme}) => theme.colors.text.LoginForm.one};
  `;

  export const FormInput = styled.input`
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;
    box-sizing: border-box;
    width: 100%;

    &::placeholder {
      color: gray;
    }
  `;