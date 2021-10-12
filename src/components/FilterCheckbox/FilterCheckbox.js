import React, { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ animeFilterCollection, animeDelFilterCollection }) {
  const [isChecked, setChecked] = useState(false);
  function onChange(event) {
    setChecked(event.target.checked);
    isChecked ? animeDelFilterCollection() : animeFilterCollection();
  }
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input
          type='checkbox'
          className='filter-checkbox__input'
          name='filterCheckbox'
          id='filterCheckbox'
          checked={isChecked}
          onChange={(e) => onChange(e)}
        />
        <span className='filter-checkbox-visible'></span>
      </label>
      <p className='filter__title'>Коллекция</p>
    </div>
  );
}

export default FilterCheckbox;
