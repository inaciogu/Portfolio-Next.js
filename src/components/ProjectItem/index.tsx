import Link from 'next/link';
import Overlay from '../Overlay';
import Container from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
}

function ProjectItem({ title, type, slug, imgUrl }: ProjectItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projects/${slug}`}>
        <a>
          <Overlay />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjectItem;
