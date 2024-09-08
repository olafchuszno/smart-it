import React, { useState } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu.tsx';
import './Menu.scss';
 
const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (<div>
    <button className='menu-button' onClick={() => {setIsMenuOpen((current) => !current)}}>
      {/* <img src={burgerMenu} alt="burger menus" height={50}/> */}
    </button>

    {isMenuOpen && <DropdownMenu setIsMenuOpen={setIsMenuOpen} />}
  </div>);
}
 
export default Menu;