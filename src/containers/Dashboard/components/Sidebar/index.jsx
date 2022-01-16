import React from 'react';

import styles from './styles.module.css';

import hamburger from '../../../../assets/icons/side-hamburger.png';
import dashboard from '../../../../assets/icons/dashboard.png';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <img src={hamburger} alt='' />
      <img src={dashboard}  alt='' />
    </div>
  );
};

export default Sidebar;