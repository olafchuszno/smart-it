import styled from "styled-components";

export const ThemeToggleButton = styled.button`
height: 30px;
width: 30px;
padding: 0;
display: flex;
align-items: center;
cursor: pointer;

transition: all 0.3s ease;

&:hover {
  transform: scale(1.15);
  transition: all 0.3s ease;
}
`;