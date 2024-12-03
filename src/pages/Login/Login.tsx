import LoginForm from 'components/LoginForm/LoginForm';
import React, { FC } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const Login: FC = () => {
  return (
    <Main>
      <LoginForm />
    </Main>
  )
}

export default Login
