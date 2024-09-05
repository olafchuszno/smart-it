import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import './UsersFilter.scss';

export const UsersFilter: React.FC<{
  filterName: string;
  filterValue: string;
  filterAction: ActionCreatorWithPayload<string, string>;
}> = ({ filterName, filterValue, filterAction }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* <fieldset> */}
        {/* <legend style={{ textAlign: 'left' }}>{filterName}</legend> */}
      {/* <label htmlFor={`${filterName}-filter`}>{filterName}</label> */}

        <input
          className='filter'
          placeholder={filterName}
          onChange={(event) => {
            event.preventDefault();
            dispatch(filterAction(event.target.value.toLocaleLowerCase()));
            }}
          value={filterValue}
          id={`${filterName}-filter`}
          type="text"
        />
        {/* </fieldset> */}
    </div>
  );
};
