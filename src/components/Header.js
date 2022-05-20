import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="home d-flex align-center">
          <div
            className="logo"
            style={{ backgroundImage: 'url(/img/logo.svg)' }}
          ></div>
          <div>
            <h3>MOLECULA</h3>
            <p className="opacity-5">Селективный парфюм</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img src="" alt="Cart" />
          <span>14 444 руб.</span>
        </li>
        <li>
          <Link to="/bookmarks">
            <img src="" alt="Bookmarks" />
          </Link>
        </li>
        <li>
          <img src="" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;