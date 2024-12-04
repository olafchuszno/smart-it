import React from 'react';
import { useThemeContext } from 'contexts/ThemeContext';
import * as P from './LogoLink.parts';
import { routes } from 'constants/routes';

const LogoLink = () => {
  const { isDarkMode } = useThemeContext();

  const logoSrc = isDarkMode
    ? 'https://i.postimg.cc/SN3Xd41n/smart-logo-blue-1.png'
    : 'https://www.smart-it.com/wp-content/uploads/2022/05/logo-m.svg';

  return (
    <P.ImageLinkContainer to={routes.main.href}>
      <P.LogoImage $isDarkMode={isDarkMode}
        src={logoSrc}
        alt="smart-it logo"
      />
    </P.ImageLinkContainer>
  );
}

export default LogoLink;
