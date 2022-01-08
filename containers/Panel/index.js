import { Container, Title, Content } from './styles/Panel'

export default function Panel({ title, children }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Content>{children}</Content>
        </Container>
    )
}