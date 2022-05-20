import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../App';

function Bookmarks({ addToFavorites, addToCart }) {
  const { favoriteItems, cartItems } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between  mb-40">
        <h1>Избранное</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favoriteItems.map((item, index) => (
          <Card
            key={index}
            onBookmark={(obj) => addToFavorites(obj)}
            onAdd={(obj) => addToCart(obj)}
            isFavorite
            added={cartItems.some((obj) => obj.id === item.id)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;
