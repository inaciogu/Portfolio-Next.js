import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import Prismic from '@prismicio/client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HomeContainer from '../styles/HomeStyles';
import HomeHero from '../components/HomeHero';
import Projects from '../components/Projects/index';
import Knowledge from '../components/Knowledge';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import getPrismicClient from '../services/prismic';
import Certificates from '../components/Certificates';
import Header from '../components/Header/index';
import Welcome from '../components/Welcome';

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
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <HomeContainer>
      <Head>
        <title>Home | Portfólio Web</title>
        <meta
          name="description"
          content="Sou desenvolvedor de software web e esse é o meu portfólio, contendo informações sobre mim e alguns projetos que desenvolvi"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou desenvolvedor de software web e esse é o meu portfólio, contendo informações sobre mim e alguns projetos que desenvolvi"
        />
      </Head>
      <Header />
      <main className="container">
        <Welcome />
        <HomeHero />
        <Projects projects={projects} />
        <Certificates />
        <Knowledge />
        <Contact />
      </main>
      <Footer />
    </HomeContainer>
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
