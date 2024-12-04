import React from 'react';
import { Text as TextStyledComponent } from '../../../styles/components/Text';

interface IProps {
  as?: string
  children: React.ReactNode,
  size?: number;
}

const Text: React.FC<IProps> = ({ children, as = 'p', size = 16 }) => {
  return <TextStyledComponent $fontSize={`${size}px`} as={as}>
    {children}
  </TextStyledComponent>
}

export default Text;