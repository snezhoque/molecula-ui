import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../App';

function Home({ searchValue, onChangeSearchInput, addToFavorites, addToCart }) {
  const { items, cartItems, favoriteItems } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between  mb-40">
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : 'Весь парфюм'}
        </h1>
        <div className="search-block d-flex">
          <img
            className="mt-15"
            height={20}
            src="/img/search.svg"
            alt="Search"
          />
          <input onChange={onChangeSearchInput} placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onBookmark={(obj) => addToFavorites(obj)}
              onAdd={(obj) => addToCart(obj)}
              added={cartItems.some((obj) => obj.id === item.id)}
              isFavorite={favoriteItems.some((obj) => obj.id === item.id)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
