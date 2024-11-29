import React from 'react';
import { useDispatch } from 'react-redux';
import { Filter } from '../../types/Filter';
import TextField from '../TextField/TextField.tsx';
import capitalizeString from '../../utils/capitalizeString.ts';
import * as P from './UserFilterUI.parts.tsx';
import './UserFilterUI.scss';

export const UsersFilterUI: React.FC<{
  filterData: Filter;
}> = ({ filterData }) => {
  const dispatch = useDispatch();

  const { name, placeholder, value, action } = filterData;

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(action(event.target.value));
  }

  return (
    <P.FilterContainer>
      <TextField
        onChange={inputChangeHandler}
        name={capitalizeString(name)}
        value={value}
        placeholder={placeholder}
      />
    </P.FilterContainer>
  );
};
