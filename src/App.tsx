/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Container } from './App.styles';
import Categories from './components/Categories';
import { Theme } from './components/Theme';
import Show from './components/Show';
import Products from './components/Data';

function App(): JSX.Element {
  const [query, setQuery] = useState('');

  const search = (data: any[]) => {
    return data.filter(
      (item: { name: string; id: number }) =>
        item.name.toLowerCase().includes(query) ||
        item.id.toString().includes(query),
    );
  };
  return (
    <Theme>
      <Container>
        <div className="app">
          <div>
            <h2>Seja bem vindo!</h2>
            <input
              type="text"
              placeholder="O que você procura?"
              className="search"
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <Categories />
          <div className="container">
            <Show data={search(Products)} />
          </div>
        </div>
      </Container>
    </Theme>
  );
}

export default App;
