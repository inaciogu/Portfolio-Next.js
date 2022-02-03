import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Overlay from '../Overlay';
import { ProjectContainer } from './styles';

interface ProjectProps {
  title: string;
  slug: string;
  img: string;
}

export default function ProjectItem({ title, slug, img }: ProjectProps) {
  return (
    <ProjectContainer data-aos="fade-up" imgSrc={img}>
      <section>
        <Overlay />
        <div className="text">
          <h1># {title}</h1>
        </div>
        <button type="button">
          <Link href={`/projects/${slug}`}>
            <a>
              Ver mais <AiOutlineRightCircle />
            </a>
          </Link>
        </button>
      </section>
    </ProjectContainer>
  );
}
