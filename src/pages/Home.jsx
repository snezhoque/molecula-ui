import Card from '../components/Card';

function Home({
  searchValue,
  onChangeSearchInput,
  items,
  cartItems,
  favoriteItems,
  addToFavorites,
  addToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between  mb-40">
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : 'Весь парфюм'}
        </h1>
        <div className="search-block d-flex">
          <img src="" alt="Search" />
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
