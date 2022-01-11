import { useContext } from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import NavLink from './NavLink';
import { Container } from './styles';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext);
  return (
    <Container>
      <ul>
        <NavLink title="Início" path="/" />
        <NavLink title="Projetos" path="/projects" includes />
      </ul>
      {title === 'light' ? <BsSun size={20} /> : <BsMoonStars size={20} />}
      <Switch
        onChange={() => toggleTheme()}
        checked={title === 'dark'}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={colors.primary}
      />
    </Container>
  );
};

export default Header;
