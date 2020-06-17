import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Chesse', type: 'chesse' },
  { label: 'Meat', type: 'meat' },
];

const buildcontrols = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => {
      return <BuildControl key={ctrl.label} label={ctrl.label} />;
    })}
  </div>
);

export default buildcontrols;
