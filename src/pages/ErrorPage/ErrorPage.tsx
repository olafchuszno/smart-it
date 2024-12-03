import React from 'react'
import * as P from './ErrorPage.parts';
import { Text } from 'styles/components/Text';
import { Main } from 'styles/components/Main';

const ErrorPage = () => {
  return (
    <Main>
      <P.MessageContainer>
        <Text>Page not found</Text>
      </P.MessageContainer>
    </Main>
  )
}

export default ErrorPage
