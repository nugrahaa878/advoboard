import React from 'react';

import styles from './styles.module.css';

import more from '../../../../assets/icons/more.png';
import ProductCard from '../ProductCard';

const SkuCard = ({
  title,
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <img className={styles.more} src={more} alt=''/>
      <ProductCard />
    </div>
  );
};

export default SkuCard;