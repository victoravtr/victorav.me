import { Container } from './styles/NavBar';
import { NavLink } from '..';

export default function NavBar() {
  const Tabs = [
    {
      title: 'Overview',
      path: '/',
      icon: 'HomeIcon',
    },
    {
      title: 'Repositories',
      path: '/repositories',
      icon: 'RepoIcon',
    },
  ];

  return (
    <Container>
      {Tabs.map((tab) => (
        <NavLink key={tab.title} data={tab} />
      ))}
    </Container>
  );
}
