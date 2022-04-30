import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { AiFillApi, AiFillBook, AiOutlineGlobal } from 'react-icons/ai';
import { useState } from 'react';
import ProjectsContainer from '../../styles/ProjectStyles';
import ProjectItem from '../../components/ProjectItem';
import getPrismicClient from '../../services/prismic';
import Header from '../../components/Header';
import ProjectTabs from '../../components/ProjectTabs';

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
  const [currentTab, setCurrentTab] = useState<string>('Todos');

  const getProjectsByType = (type: string) => {
    const selectedProjects = projects.filter(project => project.type === type);
    return selectedProjects;
  };

  const TABS = [
    {
      value: 'Todos',
      icon: <AiOutlineGlobal />,
      component: <ProjectItem projects={projects} />
    },
    {
      value: 'Frontend',
      icon: <AiFillBook />,
      component: <ProjectItem projects={getProjectsByType('Frontend')} />
    },
    {
      value: 'Backend',
      icon: <AiFillApi />,
      component: <ProjectItem projects={getProjectsByType('Backend')} />
    }
  ];

  return (
    <div>
      <Header />
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
        <main className="container">
          <ProjectTabs
            tabs={TABS}
            currentTab={currentTab}
            onChangeTab={tab => setCurrentTab(tab)}
          />
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
