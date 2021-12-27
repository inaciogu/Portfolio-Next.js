import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import ProjectsContainer from '../../styles/ProjectStyles';
import Header from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import getPrismicClient from '../../services/prismic';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  thumb: string;
}

interface ProjectProps {
  projects: IProject[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <div>
      <Head>
        <title>Projetos | Portfólio Web</title>
        <meta
          name="description"
          content="Esta página contém os projetos que desenvolvi, cada um tem sua página única com informações relevantes"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Esta página contém os projetos que desenvolvi, cada um tem sua página única com informações relevantes"
        />
      </Head>
      <ProjectsContainer>
        <Header />
        <main className="container">
          {projects.map(project => (
            <ProjectItem
              key={project.slug}
              type={project.type}
              title={project.title}
              slug={project.slug}
              imgUrl={project.thumb}
            />
          ))}
        </main>
      </ProjectsContainer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const projectRes = await prismic.query(
    [Prismic.Predicates.at('document.type', 'project')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projects = projectRes.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    thumb: project.data.thumb.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
