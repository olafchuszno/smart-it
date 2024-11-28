import React from 'react';
import { useDispatch } from 'react-redux';
import { Filter } from '../../types/Filter';
import './UserFilterUI.scss';
import * as P from './UserFilterUI.parts.tsx';
import TextField from '../TextField/TextField.tsx';

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
        name={name.charAt(0).toLocaleUpperCase() + name.slice(1)}
        value={value}
        placeholder={placeholder}
      />
    </P.FilterContainer>
  );
};
