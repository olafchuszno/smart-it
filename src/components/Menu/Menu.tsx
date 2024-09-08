import React, { useEffect, useState } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu.tsx';
import './Menu.scss';
 
const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuOpen])

  return (<div>
    <button className='menu-button' onClick={() => {setIsMenuOpen((current) => !current)}}>
      {/* <img src={burgerMenu} alt="burger menus" height={50}/> */}
    </button>

    {isMenuOpen && <DropdownMenu setIsMenuOpen={setIsMenuOpen} />}
  </div>);
}
 
export default Menu;