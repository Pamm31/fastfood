/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/extensions
import { Container } from './App.styles';
import Header from './components/Header';
import SearchArea from './components/SearchArea';

function App() {
  return (
    <Container>
      <Header />
      <div className="app">
        <SearchArea />
      </div>
    </Container>
  );
}

export default App;
