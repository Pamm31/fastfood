/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { produce } from 'immer';
import * as C from './App.styles';
import { Theme } from './components/Theme';
import Products from './components/Data';
import Cart from './components/Cart';
import Modal from './components/Modal';

interface CartItem {
  quantity: number;
  price: number;
  id: number;
}

const ITEMS_STORAGE_KEY = 'fastFood:cartItems';

function App(): JSX.Element {
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState(false);
  const [itemId, setItemId] = useState('');
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  function addItemToCart(item: CartItem) {
    const itemAlreadyExistsInCart = cartItems.findIndex(
      cartItem => cartItem.id === item.id,
    );

    const newCart = produce(cartItems, draft => {
      if (itemAlreadyExistsInCart < 0) {
        draft.push(item);
      } else {
        draft[itemAlreadyExistsInCart].quantity += item.quantity;
      }
    });

    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const search = (data: any[]) => {
    return data.filter(
      (item: { name: string; id: number; category: string }) =>
        item.name.toLowerCase().includes(query) ||
        item.id.toString().startsWith(query) ||
        item.category.includes(query),
    );
  };

  const prd = Products?.find(el => el.id?.toString() === itemId);

  const handleClick = (idItem: string) => {
    setModal(true);
    setItemId(idItem);
    setTotal(total + prd!.price);
  };

  return (
    <Theme>
      <C.Container>
        <div className="app">
          <div>
            <h2 className="welcome">Seja bem vindo!</h2>
            <input
              type="text"
              placeholder="O que você procura?"
              className="search"
              onChange={e => setQuery(e.target.value)}
            />
          </div>

          <C.Categories>
            <h2>Categorias</h2>
            <p>Navegue por categoria</p>
            <div className="categorias" id="myBtnContainer">
              <div
                className="categorias--categoria"
                onClick={() => setQuery('Combo')}
              >
                <img
                  src="https://www.freeiconspng.com/uploads/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png"
                  alt="combo"
                  height="80"
                />
                <h3>Combos</h3>
              </div>
              <div className="categorias--categoria">
                <img
                  src="https://www.freepnglogos.com/uploads/fried-chicken-png/home-texas-chicken-fried-chicken-oman-26.png"
                  height="80"
                  alt="texas chicken fried"
                  onClick={() => setQuery('Acompanhamento')}
                />
                <h3>Acompanhamentos</h3>
              </div>
              <div className="categorias--categoria">
                <img
                  src="https://www.freeiconspng.com/uploads/cocktail-coca-cola-png-image-14.png"
                  height="80"
                  alt="coca cola"
                  onClick={() => setQuery('Bebida')}
                />
                <h3>Bebidas</h3>
              </div>
              <div className="categorias--categoria">
                <img
                  src="https://pngimg.com/uploads/cake/cake_PNG13097.png"
                  alt="cake"
                  height="80"
                  onClick={() => setQuery('Sobremesa')}
                />
                <h3>Sobremesas</h3>
              </div>
            </div>
          </C.Categories>

          <div>
            <h2>Produtos</h2>
            <p>Selecione um produto para adicionar ao seu pedido</p>
          </div>
          <div className="container">
            {search(Products).map(item => (
              <C.Show>
                <div
                  className="products"
                  id={item.category}
                  onClick={() => handleClick(item.id.toString())}
                  key={item.id}
                >
                  <img src={item.img} alt={item.name} width="80" />
                  <div className="description">
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                    <h4>
                      {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </h4>
                  </div>
                </div>
              </C.Show>
            ))}
          </div>

          {cartQuantity > 0 && <Cart />}

          <div className="buttons">
            <button
              type="button"
              className="cancelar"
              onClick={() => cleanCart()}
            >
              Cancelar
            </button>
            <button type="submit" className="finalizar">
              Finalizar Pedido
            </button>
          </div>
        </div>

        {modal && (
          <Modal onClick={() => setModal(false)}>
            <div className="productSection">
              <div className="picture" id={prd?.category}>
                <img src={prd?.img} alt={prd?.category} width="80" />
                <p>foto</p>
              </div>
              <div className="info">
                <h4>{prd?.name}</h4>
                <p>{prd?.description}</p>
                <div className="increment">
                  <button> - </button>
                  <input type="number" readOnly />
                  <button> + </button>
                </div>
              </div>
              <h3>
                {prd?.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </h3>
            </div>
          </Modal>
        )}
      </C.Container>
    </Theme>
  );
}

export default App;
