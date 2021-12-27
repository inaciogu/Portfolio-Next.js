import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Header from '../components/Header';
import HomeContainer from '../styles/HomeStyles';
import HomeHero from '../components/HomeHero';
import Projects from '../components/Projects/index';
import Knowledge from '../components/Knowledge';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import getPrismicClient from '../services/prismic';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  thumb: string;
}

interface HomeProps {
  projects: IProject[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <HomeContainer>
        <Header />
        <main className="container">
          <HomeHero />
          <Projects projects={projects} />
          <Knowledge />
          <Contact />
        </main>
        <Footer />
      </HomeContainer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const projectRes = await prismic.query(
    [Prismic.Predicates.at('document.type', 'project')],
    { orderings: '[document.first_publication_date desc]' }
  );
  console.log(projectRes.results);

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
