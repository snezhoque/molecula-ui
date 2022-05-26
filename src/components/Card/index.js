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
          width={24}
          src={isBooked ? '/img/booked.svg' : '/img/unbooked.svg'}
          alt="Bookmark"
        />
      </div>
      <img width={150} height={150} src={imageUrl} alt="Parfum" />
      <h5>{title}</h5>
      <div className="mb-25 d-flex flex-column">
        <div>
          <button>30 ml</button>
          <button>100 ml</button>
          <button>120 ml</button>
        </div>
        <div>
          <button>3 ml</button>
          <button>9 ml</button>
        </div>
      </div>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img
          className="cu-p"
          onClick={onClickAdd}
          width={32}
          src={isAdded ? '/img/added.svg' : '/img/add.svg'}
          alt="Add"
        />
      </div>
    </div>
  );
}

export default Card;
