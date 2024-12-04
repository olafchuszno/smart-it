import React from 'react';
import { useTranslation } from 'react-i18next';
import headerLinks from '../../constants/headerLinks.ts';
import LogoLink from '../LogoLink/LogoLink.tsx';
import LanguageMenu from '../LanguageMenu/LanguageMenu.tsx';
import capitalizeString from '../../utils/capitalizeString.ts';
import CloseIcon from 'components/CloseIcon/CloseIcon.tsx'
import * as P from './DropdownMenu.parts.tsx';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle.tsx';
import './DropdownMenu.scss';
import { useAuthContext } from 'contexts/AuthContext.tsx';
import { routesHeaderTranslationKeys } from 'constants/routesHeaderTranslationKeys.ts';
import { routes } from 'constants/routes.ts';

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenu: React.FC<Props> = ({ setIsMenuOpen }) => {
  const { t } = useTranslation();
  const { user } = useAuthContext();

  const sessionLinkFunction = !user ? 'login' : 'logout';
  const sessionLinkHref = routes[sessionLinkFunction].href;

  const dropdownLinks = !user ? headerLinks.guest : headerLinks.user;

  const getInternationalizedHeader = (header: string) =>
    capitalizeString(t(`headerLinks.${header}`));

  const closeDropdownMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <P.DropdownMenuList>
      <P.MenuTopNavigation>
        <LogoLink />

        <P.SettingButtonsContainer>
          <ThemeToggle />

          <P.MenuCloseButton
            onClick={() => {
              setIsMenuOpen(() => false);
            }}
            aria-roledescription='closes dropdown menu'
          >
            <CloseIcon />
          </P.MenuCloseButton>
        </P.SettingButtonsContainer>
      </P.MenuTopNavigation>

      {dropdownLinks.map((header) => {
        return (
          <P.DropdownMenuItem key={header.href}>
            <P.DropdownLink to={header.href} onClick={closeDropdownMenu}>
              {getInternationalizedHeader(routesHeaderTranslationKeys[header.href as keyof typeof routesHeaderTranslationKeys])}
            </P.DropdownLink>
          </P.DropdownMenuItem>
        );
      })}

      <P.DropdownMenuItem>
        <P.DropdownLink to={sessionLinkHref} onClick={closeDropdownMenu}>
          {t(`headerLinks.${sessionLinkFunction}`)}
        </P.DropdownLink>
      </P.DropdownMenuItem>

      <P.DropdownMenuItem>
        <LanguageMenu />
      </P.DropdownMenuItem>
    </P.DropdownMenuList>
  );
};

export default DropdownMenu;
