/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div className="logo">
        <img
          src="https://img.icons8.com/material-outlined/24/135c14/hamburger.png"
          alt="logo"
        />
        <h1>fastfood</h1>
      </div>
      <div className="nav">
        <li>
          <a href="/">Pedidos</a>
        </li>
        <li>
          <a href="https://josafa.com.br">Cozinha</a>
        </li>
        <li>
          <a href="https://josafa.com.br">Retirada</a>
        </li>
      </div>
    </Container>
  );
}

export default Header;
