import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <label>
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

Filter.prototype = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
