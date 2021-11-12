import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from './styles';

interface ProjectProps {
  title: string;
  slug: string;
  img: string;
}

export default function ProjectItem({ title, slug, img }: ProjectProps) {
  return (
    <ProjectContainer imgSrc={img}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
        </div>
      </section>
      <button type="button">
        <Link href={`/projects/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}
