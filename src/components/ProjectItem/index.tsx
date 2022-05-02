import { Box } from '@mui/material';
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
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      {projects.map(project => (
        <Container key={project.slug} imgUrl={project.thumb}>
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
    </Box>
  );
}

export default ProjectItem;
