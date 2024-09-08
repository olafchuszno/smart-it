import React, { useEffect, useState } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu.tsx';
import './Menu.scss';
 
const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      document.body.classList.add('menu-open')
      document.querySelectorAll('.filter').forEach(el => el.classList.add('visually-hidden'));
    } else {
      document.body.classList.remove('menu-open')
      document.querySelectorAll('.filter').forEach(el => el.classList.remove('visually-hidden'));
    }

    return () => {
      document.body.classList.remove('menu-open')
      document.querySelectorAll('.filter').forEach(el => el.classList.remove('visually-hidden'));
    }
  }, [isMenuOpen])

  return (<div>
    <button className='menu-button' onClick={() => {setIsMenuOpen((current) => !current)}}>
    </button>

    {isMenuOpen && <DropdownMenu setIsMenuOpen={setIsMenuOpen} />}
  </div>);
}
 
export default Menu;