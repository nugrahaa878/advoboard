import React from 'react';

import styles from './styles.module.css';

import hamburger from '../../assets/icons/hamburger.png';
import close from '../../assets/icons/close.png';
import profile from '../../assets/icons/profile.png';
import logout from '../../assets/icons/logout.png';
import mainLogo from '../../assets/images/advotics-logo.jpg';

const Navbar = () => {
  return (
    <nav>
      <input type='checkbox' id={styles.check} />
      <label for={styles.check}>
        <img className={styles.hamburger} src={hamburger} id={styles.btn} alt='' />
        <img className={styles.close} src={close} id={styles.close} alt='' />
      </label>
      <img className={styles.mainLogo} src={mainLogo} alt='' />
      <ul>
        <li className={styles.userInfo}>
          <p className={styles.username}>Username</p>
          <p className={styles.companyName}>Company Name</p>
        </li>
        <li><img className={styles.profile} src={profile} alt=''/></li>
        <li><img className={styles.logout} src={logout} alt='' /></li>
      </ul>
    </nav>
  );
};

export default Navbar;