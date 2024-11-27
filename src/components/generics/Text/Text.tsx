import React from 'react';
import * as P from './Text.parts.tsx';

const Text: React.FC<{ children: React.ReactNode, as: string }> = ({ children, as }) => {
  return <P.StyledText as={as}>
    {children}
  </P.StyledText>
}

export default Text;