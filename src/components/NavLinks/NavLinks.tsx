import React from 'react';
import './NavLinks.scss';

export const NavLinks: React.FC = () => {
  return (
    <>
      <a className="nav-link" href="https://www.smart-it.com/pl/industries/">
        Usługi
      </a>

      <a className="nav-link" href="https://www.smart-it.com/pl/produkty/">
        Produkty
      </a>

      <a
        className="nav-link"
        href="https://www.smart-it.com/pl/klienci/sucess-stories/"
      >
        Klienci
      </a>

      <a className="nav-link" href="https://www.smart-it.com/pl/company/">
        Firma
      </a>

      <a
        className="nav-link"
        href="https://www.smart-it.com/pl/company/contacts/"
      >
        Skontaktuj się z nami
      </a>

      <a
        className="nav-link"
        href="https://www.smart-it.com/pl/kariera/oferty-pracy/"
      >
        Oferty pracy
      </a>

      <a className="nav-link" href="https://www.smart-it.com/pl/kariera/staz/">
        Staż
      </a>
    </>
  );
};

export default NavLinks;
