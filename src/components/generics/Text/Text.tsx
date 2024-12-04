import React from 'react';
import { Text as TextStyledComponent } from '../../../styles/components/Text';

interface IProps {
  as?: string
  children: React.ReactNode,
  size?: number;
  fontWeight?: number;
}

const Text: React.FC<IProps> = ({ children, as = 'p', size = 16, fontWeight = 400 }) => {
  return <TextStyledComponent $fontWeight={fontWeight} $fontSize={`${size}px`} as={as}>
    {children}
  </TextStyledComponent>
}

export default Text;