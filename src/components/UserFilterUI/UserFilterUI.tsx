import React from 'react';
import { useDispatch } from 'react-redux';
import { Filter } from '../../types/Filter';
import './UserFilterUI.scss';
import { TextField } from '@mui/material';

export const UsersFilterUI: React.FC<{
  filterData: Filter
}> = ({ filterData }) => {
  const dispatch = useDispatch();

  const { name, placeholder, value, action } = filterData;

  return (
    <div className='filter'>
      <TextField onChange={(event) => {
          event.preventDefault();
          dispatch(action(event.target.value.toLocaleLowerCase()));
          }} id="outlined-basic" label={name.charAt(0).toLocaleUpperCase() + name.slice(1)} value={value} placeholder={placeholder} variant="outlined" />
    </div>
  );
};
