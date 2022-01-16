import React from 'react';

import styles from './styles.module.css';

import more from '../../../../assets/icons/more.png';
import ProductCard from '../ProductCard';
import { dummyBestSelling } from '../../data/item';

const SkuCard = ({
  title,
  products,
}) => {
  const listProduct = products.map((item) => (
    <ProductCard 
      image={item.image}
      name={item.name}
      price={item.price}
      sold={item.sold}
    />
  ));

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <img className={styles.more} src={more} alt=''/>
      {listProduct}
    </div>
  );
};

export default SkuCard;