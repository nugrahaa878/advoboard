import React from 'react';

import styles from './styles.module.css';

import profile from '../../assets/icons/profile.png';
import logout from '../../assets/icons/logout.png';
import mainLogo from '../../assets/images/advotics-logo-2.jpg';

const Navbar = () => {
  return (
    <nav>
      <img className={styles.mainLogo} src={mainLogo} alt='' />
      <ul className={styles.listMenu}>
        <li className={styles.userInfo}>
          <p className={styles.username}>Username</p>
          <p className={styles.companyName}>Company Name</p>
        </li>
        <li><img className={styles.profile} src={profile} alt='' /></li>
        <li><img className={styles.logout} src={logout} alt='' /></li>
      </ul>
    </nav>
  );
};

export default Navbar;