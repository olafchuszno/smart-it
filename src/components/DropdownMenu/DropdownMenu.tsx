import React from 'react';
import './DropdownMenu.scss';

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownMenu: React.FC<Props> = ({ setIsMenuOpen }) => {
  return (
    <ul className="dropdown-menu">
      <div className="icons-container">
        <img
          className='dropdown-menu__logo'
          src="https://www.smart-it.com/wp-content/uploads/2022/05/logo-m.svg"
          alt="smart-it logo"
        />

        <button className='menu-close-button' onClick={() => {setIsMenuOpen(() => false)}}></button>
      </div>

      <li className="dropdown-menu__item">
        <a className="dropdown-menu__link" href="https://www.smart-it.com/pl/industries/">
          Usługi
        </a>
      </li>
      <li className="dropdown-menu__item">
        <a className="dropdown-menu__link" href="https://www.smart-it.com/pl/produkty/">
          Produkty
        </a>
      </li>
      <li className="dropdown-menu__item">
        <a
          className="dropdown-menu__link"
          href="https://www.smart-it.com/pl/klienci/sucess-stories/"
        >
          Klienci
        </a>
      </li>
      <a className="dropdown-menu__link" href="https://www.smart-it.com/pl/company/">
        Firma
      </a>
      <li className="dropdown-menu__item">
        <a
          className="dropdown-menu__link"
          href="https://www.smart-it.com/pl/company/contacts/"
        >
          Skontaktuj się z nami
        </a>
      </li>
      <li className="dropdown-menu__item">
        <a
          className="dropdown-menu__link"
          href="https://www.smart-it.com/pl/kariera/oferty-pracy/"
        >
          Oferty pracy
        </a>
      </li>
      <li className="dropdown-menu__item">
        <a
          className="dropdown-menu__link"
          href="https://www.smart-it.com/pl/kariera/staz/"
        >
          Staż
        </a>
      </li>
    </ul>
  );
};

export default DropdownMenu;
