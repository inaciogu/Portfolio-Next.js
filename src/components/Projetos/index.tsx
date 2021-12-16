import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectHome';
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjectItem
          title="Trybetunes"
          img="https://blog.nubank.com.br/wp-content/uploads/2019/09/Webp.net-resizeimage-2019-09-12T102711.144.jpg"
          slug="test"
        />
        <ProjectItem
          title="Trivia"
          img="https://blog.nubank.com.br/wp-content/uploads/2019/09/Webp.net-resizeimage-2019-09-12T102711.144.jpg"
          slug="test"
        />
        <ProjectItem
          title="FrontEnd Online store"
          img="https://blog.nubank.com.br/wp-content/uploads/2019/09/Webp.net-resizeimage-2019-09-12T102711.144.jpg"
          slug="test"
        />
      </section>
      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
