import Overlay from '../Overlay';
import Container from './styles';

interface ProjectBannerProps {
  title: string;
  type: string;
  imgUrl: string;
}

function ProjectBanner({ title, type, imgUrl }: ProjectBannerProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Overlay />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}

export default ProjectBanner;
