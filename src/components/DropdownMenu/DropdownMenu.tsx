import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import headerLinks from '../../constants/HeaderLinks.ts';
import LogoLink from '../LogoLink/LogoLink.tsx';
import LanguageMenu from '../LanguageMenu/LanguageMenu.tsx';
import { ProductionEnvironmentContext } from '../EnvironmentProvider.tsx';
import * as P from './DropdownMenu.parts.tsx';
import capitalizeString from '../../utils/capitalizeString.ts';
import './DropdownMenu.scss';

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenu: React.FC<Props> = ({ setIsMenuOpen }) => {
  const isProduction = useContext(ProductionEnvironmentContext);
  const { t } = useTranslation();

  // TODO - get user from context
  const user = 1;

  const sessionLinkFunction = !user ? 'login' : 'logout';

  const getInternationalizedHeader = (header: string) =>
    capitalizeString(t(`headerLinks.${header}`));

  return (
    <P.DropdownMenuList>
      <P.MenuTopNavigation>
        <LogoLink />

        <P.MenuCloseButton
          $isProduction={isProduction}
          onClick={() => {
            setIsMenuOpen(() => false);
          }}
        ></P.MenuCloseButton>
      </P.MenuTopNavigation>

      {headerLinks.map((header) => {
        return (
          <P.DropdownMenuItem key={header}>
            <P.DropdownLink href={header}>
              {getInternationalizedHeader(header)}
            </P.DropdownLink>
          </P.DropdownMenuItem>
        );
      })}

      {!!user && <P.DropdownMenuItem>
        <P.DropdownLink href='/users'>
          {getInternationalizedHeader('userManagement')}
        </P.DropdownLink>
      </P.DropdownMenuItem>}

      <P.DropdownMenuItem>
        <P.DropdownLink $isActive href={`/${sessionLinkFunction}`}>
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
