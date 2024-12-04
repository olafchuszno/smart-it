import styled from "styled-components";

export const SectionContainer = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  padding: 24px;
  border-radius: 16px;

  background-color: ${({theme}) => theme.colors.backgrounds.CollapsibleSection.one};
  box-shadow: 2.18px 2.18px 6.54px 0px ${({theme}) => theme.colors.backgrounds.CollapsibleSection.two};
  box-shadow: -2.18px -2.18px 6.54px 0px ${({ theme }) => theme.colors.backgrounds.CollapsibleSection.three};
`;

export const CollapseSettingsButton = styled.button`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const SectionTitle = styled.div`
  color: white;
`;

export const SectionDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: gray;
  width: 100%;
  margin: 0;
`;

export const Div = styled.div<{ $isCollapsed: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: ${({ $isCollapsed }) => $isCollapsed ? '0px' : 'min-content'};
  opacity: ${({ $isCollapsed }) => ($isCollapsed ? 0 : 1)};
  transition: all 1.5s ease-in-out;
`;
