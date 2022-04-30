import Link from 'next/link';
import Overlay from '../Overlay';
import Container from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  slug: string;
  thumb: string;
}

interface Project {
  projects: ProjectItemProps[];
}

function ProjectItem({ projects }: Project) {
  return (
    <>
      {projects.map(project => (
        <Container imgUrl={project.thumb}>
          <Link href={`/projects/${project.slug}`}>
            <a>
              <Overlay />
              <section>
                <h1>{project.title}</h1>
                <h2>{project.type}</h2>
              </section>
            </a>
          </Link>
        </Container>
      ))}
    </>
  );
}

export default ProjectItem;
