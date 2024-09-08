import React from 'react';
import NavLinks from '../NavLinks.tsx/NavLinks.tsx';
import Menu from '../Menu/Menu.tsx';
import useIsMobile from '../../hooks/isMobile.ts';
import './Header.scss';


export const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <header className="header">
        width: {window.innerWidth}
        <nav className="header-navbar header__navbar">
          <a href="https://www.smart-it.com/pl/">
            <img
              className='header-navbar__logo'
              src="https://www.smart-it.com/wp-content/uploads/2022/05/logo-m.svg"
              alt="smart-it logo"
            />
        </a>

          {isMobile ? <Menu /> : <NavLinks />}
        </nav>

        <div className="header__title-container title-container">
          <h1 className="title header__title">Tabela zarządzania użytkownikami:</h1>
        </div>
      </header>
  );
};

export default Header;
