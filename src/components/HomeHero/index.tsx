import { Container, TextContainer, InfoItem, InfosContainer } from './styles';

import picture from '../../assets/foto.jpeg';

function HomeHero() {
  return (
    <Container data-aos="fade-right">
      <div>
        <img src={picture} alt="" />
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
              <span className="secondary">Infos:</span> {'\u007B'}
              <div>
                Nome: <span className="secondary">Gustavo,</span>
              </div>
              <div>
                Sobrenome: <span className="green">Inacio,</span>
              </div>
              <div>
                Idade: <span className="yellow">20 anos,</span>
              </div>
              <div>
                Cidade: <span className="pink">Imbituba,</span>
              </div>
              <div>
                Estado: <span className="black">Santa Catarina,</span>
              </div>
              {'\u007D'}
            </InfoItem>
            <InfoItem data-aos="zoom-in">
              <span className="secondary">Soft Skills:</span> {'\u007B'}
              <div>
                <span className="green">Autodidatismo,</span>
              </div>
              <div>
                <span className="pink">Comunicação,</span>
              </div>
              <div>
                <span className="yellow">Pensamento Crítico,</span>
              </div>
              <div>
                <span className="secondary">Trabalho em Equipe,</span>
              </div>
              {'\u007D'}
            </InfoItem>
          </InfosContainer>
        </TextContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
