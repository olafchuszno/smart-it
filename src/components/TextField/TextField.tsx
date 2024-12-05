import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import * as P from './TextField.parts.tsx';
import Text from 'components/generics/Text/Text.tsx';

interface TextFieldProps {
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  value,
  placeholder,
  onChange,
  type = 'text',
}) => {
  return (
    <P.InputWrapper>
      <P.FilterLabel>
        <Text as='label'>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>
        <P.FilterInput
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
        />
      </P.FilterLabel>
    </P.InputWrapper>
  );
};

export default TextField;
