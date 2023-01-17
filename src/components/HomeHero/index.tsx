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
              Desenvolvedor de software cheio de vontade de aprender cada vez mais!  Gosto de viver novas experiências, aproveitar oportunidades de trabalhar com coisas novas e participar de novos desafios que me façam sair da minha zona de conforto. Encontrei na area de tecnologia uma paixão por desenvolver coisas que possam impactar de alguma forma a vida das pessoas, e por conta disso, me dedico todos os dias a fim de me tornar um profissional melhor.
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
                Atualmente, atuo como desenvolvedor Full Stack em uma empresa focada em desenvolvimento de aplicativos para Zendesk, utilizando, principalmente, React.js e Node.js. Possuo experiência com ferramentas de cloud como AWS e heroku, com bancos de dados relacionais e não relacionais e testes com Jest. No momento, estou me aprofundando em padrões de projeto, principios da arquitetura limpa e de código limpo para dar o próximo passo na carreira.
              </p>
            </InfoItem>
          </InfosContainer>
        </TextContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
