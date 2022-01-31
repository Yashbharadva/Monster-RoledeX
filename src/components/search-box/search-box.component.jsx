import { getByPlaceholderText } from '@testing-library/react';
import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
   <input 
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
    />
)