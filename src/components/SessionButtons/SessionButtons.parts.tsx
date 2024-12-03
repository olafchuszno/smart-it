import { Link } from "react-router";
import styled from "styled-components";

export const SessionButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const SessionLink = styled(Link)`
  display: block;

  text-decoration: none;
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  border-radius: 6px;

  font-size: 16px;
  font-weight: 600;

  color: white;
  background-color: rgb(134, 191, 43);

  &:hover {
    background-color: rgb(239, 239, 239);
    color: rgb(134, 191, 43);
  }
`;