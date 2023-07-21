import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <label className={css.labelName}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={handleFilter}
        value={filter}
        className={css.inputFilter}
      ></input>
    </label>
  );
};

export default Filter;
