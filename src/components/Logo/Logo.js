import React from 'react';

import burgerLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt='My burger logo' />
  </div>
);

export default logo;
