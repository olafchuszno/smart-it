import React from 'react';
import * as P from './TextField.parts.tsx';

interface TextFieldProps {
  name: string;
  value: string;
  placeholder: string;
  onChange: (event) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <P.InputWrapper>
      <P.FilterLabel>
        {name.charAt(0).toUpperCase() + name.slice(1)}
        <P.FilterInput
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </P.FilterLabel>
    </P.InputWrapper>
  );
};

export default TextField;
