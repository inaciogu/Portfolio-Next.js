import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import NavLink from './NavLink';
import { Container } from './styles';

interface HeaderProps {
  toggleTheme(): void;
}

function Header({ toggleTheme }: HeaderProps) {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <ul>
        <NavLink title="Início" path="/" />
        <NavLink title="Projetos" path="/projects" includes />
      </ul>
      <Switch
        onChange={() => toggleTheme()}
        checked={title === 'dark'}
        uncheckedIcon={false}
        height={10}
        width={40}
      />
    </Container>
  );
}

export default Header;
