import Lottie from 'react-lottie';
import { Container, TextContainer, InfoItem, InfosContainer } from './styles';
import animationData from './animation.json';

function HomeHero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Container data-aos="fade-right">
      <div className="animation">
        <Lottie
          options={defaultOptions}
          height={420}
          width={400}
          isStopped={false}
          isPaused={false}
        />
      </div>
      <div>
        <TextContainer>
          <h1>Quem sou?!</h1>
          <InfosContainer>
            <InfoItem data-aos="zoom-in">
              <section className="about">Sobre mim</section>
              <p>
                Desenvolvedor <strong>Web</strong> altamente comunicativo,
                dedicado e cheio de vontade de aprender cada vez mais. Comecei
                minha jornada no <strong>desenvolvimento web</strong> em junho
                de 2021 e desde então, venho me esforçado todos os dias para
                evoluir minhas habilidades tecnicas e sociocomportamentais a fim
                de poder ingressar no mercado de trabalho e agregar valor.
              </p>
            </InfoItem>
            <InfoItem data-aos="zoom-in">
              <p>
                Na minha trajetoria como estudante e profissional, tenho
                trabalhado com metodologias ágeis de desenvolvimento, como scrum
                e kanban. Essas experiências serviram para me mostrar a
                importancia de se ter um padrão organizacional de
                desenvolvimento.
              </p>
            </InfoItem>
            <InfoItem data-aos="zoom-in">
              <p>
                Atualmente, estou atuando como Front end e, em paralelo, me
                aprofundando no <strong>Back End</strong>, utilizando Node.js e
                express. No Back end, tenho familiaridade com sequelize, POO e
                também já apliquei o método TDD em alguns projetos que
                desenvolvi, em todos eles procurei utilizar autenticação via
                JWT. Também ja tive contato com ferramentas de deploy, como
                heroku e AWS.
              </p>
            </InfoItem>
          </InfosContainer>
        </TextContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
