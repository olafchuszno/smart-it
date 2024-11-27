import React from 'react';
import * as P from './NavLinks.parts.tsx';
import './NavLinks.scss';

export const NavLinks: React.FC = () => {
  const links = [
    {
      href: 'https://www.smart-it.com/pl/industries/',
      text: 'Usługi',
    },
    {
      href: 'https://www.smart-it.com/pl/industries/',
      text: 'Produkty',
    },
    {
      href: 'https://www.smart-it.com/pl/industries/',
      text: 'Klienci',
    },
    {
      href: 'https://www.smart-it.com/pl/industries/',
      text: 'Firma',
    },
    {
      href: 'https://www.smart-it.com/pl/industries/',
      text: 'Skontaktuj się z nami',
    },
    {
      href: 'https://www.smart-it.com/pl/industries/',
      text: 'Oferty pracy',
    },
    {
      href: 'https://www.smart-it.com/pl/industries/',
      text: 'Staż',
    },
  ];

  return (
    <>
      {links.map((link) => (
        <P.NavLink key={link.text} href={link.href}>{link.text}</P.NavLink>
      ))}
    </>
  );
};

export default NavLinks;
