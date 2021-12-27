import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectHome';
import { Container } from './styles';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  thumb: string;
}

interface ProjectsProps {
  projects: IProject[];
}

function Projetos({ projects }: ProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        {projects.map(project => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            img={project.thumb}
            slug={project.slug}
          />
        ))}
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
