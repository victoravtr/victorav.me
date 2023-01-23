import Link from 'next/link';
import { Container, Text } from './styles/NavLink';
import { Icon } from '..';

export default function NavLink({ data }) {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Link legacyBehavior onClick={handleClick} href={data.path}>
        <a href={data.path}>
          <Icon icon={data.icon} />
          <Text>{data.title}</Text>
        </a>
      </Link>
    </Container>
  );
}
