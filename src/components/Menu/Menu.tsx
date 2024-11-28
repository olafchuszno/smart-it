import React, { useContext, useEffect, useState } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu.tsx';
import { ProductionEnvironmentContext } from '../EnvironmentProvider.tsx';
import * as P from './Menu.parts.tsx';
import './Menu.scss';

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isProduction = useContext(ProductionEnvironmentContext);

  useEffect(() => {
    if (isMenuOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      document.body.classList.add('menu-open');
      document
        .querySelectorAll('.filter')
        .forEach((el) => el.classList.add('visually-hidden'));
    } else {
      document.body.classList.remove('menu-open');
      document
        .querySelectorAll('.filter')
        .forEach((el) => el.classList.remove('visually-hidden'));
    }

    return () => {
      document.body.classList.remove('menu-open');
      document
        .querySelectorAll('.filter')
        .forEach((el) => el.classList.remove('visually-hidden'));
    };
  }, [isMenuOpen]);

  return (
    <div>
      <P.MenuButton
        onClick={() => {
          setIsMenuOpen((current) => !current);
        }}
        $isProduction={isProduction}
      />

      {isMenuOpen && <DropdownMenu setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
};

export default Menu;
