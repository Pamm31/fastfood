/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/extensions
import { Container } from './App.styles';
import Header from './components/Header';
import SearchArea from './components/SearchArea';
import Categories from './components/Categories';

function App() {
  return (
    <Container>
      <Header />
      <div className="app">
        <SearchArea />
        <Categories />
      </div>
    </Container>
  );
}

export default App;
