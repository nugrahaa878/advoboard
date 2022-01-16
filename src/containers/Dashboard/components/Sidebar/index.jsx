import React from 'react';

import styles from './styles.module.css';

import hamburger from '../../../../assets/icons/side-hamburger.png';
import sales from '../../../../assets/icons/sales.png';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <img src={hamburger} />
      <img src={sales} />
    </div>
  );
};

export default Sidebar;