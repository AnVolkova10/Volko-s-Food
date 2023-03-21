import React, { useState } from 'react';
import './IngredientStyles.scss';
import ingredient from '../../assets/ingredients/ingredient.svg';
//import { navItems } from '../../helpers/helpers';

export const Ingredient = ({}) => {
  const initialState = {
    name: 'ingrediente',
    img: ingredient,
    place: 'lugar',
    quantity: 1,
    isFrozen: false,
    recipe: [],
  };
  return (
    <article className='ingredient'>
      <h1>{initialState.name}</h1>
      <img src={ingredient}></img>
      <h3>Está en: {initialState.place}</h3>
      <h4>Son: {initialState.quantity}</h4>
      <h5>Esta congelado: {initialState.isFrozen}</h5>
    </article>
  );
};
