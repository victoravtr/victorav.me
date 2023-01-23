import { Container, Title, Icon } from './styles/Header';
import { NavBar } from '../../components';

export default function Header({ avatar }) {
  return (
    <Container>
      <Icon alt="avatar" src={ avatar }/>
      <Title>victoravtr</Title>
      <NavBar />
    </Container>
  );
}
