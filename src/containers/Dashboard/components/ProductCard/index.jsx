import React from 'react';

import styles from './styles.module.css';

import frisian from '../../../../assets/images/frisian-flag.jpg';

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={frisian} alt=''/>
      <div className={styles.info}>
        <h3>Frisian Flag</h3>
        <div className={styles.sales}>
          <p>Rp 10.000</p>
          <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
