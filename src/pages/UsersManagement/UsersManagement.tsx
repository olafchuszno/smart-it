import React from 'react'
import * as P from './UsersManagement.parts';
import UsersFilters from 'components/UsersFilters/UsersFilters';
import { useTranslation } from 'react-i18next';
import UsersTableContents from 'components/UsersTableContents/UsersTableSection';

const UsersManagement = () => {
  const { t } = useTranslation();

  return (
    <>
    <P.FiltersSection>
      <P.FiltersTitle>{t('filtersSection.title')}</P.FiltersTitle>

      <UsersFilters />
    </P.FiltersSection>

    <P.UsersTableSection>
      <UsersTableContents />
    </P.UsersTableSection>
  </>
  )
}

export default UsersManagement
