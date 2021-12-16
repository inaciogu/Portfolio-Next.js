import Head from 'next/head';
import ProjectsContainer from '../../styles/ProjectStyles';
import Header from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projetos</title>
      </Head>
      <ProjectsContainer>
        <Header />
        <main className="container">
          <ProjectItem
            type="website"
            title="projeto 1"
            slug="test"
            imgUrl="https://next.me/v2/whatsnext/cartao-credito-next/kvblog_pedir_cartao_v1.png"
          />
        </main>
      </ProjectsContainer>
    </div>
  );
}
