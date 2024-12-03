import React from 'react';
import { useTranslation } from 'react-i18next';
import headerLinks from '../../constants/HeaderLinks.ts';
import LogoLink from '../LogoLink/LogoLink.tsx';
import LanguageMenu from '../LanguageMenu/LanguageMenu.tsx';
import capitalizeString from '../../utils/capitalizeString.ts';
import CloseIcon from 'components/CloseIcon/CloseIcon.tsx'
import * as P from './DropdownMenu.parts.tsx';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle.tsx';
import './DropdownMenu.scss';
import { useAuthContext } from 'contexts/AuthContext.tsx';

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenu: React.FC<Props> = ({ setIsMenuOpen }) => {
  const { t } = useTranslation();
  const { user } = useAuthContext();

  // TODO - get user from context

  const sessionLinkFunction = !user ? 'login' : 'logout';

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

      {headerLinks.map((header) => {
        return (
          <P.DropdownMenuItem key={header.href}>
            <P.DropdownLink to={header.href} onClick={closeDropdownMenu}>
              {getInternationalizedHeader(header.name)}
            </P.DropdownLink>
          </P.DropdownMenuItem>
        );
      })}

      {!!user && <P.DropdownMenuItem>
        <P.DropdownLink to='/users-management' onClick={closeDropdownMenu}>
          {getInternationalizedHeader('userManagement')}
        </P.DropdownLink>
      </P.DropdownMenuItem>}

      <P.DropdownMenuItem>
        <P.DropdownLink to={`/${sessionLinkFunction}`} onClick={closeDropdownMenu}>
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
