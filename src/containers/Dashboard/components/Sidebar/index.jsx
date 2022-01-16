import React from 'react';

import styles from './styles.module.css';

import hamburger from '../../../../assets/icons/side-hamburger.png';
import sales from '../../../../assets/icons/sales.png';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <img src={hamburger} alt='' />
      <img src={sales}  alt='' />
    </div>
  );
};

export default Sidebar;