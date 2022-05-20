import React from 'react';

import styles from './Card.module.scss';

function Card({
  id,
  title,
  imageUrl,
  price,
  onBookmark,
  onAdd,
  isFavorite = false,
  added = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isBooked, setIsBooked] = React.useState(isFavorite);

  const onClickAdd = () => {
    onAdd({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickBookmark = () => {
    onBookmark({ id, title, imageUrl, price });
    setIsBooked(!isBooked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.bookmark} onClick={onClickBookmark}>
        <img
          src={isBooked ? '/img/booked.png' : '/img/unbooked.png'}
          alt="Bookmark"
        />
      </div>
      <img width={150} height={150} src={imageUrl} alt="Parfum" />
      <h5>{title}</h5>
      <div>
        <button>30 ml</button>
        <button>100 ml</button>
      </div>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className={styles.button} onClick={onClickAdd}>
          <img
            src={isAdded ? '/img/booked.png' : '/img/unbooked.png'}
            alt="Add"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
