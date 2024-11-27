import React from 'react';
import { styled } from 'styled-components';

const LogoImage = styled.img`
position: relative;
bottom: 3px;
`

const LogoLink = () => {
  return (
    <a href="https://www.smart-it.com/pl/">
      <LogoImage
        src="https://www.smart-it.com/wp-content/uploads/2022/05/logo-m.svg"
        alt="smart-it logo"
      />
    </a>
  );
}

export default LogoLink;
