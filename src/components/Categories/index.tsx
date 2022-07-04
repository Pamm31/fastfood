/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Container } from './styles';

function Categories() {
  return (
    <Container>
      <h2>Categorias</h2>
      <p>Navegue por categoria</p>
      <div className="categorias">
        <div className="categorias--categoria">
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
          />
          <h3>Acompanhamentos</h3>
        </div>
        <div className="categorias--categoria">
          <img
            src="https://www.freeiconspng.com/uploads/cocktail-coca-cola-png-image-14.png"
            height="80"
            alt="coca cola"
          />
          <h3>Bebidas</h3>
        </div>
        <div className="categorias--categoria">
          <img
            src="https://pngimg.com/uploads/cake/cake_PNG13097.png"
            alt="cake"
            height="80"
          />
          <h3>Sobremesas</h3>
        </div>
      </div>
    </Container>
  );
}

export default Categories;
