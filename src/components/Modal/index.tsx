/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Container } from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Modal() {
  return (
    <Container>
      <div className="overlay" />
      <div className="popUp">
        <h2>Revise seu pedido!</h2>
        <p>X</p>
      </div>
    </Container>
  );
}

export default Modal;
