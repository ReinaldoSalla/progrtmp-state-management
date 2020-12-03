import React from 'react';
import productsInCart from './List.constants';
import Element from '../Element';
import './List.css';

const List = ({ children }: any) => {
  return (
    <div className='list__main-wrapper'>
      {children}
    </div>
  );
};

export default List;