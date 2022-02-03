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
          width={300}
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
                Desenvolvedor <strong>Front End jr.</strong> altamente
                comunicativo, dedicado e cheio de vontade de aprender cada vez
                mais. Comecei minha jornada no{' '}
                <strong>desenvolvimento web</strong> em junho de 2021 e desde
                então, venho me esforçado todos os dias para evoluir minhas
                habilidades tecnicas e sociocomportamentais a fim de poder
                ingressar no mercado de trabalho e agregar valor.
              </p>
            </InfoItem>
            <InfoItem data-aos="zoom-in">
              <p>
                Na minha trajetoria como estudante, tenho trabalhado com
                metodologias ágeis de desenvolvimento, de maneira prática, em
                projetos em grupo e através de aulas voltadas ás soft skills no
                curso da Trybe. Essas experiências serviram para me mostrar a
                importancia de se ter um padrão organizacional de
                desenvolvimento.
              </p>
            </InfoItem>
            <InfoItem data-aos="zoom-in">
              <p>
                Atualmente, estou me aprofundando no <strong>Back End</strong>,
                utilizando Node.js e express para criar APIs rest que se
                comunicam diretamente com bancos de dados, até o momento tive
                contato apenas com MySQL. Estou em busca de me tornar um
                desenvolvedor full stack, pois gosto muito das duas vertentes e
                pretendo, no futuro, trabalhar com as duas.
              </p>
            </InfoItem>
          </InfosContainer>
        </TextContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
