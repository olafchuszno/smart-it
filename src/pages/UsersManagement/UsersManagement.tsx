import React, { useEffect } from 'react';
import * as P from './UsersManagement.parts';
import UsersFilters from 'components/UsersFilters/UsersFilters';
import { useTranslation } from 'react-i18next';
import UsersTableContents from 'components/UsersTableContents/UsersTableSection';
import useLocalStorage from 'hooks/useLocalStorage';
import CollapsibleSection from 'components/CollapsibleSection/CollapsibleSection';

const UsersManagement = () => {
  const { t } = useTranslation();

  const [isCollapsed, setIsCollapsed] = useLocalStorage(
    false,
    'is-user-management-table-collapsed'
  );

  useEffect(() => {
    console.log('typeof isCollapsed:', typeof isCollapsed);
    console.log('isCollapsed:', isCollapsed);
  }, [isCollapsed])

  const toggleIsCollapsed = () => {
    setIsCollapsed((currentValue) => !currentValue);
  };

  return (
    <>
      <P.FiltersSection>
        <P.FiltersTitle>{t('filtersSection.title')}</P.FiltersTitle>

        <UsersFilters />
      </P.FiltersSection>

      <CollapsibleSection
        isCollapsed={isCollapsed}
        toggleIsCollapsed={toggleIsCollapsed}
        title="Users Management Table"
      >
        <P.UsersTableSection>
          <UsersTableContents />
        </P.UsersTableSection>
      </CollapsibleSection>
    </>
  );
};

export default UsersManagement;
