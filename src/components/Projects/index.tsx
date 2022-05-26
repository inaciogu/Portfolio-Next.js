import Link from 'next/link';
import { useState } from 'react';
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
  const [position, setPosition] = useState<number>(0);

  const handleNextPosition = () => {
    setPosition(position === projects.length - 1 ? 0 : position + 1);
  };

  const handlePreviousPosition = () => {
    setPosition(position === 0 ? projects.length - 1 : position - 1);
  };

  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjectItem
          increment={() => handleNextPosition()}
          decrement={() => handlePreviousPosition()}
          title={projects[position].title}
          img={projects[position].thumb}
          slug={projects[position].slug}
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
