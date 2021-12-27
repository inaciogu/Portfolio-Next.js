import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projects" includes />
        <NavLink title="contato" path="#contact" />
      </ul>
    </Container>
  );
}

export default Header;
