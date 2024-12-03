import React from 'react'
import * as P from './ErrorPage.parts';
import { Text } from 'styles/components/Text';

const ErrorPage = () => {
  return (
    <P.MessageContainer>
      <Text>Page not found</Text>
    </P.MessageContainer>
  )
}

export default ErrorPage
