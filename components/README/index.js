import { Container, Title, Content } from './styles/README';

export default function Panel({ title, content }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
}
