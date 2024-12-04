import React, { FC, ReactNode } from 'react';
import * as P from './CollapsibleSection.parts';
import Text from 'components/generics/Text/Text';

interface IProps {
  isCollapsed: boolean;
  toggleIsCollapsed: () => void;
  title: string;
  children: ReactNode;
}

const CollapsibleSection: FC<IProps> = ({
  isCollapsed,
  toggleIsCollapsed,
  title,
  children,
}) => {
  return (
    <P.SectionContainer>
      <P.CollapseSettingsButton onClick={toggleIsCollapsed}>
        <Text size={16}>
          {isCollapsed ? `\\/` : `/\\`}
        </Text>

        <P.SectionTitle>
          <Text>{title}</Text>
        </P.SectionTitle>
      </P.CollapseSettingsButton>

      {!isCollapsed && <P.SectionDivider />}

      <P.Div $isCollapsed={isCollapsed}>
        {!isCollapsed && children}
        </P.Div>
    </P.SectionContainer>
  );
};

export default CollapsibleSection;
