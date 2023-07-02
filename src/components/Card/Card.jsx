import { Container } from './Card.styles';

function Card({ children }) {
  return (
    <Container>{children}</Container>
  );
}

export default Card;
