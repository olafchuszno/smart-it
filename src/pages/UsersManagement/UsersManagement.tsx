import React, { FC } from 'react';
import * as P from './UsersManagement.parts';
import UsersFilters from 'components/UsersFilters/UsersFilters';
import { useTranslation } from 'react-i18next';
import UsersTableContents from 'components/UsersTableContents/UsersTableSection';
import useLocalStorage from 'hooks/useLocalStorage';
import CollapsibleSection from 'components/CollapsibleSection/CollapsibleSection';

const UsersManagement: FC = () => {
  const [isUsersTableCollapsed, setIsUsersTableCollapsed] = useLocalStorage(
    false,
    'is-users-management-table-collapsed'
  );
  const [isUsersFiltersCollapsed, setIsUsersFiltersCollapsed] = useLocalStorage(
    false,
    'is-users-filters-collapsed'
  );

  const { t } = useTranslation();

  const toggleTableCollapse = () => {
    setIsUsersTableCollapsed((currentValue) => !currentValue);
  };

  const toggleFiltersCollapse = () => {
    setIsUsersFiltersCollapsed((currentValue) => !currentValue);
  };

  return (
    <P.Main>
      <CollapsibleSection
        toggleIsCollapsed={toggleFiltersCollapse}
        isCollapsed={isUsersFiltersCollapsed}
        title={t('collapsibleSections.filters.title')}
      >
        <P.FiltersSection>
          <UsersFilters />
        </P.FiltersSection>
      </CollapsibleSection>

      <CollapsibleSection
        isCollapsed={isUsersTableCollapsed}
        toggleIsCollapsed={toggleTableCollapse}
        title={t('collapsibleSections.usersTable.title')}
      >
        <P.UsersTableSection>
          <UsersTableContents />
        </P.UsersTableSection>
      </CollapsibleSection>
    </P.Main>
  );
};

export default UsersManagement;
