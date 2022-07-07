/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Container } from './styles';

interface Props {
  id: number;
  name: string;
  category: string;
  img: string;
  price: number;
  description: string;
}

function Show({ data }: any) {
  return data.map((item: Props) => (
    <Container>
      <div className="products {item.category}">
        <img src={item.img} alt={item.name} width="80" />
        <h4>{item.name}</h4>
        <h5>
          {item.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h5>
      </div>
    </Container>
  ));
}

export default Show;
