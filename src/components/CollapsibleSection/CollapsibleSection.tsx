import React, { FC, ReactNode, useRef } from 'react';
import * as P from './CollapsibleSection.parts';
import Text from 'components/generics/Text/Text';
import styled from 'styled-components';
import DownArrowIcon from 'components/ArrowIcon/DownArrowIcon';

interface IProps {
  isCollapsed: boolean;
  toggleIsCollapsed: () => void;
  title: string;
  children: ReactNode;
}

const ArrowIconContainer = styled.span<{$isCollapsed: boolean}>`
  transform: ${({ $isCollapsed }) => ($isCollapsed ? 'rotate(0deg)' : 'rotate(-180deg)')};
  transition: transform 0.4s ease;
`

const CollapsibleSection: FC<IProps> = ({
  isCollapsed,
  toggleIsCollapsed,
  title,
  children,
}) => {
  const arrow = useRef<null | HTMLSpanElement>(null);

  const handleSectionButtonClick = () => {
    toggleIsCollapsed();
  }

  return (
    <P.SectionContainer $isCollapsed={isCollapsed}>
      <P.CollapseSettingsButton onClick={handleSectionButtonClick}>
        <ArrowIconContainer $isCollapsed={isCollapsed} ref={arrow}>
          <DownArrowIcon />
        </ArrowIconContainer>

        <P.SectionTitle>
          <Text fontWeight={500} size={20}>
          {title}
          </Text>
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
