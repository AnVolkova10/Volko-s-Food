import React, { useState } from 'react';
import './InventoryStyles.scss';
//import { navItems } from '../../helpers/helpers';
import { Ingredient } from '../Ingredient/Ingredient';

export const Inventory = ({}) => {
  return (
    <section id='inventory'>
      <Ingredient />
    </section>
  );
};
