import React, { useContext, useEffect, useState } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu.tsx';
import { ProductionEnvironmentContext } from '../EnvironmentProvider.tsx';
import * as P from './Menu.parts.tsx';
import './Menu.scss';
import BurgerIcon from 'components/BurgerIcon/BurgerIcon.tsx';

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuButtonHovered, setIsMenuButtonHovered] = useState(false);
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
        onMouseEnter={() => setIsMenuButtonHovered(true)}
        onMouseLeave={() => setIsMenuButtonHovered(false)}
        $isProduction={isProduction}
      >
        <BurgerIcon isHovered={isMenuButtonHovered} />
      </P.MenuButton>

      {isMenuOpen && <DropdownMenu setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
};

export default Menu;
