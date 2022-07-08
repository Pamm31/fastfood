/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
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
  const [modal, setModal] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = e => {
    e.preventDefault();
    setModal(!modal);
  };
  return data.map((item: Props) => (
    <Container>
      <div className="products" id={item.category} onClick={handleClick}>
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
    </Container>
  ));
}

export default Show;
