import React from 'react';

import styles from './styles.module.css';

import frisian from '../../../../assets/images/frisian-flag.jpg';

const ProductCard = ({
  image,
  name,
  price,
  sold,
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt=''/>
      <div className={styles.info}>
        <h3>{name}</h3>
        <div className={styles.sales}>
          <p>Rp {price}</p>
          <p>{sold}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
