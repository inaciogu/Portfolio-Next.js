import { useContext } from 'react';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin
} from 'react-icons/ai';
import { FaRocket } from 'react-icons/fa';
import { Context } from '../../context';
import Container from './styles';

function Footer() {
  const { theme } = useContext(Context);

  const handleRedirect = (url: string) => {
    window.open(url);
  };

  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container>
      <div className="container">
        <button onClick={handleScrollTop} type="button">
          Voltar ao topo
        </button>
        <p>
          Desenvolvido e constantemente atualizado por Gustavo Inácio{' '}
          <FaRocket alignmentBaseline="central" color={theme.colors.primary} />
        </p>
        <section>
          <AiOutlineLinkedin
            onClick={() => handleRedirect('https://linkedin.com/in/inaciogu')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/inaciogu')}
          />
          <AiOutlineInstagram
            onClick={() => handleRedirect('https://instagram.com/inaciiogu/')}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
