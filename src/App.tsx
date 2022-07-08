/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import { Container } from './App.styles';
import Categories from './components/Categories';
import { Theme } from './components/Theme';
import Show from './components/Show';
import Products from './components/Data';
import Cart from './components/Cart';

function App(): JSX.Element {
  const [query, setQuery] = useState('');

  const search = (data: any[]) => {
    return data.filter(
      (item: { name: string; id: number }) =>
        item.name.toLowerCase().includes(query) ||
        item.id.toString().startsWith(query),
    );
  };

  const [modal, setModal] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = e => {
    e.preventDefault();
    setModal(!modal);
  };

  return (
    <Theme>
      <Container>
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
          <Categories />
          <div>
            <h2>Produtos</h2>
            <p>Selecione um produto para adicionar ao seu pedido</p>
          </div>
          <div className="container">
            <Show data={search(Products)} />
          </div>
          <Cart />
          <div className="buttons">
            <button type="button" className="cancelar">
              Cancelar
            </button>
            <button type="submit" className="finalizar">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </Container>
    </Theme>
  );
}

export default App;
