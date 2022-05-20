function Cart({ onClickClose, onClickDelete, items = [] }) {
  return (
    <div className="overlay">
      <div className="cart">
        <h2 className="d-flex justify-between mb-40">
          Корзина
          <img
            className="removeBtn"
            onClick={onClickClose}
            src=""
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div index={obj.id} className="cartItem">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => {
                      onClickDelete(obj);
                    }}
                    className="removeBtn"
                    src=""
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>14 444 руб.</b>
                </li>
              </ul>
              <button className="greenButton">Оформить заказ</button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty f-flex align-center justfiy-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/pic.JPG"
              alt="Cart is empty"
            ></img>
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавьте товар</p>
            <button onClick={onClickClose} className="greenButton">
              Вернуться
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
