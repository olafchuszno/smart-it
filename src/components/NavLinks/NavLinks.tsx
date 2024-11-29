import React from 'react';
import * as P from './NavLinks.parts.tsx';
import './NavLinks.scss';
import headerLinks from '../../constants/HeaderLinks.ts';
import LanguageMenu from '../LanguageMenu/LanguageMenu.tsx';

export const NavLinks: React.FC = () => {
  return (
    <>
      {headerLinks.map((link) => (
        <P.NavLink key={link.text} href={link.href}>{link.text}</P.NavLink>
      ))}
      <LanguageMenu />
    </>
  );
};

export default NavLinks;
