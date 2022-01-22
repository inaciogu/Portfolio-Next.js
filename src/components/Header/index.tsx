import { useContext, useEffect } from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import Switch from 'react-switch';
import { Context } from '../../context/index';
import NavLink from './NavLink';
import { Container } from './styles';

const Header = () => {
  const { toggleTheme, theme } = useContext(Context);
  return (
    <Container>
      <ul>
        <NavLink title="Início" path="/" />
        <NavLink title="Projetos" path="/projects" includes />
      </ul>
      {theme.title === 'light' ? (
        <BsSun size={20} />
      ) : (
        <BsMoonStars size={20} />
      )}
      <Switch
        onChange={() => toggleTheme()}
        checked={theme.title === 'dark'}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={theme.colors.primary}
      />
    </Container>
  );
};

export default Header;
