import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { Box, Button, Link } from '@mui/material';
import { useContext } from 'react';
import { darken, lighten } from 'polished';
import ProjectBanner from '../../components/ProjectBanner';
import getPrismicClient from '../../services/prismic';
import ProjectContainer from '../../styles/ProjectStyle';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import { Context } from '../../context';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  thumb: string;
  link: string;
  ghLink: string;
}

interface ProjectProps {
  project: IProject;
}

export default function Project({ project }: ProjectProps) {
  const router = useRouter();
  const { theme } = useContext(Context);

  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <ProjectContainer>
      <Header />
      <Head>
        <title>{project.title} | Portfólio Web</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumb} />
        <meta property="og:image:secure_url" content={project.thumb} />
        <meta name="twitter:image" content={project.thumb} />
        <meta name="twitter:image:src" content={project.thumb} />
        <meta property="og:description" content={project.description} />
      </Head>

      <ProjectBanner
        title={project.title}
        type={project.type}
        imgUrl={project.thumb}
      />
      <main>
        <p>{project.description}</p>
        <Box
          mt={3}
          display="flex"
          alignItems="center"
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          <Link
            component={Button}
            underline="none"
            disabled={project.link.includes('null')}
            target="_blank"
            href={project.link}
            startIcon={<AiOutlineGlobal />}
            rel="noreferrer"
            sx={{
              background: theme.colors.primary,
              color: '#fff',
              mr: {
                xs: 'inherit',
                md: 2,
                '&:hover': { background: darken(0.05, theme.colors.primary) }
              }
            }}
          >
            Projeto Online
          </Link>
          <Link
            component={Button}
            underline="none"
            target="_blank"
            href={project.ghLink}
            startIcon={<BsGithub />}
            rel="noreferrer"
            sx={{
              background: 'black',
              color: '#fff',
              '&:hover': { background: lighten(0.05, 'black') }
            }}
          >
            Repositório do Projeto
          </Link>
        </Box>
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
    link: response.data.link.url || '',
    thumb: response.data.thumb.url,
    ghLink: response.data.gh_link.url
  };

  return {
    props: {
      project
    },
    revalidate: 86400
  };
};
