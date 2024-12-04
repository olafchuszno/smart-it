import Text from 'components/generics/Text/Text'
import React from 'react'
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Text>{t('mainPage.text')}</Text>
  )
}

export default MainPage
