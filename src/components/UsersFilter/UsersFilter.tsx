import React from 'react';
import { useDispatch } from 'react-redux';
import { Filter } from '../../types/Filter';
import './UsersFilter.scss';

export const UsersFilter: React.FC<{
  filterData: Filter
}> = ({ filterData }) => {
  const dispatch = useDispatch();

  const { name, placeholder, value, action } = filterData;

  return (
    <div className='filter'>
      <label className='filter__label' htmlFor={`${name}-filter`}>
        {name}
      </label>

      <input
        className='filter__input'
        placeholder={placeholder}
        onChange={(event) => {
          event.preventDefault();
          dispatch(action(event.target.value.toLocaleLowerCase()));
          }}
        value={value}
        id={`${name}-filter`}
        type="search"
      />
    </div>
  );
};
