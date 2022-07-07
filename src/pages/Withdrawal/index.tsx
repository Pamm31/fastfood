/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-filename-extension */
import { Container } from './styles';
import { Theme } from '../../components/Theme';

export function Withdrawal() {
  return (
    <Theme>
      <Container>
        <section>
          <h2 className="preparando">Preparando:</h2>
        </section>
        <section className="done">
          <h2>Pronto:</h2>
        </section>
      </Container>
    </Theme>
  );
}
