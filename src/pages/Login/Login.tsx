import FormBox from 'components/FormBox/FormBox';
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
      <FormBox />
    </Main>
  )
}

export default Login
