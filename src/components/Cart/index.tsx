/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Container } from './styles';

function Cart() {
  return (
    <Container>
      <ul>
        <li>
          <p>Item Name</p>
          <p>Preço</p>
        </li>
      </ul>
      <section className="total">
        Total do pedido:
        <span>TOTAL</span>
      </section>
    </Container>
  );
}

export default Cart;
