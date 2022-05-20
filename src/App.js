import 'macro-css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';

import Header from './components/Header';
import Cart from './components/Cart';

export const AppContext = React.createContext({});

const arr = [
  {
    id: 1,
    title: 'Escentric Molecules Molecule 01',
    product: 'Escentric Molecules Molecule 01 30ml',
    imageUrl: '/img/pic.jpg',
    ml: 30,
    price: 3500,
    amount: 4,
  },
  {
    id: 2,
    title: 'Escentric Molecules Molecule 01',
    product: 'Escentric Molecules Molecule 01 100ml',
    imageUrl: '/img/pic.jpg',
    ml: 100,
    price: 7777,
    amount: 3,
  },
  {
    id: 3,
    title: 'Escentric Molecules Molecule 02',
    imageUrl: '/img/pic.jpg',
    price: 7777,
  },
  {
    id: 4,
    title: 'Escentric Molecules Escentric 01',
    imageUrl: '/img/pic.jpg',
    price: 7777,
  },
  {
    id: 5,
    title: 'Escentric Molecules Escentric 02',
    imageUrl: '/img/pic.jpg',
    price: 7777,
  },
]; // джарвис, удали это, как к бэку подключим все

function App() {
  const [items, setItems] = React.useState(arr); // убрать arr, заменить на []
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  // Получаем дату с сервера
  // React.useEffect(() => {
  //   async function fetchData(){
  //     const itemsResponse = await axios.get('/items');
  //     const cartResponse = await axios.get('/cart');
  //     const bookmarksResponse = await axios.get('/bookmarks');

  //     setCartItems(cartResponse.data);
  //     setFavoriteItems(bookmarksResponse.data);
  //     setItems(itemsResponse.data);
  //   }

  //   fetchData();
  // }, []);

  const addToCart = (obj) => {
    if (cartItems.find((prev) => prev.id === obj.id)) {
      setCartItems(cartItems.filter((prev) => prev.id !== obj.id));
    } else {
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const deleteFromCart = (obj) => {
    setCartItems(cartItems.filter((prev) => prev !== obj));
  };

  const addToFavorites = (obj) => {
    if (favoriteItems.find((prev) => prev.id === obj.id)) {
      setFavoriteItems(favoriteItems.filter((prev) => prev.id !== obj.id)); //заменить на удаление с сервера, визуально оставить
    } else {
      setFavoriteItems((prev) => [...prev, obj]);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <AppContext.Provider value={{ items, cartItems, favoriteItems }}>
      <div className="wrapper clear">
        {cartOpened && (
          <Cart
            onClickClose={() => setCartOpened(false)}
            onClickDelete={deleteFromCart}
            items={cartItems}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                addToFavorites={addToFavorites}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/bookmarks"
            element={
              <Bookmarks
                addToFavorites={addToFavorites}
                addToCart={addToCart}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
