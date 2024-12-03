import React from 'react';
import { Text as TextStyledComponent } from '../../../styles/components/Text';

interface IProps {
  as?: string
  children: React.ReactNode,
}

const Text: React.FC<IProps> = ({ children, as = 'p' }) => {
  return <TextStyledComponent as={as}>
    {children}
  </TextStyledComponent>
}

export default Text;