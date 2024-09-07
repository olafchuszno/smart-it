import React from 'react';
import './Header.scss';


export const Header: React.FC = () => {

  return (
    <header className="header">
        <nav className="header-navbar header__navbar">
          <a href="https://www.smart-it.com/pl/">
            <img
              className='header-navbar__logo'
              src="https://www.smart-it.com/wp-content/uploads/2022/05/logo-m.svg"
              alt="smart-it logo"
            />
          </a>
        
          <a className='nav-link' href="https://www.smart-it.com/pl/industries/">Usługi</a>

          <a className='nav-link' href="https://www.smart-it.com/pl/produkty/">Produkty</a>

          <a className='nav-link' href="https://www.smart-it.com/pl/klienci/sucess-stories/">Klienci</a>

          <a className='nav-link' href="https://www.smart-it.com/pl/company/">Firma</a>

          <a className='nav-link' href="https://www.smart-it.com/pl/company/contacts/">Skontaktuj się z nami</a>

          <a className='nav-link' href="https://www.smart-it.com/pl/kariera/oferty-pracy/">Oferty pracy</a>

          <a className='nav-link' href="https://www.smart-it.com/pl/kariera/staz/">Staż</a>

        </nav>

        <div className="header__title-container title-container">
          <h1 className="title header__title">Tabela zarządzania użytkownikami:</h1>
        </div>
      </header>
  );
};

export default Header;
