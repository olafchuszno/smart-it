import React from 'react';
import * as P from './NavLinks.parts.tsx';
import './NavLinks.scss';
import headerLinks from '../../constants/HeaderLinks.ts';

export const NavLinks: React.FC = () => {
  return (
    <>
      {headerLinks.map((link) => (
        <P.NavLink key={link.text} href={link.href}>{link.text}</P.NavLink>
      ))}
    </>
  );
};

export default NavLinks;
