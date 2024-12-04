import Text from 'components/generics/Text/Text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Main } from 'styles/components/Main';

const About = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <Text>
        {t('aboutPage.text')}

        <br />
        Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Dolores modi itaque, optio ex fugiat maxime
        tempora commodi animi deleniti provident eligendi fuga, nulla in corrupti
        ullam maiores magnam, consequuntur quae!
      </Text>
    </Main>
  );
};

export default About;
