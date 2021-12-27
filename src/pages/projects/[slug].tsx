import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import ProjectBanner from '../../components/ProjectBanner';
import getPrismicClient from '../../services/prismic';
import ProjectContainer from '../../styles/ProjectStyle';
import Loading from '../../components/Loading';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  thumb: string;
  link: string;
}

interface ProjectProps {
  project: IProject;
}

export default function Project({ project }: ProjectProps) {
  const router = useRouter();
  if (router.isFallback === true) {
    return <Loading />;
  }
  return (
    <ProjectContainer>
      <Header />
      <ProjectBanner
        title={project.title}
        type={project.type}
        imgUrl={project.thumb}
      />
      <main>
        <p>{project.description}</p>
        <button type="button">
          <a target="_blank" href={project.link} rel="noreferrer">
            Ver projeto online
          </a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'project')
  ]);

  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('project', String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumb: response.data.thumb.url
  };

  return {
    props: {
      project
    },
    revalidate: 86400
  };
};
