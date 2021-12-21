import Header from '../../components/Header';
import ProjectBanner from '../../components/ProjectBanner';
import ProjectContainer from '../../styles/ProjectStyle';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <ProjectBanner
        title="Projeto01"
        type="website"
        imgUrl="https://next.me/v2/whatsnext/cartao-credito-next/kvblog_pedir_cartao_v1.png"
      />
      <main>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          eaque corporis iure optio est iste commodi id hic, similique atque,
          facilis expedita culpa ipsum tenetur eos. Consequatur obcaecati ipsum
          laudantium?
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
