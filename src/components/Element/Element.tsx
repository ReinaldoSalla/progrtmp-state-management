import React, { FunctionComponent } from 'react';
import ElementProps from './Element.types';
import './Element.css';

const Element: FunctionComponent<ElementProps> = ({
  name,
  price,
  description
}): JSX.Element => {
  return (
    <section className='element__main-wrapper'>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <h4>{description}</h4>
      <button type='button'>buy</button>
    </section>
  );
};

export default Element;